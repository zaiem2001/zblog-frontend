import React from "react";
import { StyledInfiniteScrollContainer } from "./infiniteScroll.styled";
import { v4 as uuidv4 } from "uuid";

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
      key={uuidv4()}
    >
      {children}
    </StyledInfiniteScrollContainer>
  );
};

export default StyledInfiniteScroll;
