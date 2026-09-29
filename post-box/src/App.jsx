import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");

  const isOverLimit = text.length > 100;
  const isDisabled = text.length === 0 || isOverLimit;

  const handlePost = () => {
    if (!isDisabled) {
      setMessage("Post Published!");
    }
  };

  const handleChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Clear published message when text changes
    setMessage("");
  };

  return (
    <div className="container">
      <h1>Create Post</h1>

      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Write your post..."
      />

      <p>{text.length} / 100</p>

      {isOverLimit && (
        <p className="error">Limit exceeded</p>
      )}

      <button disabled={isDisabled} onClick={handlePost}>
        Post
      </button>

      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default App;