// import React from "react";

// export default function ContactForm(props) {
//   const checkIfDisabled = () => {
//     return false;
//   };

//   return (
//     <form onSubmit={props.handleSubmit}>
//       <label>Name</label>
//       <input
//         type="text"
//          // make dropdown menu POST MVP
//         value={props.name}
//         onChange={(e) => props.setName(e.target.value)}
//       />
//       <br />
//       <label>Email</label>
//       <input
//         type="text"
//          // make dropdown menu POST MVP
//         value={props.email}
//         onChange={(e) => props.setEmail(e.target.value)}
//       />
//       <br />
//       <label>Message</label>
//       <input
//         type="text"
//         value={props.message}
//         onChange={(e) => props.setMessage(e.target.value)}
//       />
//       <br/>
//       <button className="btn" disabled={checkIfDisabled()}>Contact Us!</button>
//     </form>
//   );
// }