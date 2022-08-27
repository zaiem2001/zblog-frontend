import React from "react";
import { StyledInfiniteScrollContainer } from "./infiniteScroll.styled";
interface Props {
  children: React.ReactNode;
  loadMore: () => any;
  hasMore: boolean;
  loader: any;
}

const StyledInfiniteScroll: React.FC<Props> = ({
  children,
  loadMore,
  hasMore,
  loader,
}) => {
  return (
    <StyledInfiniteScrollContainer
      loadMore={loadMore}
      hasMore={hasMore}
      loader={loader}
      // style={{ display: "flex", flexWrap: "wrap" }}
    >
      {children}
    </StyledInfiniteScrollContainer>
  );
};

export default StyledInfiniteScroll;
