import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import ListItems from "./components/ListItems";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function handleDeleteItems(id) {
    setItems((items) =>
      items.filter((item) => {
        return item.id !== id;
      })
    );
  }

  function handleToggleItems(id) {
    setItems((items) => {
      return items.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      );
    });
  }
  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <ListItems
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToggleItems}
      />
    </div>
  );
}

export default App;
