import { useState } from "react";
import "./../App.css";

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    const newItem = { description, checked: false, id: Date.now() };
    onAddItems(newItem);
    setDescription("");
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
    </form>
  );
}

export default Form;
