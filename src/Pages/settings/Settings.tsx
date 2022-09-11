import React, { useState } from "react";
import { graphql } from "babel-plugin-relay/macro";
import { useNavigate } from "react-router-dom";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { Button, Progress } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

import { UpdateUserMutation } from "../../Queries/User/__generated__/UpdateUserMutation.graphql";
import { DeleteUserMutation } from "../../Queries/User/__generated__/DeleteUserMutation.graphql";
import { DeleteUser } from "../../Queries/User/Delete";
import { UpdateMutation } from "../../Queries/User/Update";
import { SettingsPageQuery } from "./__generated__/SettingsPageQuery.graphql";

import { useUploadFile } from "../../Hooks/UseUploadFile";
import UseDocumentTitle from "../../Hooks/UseDocumentTitle";
import SidebarNav from "../../Components/sidebar/SideBarNav";
import Message from "../../Components/Message/Message";
import Posts from "../../Components/posts/Posts";
import CustomModal from "../../Components/Modal/Modal";
import "./settings.css";
import {
  StyledContainer,
  StyledFormContainer,
  StyledTitle,
  StyledUserBlogsContainer,
  StyledUserBlogsTitle,
  StyledWrapper,
} from "./Settings.styled";
import { timeAgoFormat } from "../../Utils/helpers";
import { User } from "../../Constants/Interfaces";
import { localStorageKeys } from "../../Constants/constants";
import useIsMobile from "../../Hooks/UseIsMobile";

interface Props {
  user: User;
  setUser: (args: any) => any;
  logout: () => any;
}

const Settings: React.FC<Props> = ({ user, setUser, logout }) => {
  const navigate = useNavigate();
  const { adding, progress, upload } = useUploadFile();
  UseDocumentTitle(`${user?.username} | Profile`);

  const isMobile = useIsMobile();

  const [file, setFile] = useState<File | null>(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const [visible, setVisible] = useState(false);

  const blogsRef = useLazyLoadQuery<SettingsPageQuery>(
    graphql`
      query SettingsPageQuery(
        $after: String
        $first: Int
        $filter: FilterInput
        $sortBy: SortInput
      ) {
        ...GetBlogPagination_query
      }
    `,
    {
      filter: { user: user.id },
      first: 6,
    },
    { fetchPolicy: "store-and-network" }
  );

  const [commitUpdate, isUpdating] =
    useMutation<UpdateUserMutation>(UpdateMutation);

  const [commitDelete, isDeleting] =
    useMutation<DeleteUserMutation>(DeleteUser);

  const handleUpdateData = (url: string | null = null) => {
    commitUpdate({
      variables: {
        input: {
          email,
          profilePicture: url || user.profilePicture,
          username,
        },
      },
      onCompleted(response, errors) {
        if (errors?.length) {
          Message({ text: errors[0].message });
          setFile(null);
          setUsername(user.username);
          setEmail(user.email);
        }

        if (response.user) {
          setUser(response.user);
          localStorage.setItem(
            localStorageKeys.user,
            JSON.stringify(response.user)
          );
          Message({ text: "Update success", type: "success" });
          setFile(null);
        }
      },
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!username.trim() || !email.trim()) {
      setEmail(user.email);
      setUsername(user.username);
      return;
    }

    if (
      email.trim().toLowerCase() === user.email.toLowerCase() &&
      username.trim() === user.username &&
      !file?.name
    ) {
      Message({ text: "Nothing Updated" });
      return;
    }

    if (file?.name) {
      upload(file, (url) => handleUpdateData(url));
    } else {
      handleUpdateData();
    }
  };

  const handleCancel = () => {
    if (isDeleting) return;

    setVisible(false);
  };

  const handleOk = () => {
    if (isDeleting) return;

    commitDelete({
      variables: {},
      onCompleted(response, errors) {
        if (errors?.length) {
          Message({ text: errors[0].message });
        }

        if (response.user) {
          Message({ text: "Account Deleted Successfully!", type: "success" });
          logout();
          navigate("/");
        }
      },
    });
  };

  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledTitle ismobile={isMobile}>
          <span>Update Your Account</span>
          <span>
            Last Updated (
            {user?.updatedAt ? timeAgoFormat(user?.updatedAt) : "Never"})
          </span>
          <span onClick={() => setVisible((prev) => !prev)}>
            Delete Account
          </span>
        </StyledTitle>

        <StyledFormContainer onSubmit={handleSubmit}>
          <label>Profile Picture</label>
          <div className="image-actions">
            <div className="settingsPP">
              <img
                src={
                  user?.profilePicture
                    ? user?.profilePicture
                    : "/assets/noAvatar.png"
                }
                alt={user?.username}
              />
              <label htmlFor="fileInput">
                <i className="far fa-user-circle"></i>{" "}
              </label>
              <input
                type="file"
                accept=".png,.jpeg,.jpg"
                onChange={(e) => {
                  if (e.target.files) {
                    setFile(e.target.files[0]);
                  }
                }}
                style={{ display: "none" }}
                id="fileInput"
                className="settingsPPInput"
              />
            </div>
            {file && (
              <div className="share__image__container">
                <img
                  src={URL.createObjectURL(file)}
                  alt="user_img"
                  className="share__image"
                />

                <CloseCircleOutlined
                  className="share__cancel"
                  onClick={() => setFile(null)}
                />
              </div>
            )}

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
          </div>

          <label>Username</label>
          <input
            type="text"
            placeholder="Zaiem"
            name="name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="Zaiem@gmail.com"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {/* <label>Password</label>
          <input type="password" placeholder="Password" name="password" /> */}
          <Button
            className="settingsSubmitButton"
            type="primary"
            htmlType="submit"
            loading={isUpdating || adding}
          >
            Update
          </Button>
        </StyledFormContainer>

        <StyledUserBlogsContainer>
          <StyledUserBlogsTitle>
            <h2> Your Blogs</h2>
          </StyledUserBlogsTitle>

          <div className="userBlogs__container">
            <Posts blogsRef={blogsRef} />
          </div>
        </StyledUserBlogsContainer>
      </StyledWrapper>
      {!isMobile && <SidebarNav />}

      <CustomModal
        title="This action is Irreversible!"
        visible={visible}
        onOk={handleOk}
        confirmLoading={isDeleting}
        onCancel={handleCancel}
        okText="Delete"
      >
        <p>Are you sure you want to Delete the account ?</p>
      </CustomModal>
    </StyledContainer>
  );
};

export default Settings;
