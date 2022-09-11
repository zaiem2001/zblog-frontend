import React from "react";
import { useFragment } from "react-relay";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { v4 as uuidv4 } from "uuid";

import { timeAgoFormat } from "../../Utils/helpers";
import { SingleBlogFragment } from "../../Queries/Blog/GetBlog.fragment";
import {
  StyledBlogInfo,
  StyledContainer,
  StyledLink,
  StyledPostCategories,
  StyledPostDate,
  StyledPostDescription,
  StyledPostTitle,
} from "./Post.styled";
import useIsMobile from "../../Hooks/UseIsMobile";

interface PostProps {
  blog: any;
}

const getFormattedURL = (url: string) => {
  return url.replaceAll(" ", "-");
};

const Post: React.FC<PostProps> = ({ blog }) => {
  const fragmentData = useFragment(SingleBlogFragment, blog.node);

  const isMobile = useIsMobile();

  return (
    <StyledContainer ismobile={isMobile.toString()}>
      <StyledLink
        ismobile={isMobile.toString()}
        to={`/post/${getFormattedURL(fragmentData.title)}/${fragmentData.id}`}
      >
        <img className="postImg" src={fragmentData?.image} alt="blog" />
      </StyledLink>

      <StyledBlogInfo className="postInfo">
        <div>
          {fragmentData?.categories?.map((category: string) => (
            <StyledPostCategories
              className="postCat"
              key={uuidv4()}
              ismobile={isMobile.toString()}
            >
              {category}
            </StyledPostCategories>
          ))}
        </div>

        <StyledPostTitle className="postTitle">
          <Link
            to={`/post/${getFormattedURL(fragmentData.title)}/${
              fragmentData.id
            }`}
            className="link"
          >
            {fragmentData?.title}
          </Link>
        </StyledPostTitle>

        <hr />

        <StyledPostDate>
          {timeAgoFormat(fragmentData?.createdAt)}
        </StyledPostDate>
      </StyledBlogInfo>

      <StyledPostDescription>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {fragmentData?.description}
        </ReactMarkdown>
      </StyledPostDescription>
    </StyledContainer>
  );
};

export default Post;
