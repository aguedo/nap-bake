function Item({ onIncrement }) {
  return (
    <div>
      Item
      <br></br>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
}

export default Item;
