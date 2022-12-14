import React from "react";
import { useLazyLoadQuery } from "react-relay";
import { useParams } from "react-router-dom";

import { GetSingleBlog } from "../../Queries/Blog/GetBlog";
import { GetBlogByTitleQuery } from "../../Queries/Blog/__generated__/GetBlogByTitleQuery.graphql";

import SidebarNav from "../../Components/sidebar/SideBarNav";
import SinglePost from "../../Components/singlePost/SinglePost";
import { StyledContainer } from "./Single.styled";
import useIsMobile from "../../Hooks/UseIsMobile";

const Single: React.FC = () => {
  const { id } = useParams();
  const isMobile = useIsMobile();

  const singleBlogRef = useLazyLoadQuery<GetBlogByTitleQuery>(
    GetSingleBlog,
    {
      id,
    },
    {
      fetchPolicy: "store-and-network",
    }
  );

  return (
    <StyledContainer>
      <SinglePost blogRef={singleBlogRef} isMobile={isMobile} />
      {!isMobile && <SidebarNav />}
    </StyledContainer>
  );
};

export default Single;
