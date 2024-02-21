import { ProductComment } from "../../models/ProductComment";

export const CommentList: React.FC<{ comments: ProductComment[] }> = ({
  comments,
}) => {
  return (
    <ul>
      {comments.map((comment: ProductComment) => (
        <li key={comment.id}>
          <div>
            <span>{comment.date.toISOString()}</span>
            <p>{comment.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};
