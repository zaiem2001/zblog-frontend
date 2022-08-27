import { useEffect } from "react";

const UseDocumentTitle = (title: string): void => {
  useEffect(() => {
    const prevTitle = title;
    document.title = title

    return () => {
      document.title = prevTitle;
    };
  }, [title]);
};

export default UseDocumentTitle;
