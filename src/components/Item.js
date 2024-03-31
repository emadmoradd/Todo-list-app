function Item({ item, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <span>
        <input
          type="checkbox"
          value={item.checked}
          onChange={() => onToggleItems(item.id)}
        />
      </span>
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <span className="close" onClick={() => onDeleteItems(item.id)}>
        &times;
      </span>
    </li>
  );
}

export default Item;
