import React from "react";

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
      // <select>
      //   <option value="summer">Summer</option>
      //    <option value="fall">Fall</option>
      //    <option value="winter">Winter</option>
      //    <option value="spring">Spring</option>
      // </select>
        value={props.season}
        onChange={(e) => props.setSeason(e.target.value)}
      />
      <br />
      <label>Type</label>
      <input
        type="text"
         // make dropdown menu POST MVP
        value={props.type}
        onChange={(e) => props.setType(e.target.value)}
      />
      <br />
      <button className="btn" disabled={checkIfDisabled()}>Submit</button>
    </form>
  );
}