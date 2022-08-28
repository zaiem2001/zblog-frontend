import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { Progress } from "antd";
import { CloudDownloadOutlined } from "@ant-design/icons";

import { CreateBlogMutation } from "../../Queries/Blog/Mutations/__generated__/CreateBlogMutation.graphql";
import { CreateUserBlogMutation } from "../../Queries/Blog/Mutations/CreateBlog";

import { useUploadFile } from "../../Hooks/UseUploadFile";
import UseDocumentTitle from "../../Hooks/UseDocumentTitle";
import MultiSelect from "../../Components/Select/MultiSelect";
import "./write.css";
import Message from "../../Components/Message/Message";
import {
  StyledBlogImage,
  StyledButton,
  StyledContainer,
  StyledDeleteOutlined,
  StyledFormContainer,
  StyledImageContainer,
  StyledMarkdown,
  StyledMarkdownContainer,
  StyledMarkdownHeader,
  StyledNoImage,
  StyledSubmitButton,
  StyledTextArea,
} from "./Write.styled";
import { CATEGORIES, exampleMarkdownText } from "../../Constants/constants";

const Write: React.FC = () => {
  UseDocumentTitle("Z Blog - Create New Blog");

  const { adding, progress, upload } = useUploadFile();
  const navigate = useNavigate();

  const [commitBlog, isPublishing] = useMutation<CreateBlogMutation>(
    CreateUserBlogMutation
  );

  const [file, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("");
  const [categories, setCategories] = useState<string[]>([]);
  const [markDown, setMarkDown] = useState(exampleMarkdownText);

  const resetForm = () => {
    setFile(null);
    setCategories([]);
    setMarkDown(exampleMarkdownText);
    setTitle("");
  };

  const handleCategories = (value: string[]) => {
    setCategories(value);
  };

  const handleSubmit = (url: string) => {
    commitBlog({
      variables: {
        input: {
          description: markDown,
          title,
          image: url,
          categories,
        },
      },
      onCompleted(response, errors) {
        if (response?.createBlog) {
          Message({ text: "Blog Created Successfully.", type: "success" });
          resetForm();
          navigate(
            `/post/${response?.createBlog?.title.replaceAll(" ", "-")}/${
              response?.createBlog?.id
            }`
          );
        }
        if (errors?.length) {
          Message({ text: errors[0].message });
        }
      },
    });
  };

  const handlePublish = (e: React.FormEvent) => {
    e.preventDefault();

    if (!categories.length || !file || !title.trim() || !markDown.length) {
      Message({ text: "All the fields are required" });
      return;
    }

    console.log(markDown);
    upload(file, (url) => handleSubmit(url));
  };

  return (
    <StyledContainer>
      <StyledFormContainer onSubmit={handlePublish}>
        {file ? (
          <StyledImageContainer>
            <StyledBlogImage>
              <img src={URL.createObjectURL(file)} alt="blog_image" />
            </StyledBlogImage>

            <StyledDeleteOutlined
              onClick={() => {
                if (isPublishing || adding) return;
                setFile(null);
              }}
            />

            {adding ? (
              <Progress
                type="circle"
                percent={progress}
                strokeColor={{
                  "0%": "crimson",
                  "50%": "red",
                  "100%": "rebeccapurple",
                }}
                width={80}
                className="progressBar"
              />
            ) : (
              <></>
            )}
          </StyledImageContainer>
        ) : (
          <StyledNoImage>
            <div>
              <label htmlFor="fileInput">
                <i className="fas fa-plus"></i>
              </label>
              <input
                id="fileInput"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  if (e.target.files) {
                    setFile(e.target.files[0]);
                  }
                }}
                type="file"
                style={{ display: "none" }}
              />
              <p> Choose Image</p>
            </div>
          </StyledNoImage>
        )}
        <div className="writeFormGroup fileInputBox">
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>

        <div className="writeFormGroup categoriesSelect">
          <MultiSelect options={CATEGORIES} onChange={handleCategories} />
        </div>

        <div className="markDownContainer">
          <StyledMarkdownHeader>
            <h3>You can write Markdown text here. like Github Readme.md</h3>
            <p>
              You can refer{" "}
              <a
                href="https://www.markdownguide.org/cheat-sheet/"
                target="_blank"
                rel="noreferrer"
              >
                This Page
              </a>{" "}
              for the Markdown CheatSheet.
            </p>
          </StyledMarkdownHeader>

          <StyledMarkdownContainer className="markDownTextContainer">
            <StyledTextArea
              placeholder="Write your Blog..."
              autoFocus={true}
              value={markDown}
              onChange={(e) => setMarkDown(e.target.value)}
            />

            <StyledMarkdown>
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markDown}
              </ReactMarkdown>
            </StyledMarkdown>
          </StyledMarkdownContainer>
        </div>

        <StyledSubmitButton>
          <StyledButton
            size="large"
            ghost
            icon={<CloudDownloadOutlined />}
            htmlType="submit"
            loading={isPublishing || adding}
          >
            Publish
          </StyledButton>
        </StyledSubmitButton>
      </StyledFormContainer>
    </StyledContainer>
  );
};

export default Write;
