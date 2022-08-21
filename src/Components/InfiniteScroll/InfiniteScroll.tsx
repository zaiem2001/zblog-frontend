import React from "react";
import InfiniteScroll from "react-infinite-scroller";

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
    <div style={{ display: "flex", flexDirection: "column" }}>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} loader={loader}>
        {children}
      </InfiniteScroll>
    </div>
  );
};

export default StyledInfiniteScroll;
