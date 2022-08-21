import { User } from "../../Constants/Interfaces";
import { timeAgoFormat } from "../../Utils/helpers";
import "./comment.css";

type Props = {
  commentObj: {
    user: User;
    comment: string;
    date: string;
  };
};

const Comment: React.FC<Props> = ({ commentObj }) => {
  return (
    <div className="commentWrapper">
      <div className="left">
        <div className="userImage">
          <img
            src={commentObj?.user?.profilePicture || "/assets/noAvatar.png"}
            alt={commentObj?.user?.username || "user"}
          />
        </div>
        <p className="commentBy">{commentObj?.user?.username || "User"}</p>
        <p className="userComment">{commentObj?.comment}</p>
      </div>

      <div className="right">
        <div className="commentTime">{timeAgoFormat(commentObj.date)}</div>
      </div>
    </div>
  );
};

export default Comment;