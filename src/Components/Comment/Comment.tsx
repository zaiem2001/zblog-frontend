import { User } from "../../Constants/Interfaces";
import { timeAgoFormat } from "../../Utils/helpers";

import {
  StyledCommentedBy,
  StyledCommentTime,
  StyledContainer,
  StyledImgContainer,
  StyledLeftContainer,
  StyledUserComment,
} from "./Comments.styled";

type Props = {
  commentObj: {
    user: User;
    comment: string;
    date: string;
  };
};

const Comment: React.FC<Props> = ({ commentObj }) => {
  return (
    <StyledContainer>
      <StyledLeftContainer>
        <StyledImgContainer>
          <img
            src={commentObj?.user?.profilePicture || "/assets/noAvatar.png"}
            alt={commentObj?.user?.username || "user"}
          />
        </StyledImgContainer>

        <StyledCommentedBy>
          {commentObj?.user?.username || "User"}
        </StyledCommentedBy>
        <StyledUserComment>{commentObj?.comment}</StyledUserComment>
      </StyledLeftContainer>

      <div className="right">
        <StyledCommentTime>{timeAgoFormat(commentObj.date)}</StyledCommentTime>
      </div>
    </StyledContainer>
  );
};

export default Comment;
