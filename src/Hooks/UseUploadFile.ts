import { useState } from "react";
import { storage } from "../config/firebase";

export const useUploadFile = () => {
  const [adding, setAdding] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [progress, setProgress] = useState(0);

  const upload = (file: File, cb: (url: string) => any) => {
    const uploadFile = storage.ref(`images/${file.name}`).put(file);
    uploadFile.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );

        setAdding(true);
        setProgress(progress);
      },
      (error) => {
        setError(error);
      },
      () => {
        storage
          .ref("images")
          .child(file.name)
          .getDownloadURL()
          .then((url) => {
            cb(url);
            setAdding(false);
            setProgress(0);
          });
      }
    );
  };

  return {
    upload,
    progress,
    adding,
    error,
  };
};
