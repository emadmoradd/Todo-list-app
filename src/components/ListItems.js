import Item from "./Item";

function ListItems({ items, onDeleteItems, onToggleItems }) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          item={item}
          key={item.id}
          onDeleteItems={onDeleteItems}
          onToggleItems={onToggleItems}
        />
      ))}
    </ul>
  );
}

export default ListItems;
