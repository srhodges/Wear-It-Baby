import React from "react";

export default function Form(props) {
  const checkIfDisabled = () => {
    return false;
  };

  return (
    <form onSubmit={props.handleSubmit}>
      <select onChange={(e) => props.setItem(e.target.value)}>
      <option>
          Outfit
        </option>
        <option>
          Shirt 
        </option>
        <option>
          Pants
        </option>
        <option>
          Sleeper
        </option>
        <option>
          Dress/Romper
        </option>
        <option>
          Suit 
        </option>
        <option>
          Jacket/Coat
        </option>
        <option>
          Snowsuits/Travel Attire
        </option>

      </select>
      <select
        onChange={(e) => props.setSize(e.target.value)}
      >
        <option>
          NB
        </option>
        <option>
          0-3 Months 
        </option>
        <option>
          3-6 Months
        </option>
        <option>
          6-12 Months
        </option>
        <option>
          12-18 Months
        </option>
        <option>
          18-24 Months
        </option>
        <option>
          2T
        </option>
        <option>
          3T
        </option>
        <option>
          4T
        </option>
        <option>
          5T 
        </option>
      </select>
      <br />
      <select
        onChange={(e) => props.setSeason(e.target.value)}
      >
        <option>
          Winter
        </option>
        <option>
          Spring 
        </option>
        <option>
          Summer
        </option>
        <option>
          Fall
        </option>
      </select>
      <br />
      <select
        onChange={(e) => props.setType(e.target.value)}
      >
        <option>
          Formal
        </option>
        <option>
          Travel
        </option>
        <option>
          Essential
        </option>
        <option>
          Outfit
        </option>
      </select>
      
      <br />

      <input
        placeholder="URL"
        type="text"
        value={props.URL}
        onChange={(e) => props.setURL(e.target.value)}
      />
      <br />
      <button className="btn" disabled={checkIfDisabled()}>Submit</button>
    </form>
  );
}