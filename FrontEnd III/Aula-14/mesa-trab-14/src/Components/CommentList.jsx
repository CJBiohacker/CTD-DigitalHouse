import "./CommentList.css";

const CommentList = ({ comments }) => {
    return (
      <div>
        <h2>Comentários:</h2>
        <ul className="container-flex">
          {comments.map(comment => (
            <li key={comment.id}>
              <strong>{comment.name}</strong> - {comment.body}
            </li>
          ))}
        </ul>
      </div>
    );
};

export default CommentList