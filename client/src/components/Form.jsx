export default function Form(props) {
  const checkIfDisabled = () => {
    return false;
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <label>Item</label>
      <input
        type="text"
         // make dropdown menu POST MVP
        value={props.item}
        onChange={(e) => props.setItem(e.target.value)}
      />
      <br />
      <label>Size</label>
      <input
        type="text"
         // make dropdown menu POST MVP
        value={props.size}
        onChange={(e) => props.setSize(e.target.value)}
      />
      <br />
      <label>Season</label>
      <input
        type="text"
        // make dropdown menu POST MVP
        value={props.season}
        onChange={(e) => props.setSeason(e.target.value)}
      />
      <br />
      <label>Style</label>
      <input
        type="text"
         // make dropdown menu POST MVP
        value={props.style}
        onChange={(e) => props.setStyle(e.target.value)}
      />
      <br />
      <button disabled={checkIfDisabled()}>{props.type} item</button>
    </form>
  );
}