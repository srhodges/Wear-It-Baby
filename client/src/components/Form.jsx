import React from "react";

export default function Form(props) {
  const checkIfDisabled = () => {
    return false;
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <input
        autoFocus
        placeholder="item"
        type="text"
         // make dropdown menu POST MVP
        value={props.item}
        onChange={(e) => props.setItem(e.target.value)}
      />
      <br />
      <input
        placeholder="size"
        type="text"
         // make dropdown menu POST MVP
        value={props.size}
        onChange={(e) => props.setSize(e.target.value)}
      />
      <br />
      <input
        placeholder="season"
        type="text"
        value={props.season}
        onChange={(e) => props.setSeason(e.target.value)}
      />
      <br />
      <input
        placeholder="type"
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