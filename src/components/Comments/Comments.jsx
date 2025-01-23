import { useState, useContext } from "react";
import { AuthContext } from "../../auth/AuthProvider";
import "./comments.scss";

export default function Comments({ apodId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { user } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      id: Date.now(),
      author: user ? user.username : "Anonyme",
      date: new Date(),
      text: newComment,
      apodId,
    };
    setComments([...comments, comment]);
    setNewComment("");
  };

  return (
    <div className="comments-section">
      <h3>Commentaires</h3>
      {user ? (
        <form onSubmit={handleSubmit}>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Votre commentaire..."
            required
          />
          <button type="submit">Envoyer</button>
        </form>
      ) : (
        <p>Connectez-vous pour laisser un commentaire</p>
      )}
      <div className="comments-list">
        {comments
          .filter((comment) => comment.apodId === apodId)
          .map((comment) => (
            <div key={comment.id} className="comment">
              <strong>{comment.author}</strong>
              <small>{comment.date.toLocaleDateString()}</small>
              <p>{comment.text}</p>
            </div>
          ))}
      </div>
    </div>
  );
}