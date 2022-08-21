import React, { useState } from "react";
import { useLazyLoadQuery, useMutation } from "react-relay";
import { Button, Progress } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

import { UpdateUserMutation } from "../../Queries/User/__generated__/UpdateUserMutation.graphql";

import SidebarNav from "../../Components/sidebar/SideBarNav";
import { User } from "../../Constants/Interfaces";
import { UpdateMutation } from "../../Queries/User/Update";
import { useUploadFile } from "../../Hooks/UseUploadFile";
import "./settings.css";
import Message from "../../Components/Message/Message";
import { GetBlogsQuery } from "../../Queries/Blog/__generated__/GetBlogsQuery.graphql";
import { GetBlogs } from "../../Queries/Blog/GetBlogs";
import Posts from "../../Components/posts/Posts";
import { timeAgoFormat } from "../../Utils/helpers";

interface Props {
  user: User;
  setUser: (args: any) => any;
}

const Settings: React.FC<Props> = ({ user, setUser }) => {
  const [file, setFile] = useState<File | null>(null);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);

  const blogsRef = useLazyLoadQuery<GetBlogsQuery>(GetBlogs, {
    filter: { user: user.id },
  });

  const [commitUpdate, isUpdating] =
    useMutation<UpdateUserMutation>(UpdateMutation);

  const { adding, progress, upload } = useUploadFile();

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
          localStorage.setItem("zblog-user", JSON.stringify(response.user));
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

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsTitleUpdate">Update Your Account</span>
          <span className="lastUpdatedInfo">
            Last Updated (
            {user?.updatedAt
              ? timeAgoFormat(Date.parse(user?.updatedAt).toString())
              : "Never"}
            )
          </span>
          <span className="settingsTitleDelete">Delete Account</span>
        </div>
        <form className="settingsForm" onSubmit={handleSubmit}>
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
                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
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
        </form>

        <div className="userBlogs">
          <div className="userBlogs__title">
            <h2> Your Blogs</h2>
          </div>

          <div className="userBlogs__container">
            <Posts blogsRef={blogsRef} />
          </div>
        </div>
      </div>
      <SidebarNav />
    </div>
  );
};

export default Settings;
