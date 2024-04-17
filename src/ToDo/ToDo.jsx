// import React, { Fragment, useState } from "react";

// const ToDo = () => {
//   let [data, setData] = useState();
//   //
//   let [items, setItems] = useState([]);
//   //
//   let [update, setUpdate] = useState(true);
//   //
//   let handleChange = (e) => {
//     setData(e.target.value);
//   };
//   //
//   let inputRef = useRef();
// // 
//   let handleSubmit = (e) => {
//     e.preventDefault();
//     if (update == false) {
//       setUpdate(true);
//     }
//     if (data != "") {
//       setItems([...items, data]);
//       setData("");
//     }
//   };
//   //
//   let handleClearAll = () => {
//     setItems([]);
//   };
//   //
//   let handleClear = () => {
//     setData("");
//   };
//   //
//   let handleDelete = (id) => {
//     let updated = items.filter((val, ind) => {
//       return ind !== id;
//     });
//     setItems(updated);
//   };
//   //
//   let handleEdit = (id) => {
//     setUpdate(false);
//     // let value = items.filter((val, ind) => {
//     //   return ind == id;
//     // });
//     // setData(value);x
//     setData(items[id]);
//     handleDelete(id);
// inputRef.current.focus();
//   };
//   //
//   return (
//     <div id="main">
//       <h1>TO-DO-APP</h1>
//       <form onSubmit={handleSubmit} onReset={handleClear}>
//         <input type="text" value={data} onChange={handleChange} ref={inputRef}/>
//         <button type="submit">{update ? "Add Task" : "Update"}</button>
//         <button type="reset">Clear</button>
//       </form>
//       <br />
//       <br />
//       <br />
//       {items.map((val, index) => {
//         return (
//           <Fragment key={index}>
//             <div class="subdiv">
//               <div id="sub1">
//                 {" "}
//                 <span>{val}</span>
//               </div>
//               <div id="sub2">
//                 <button onClick={() => handleEdit(index)}>EDIT</button>
//                 <button onClick={() => handleDelete(index)}>DELETE</button>
//               </div>
//             </div>
//           </Fragment>
//         );
//       })}
//       <button onClick={handleClearAll}>CLEAR ALL</button>
//     </div>
//   );
// };

// export default ToDo;

import React, { Fragment, useRef, useState } from "react";

const ToDo = () => {
  let [data, setData] = useState();
  //
  let [items, setItems] = useState([]);
  //
  let [editItem, setEditItem] = useState(null);
  //
  let handleChange = (e) => {
    setData(e.target.value);
  };
  //
  let inputRef = useRef();
  //
  let handleSubmit = (e) => {
    e.preventDefault();
    if (data != "") {
      if (editItem != null) {
        items[editItem] = data;
        setEditItem(null);
      } else {
        setItems([...items, data]);
      }
      setData("");
    }
  };
  //
  let handleClearAll = () => {
    setItems([]);
  };
  //
  let handleClear = () => {
    setData("");
  };
  //
  let handleDelete = (id) => {
    let updated = items.filter((val, ind) => {
      return ind !== id;
    });
    setItems(updated);
  };
  //
  let handleEdit = (id) => {
    setData(items[id]);
    setEditItem(id);
    inputRef.current.focus();
  };
  //
  return (
    <div id="main">
      <h1>TO-DO-APP</h1>
      <form onSubmit={handleSubmit} onReset={handleClear}>
        <input
          type="text"
          value={data}
          onChange={handleChange}
          ref={inputRef}
        />
        <button type="submit">
          {editItem == null ? "Add Task" : "Update"}
        </button>
        <button type="reset">Clear</button>
      </form>
      <br />
      <br />
      <br />
      {items.map((val, index) => {
        return (
          <Fragment key={index}>
            <div class="subdiv">
              <div id="sub1">
                {" "}
                <span>{val}</span>
              </div>
              <div id="sub2">
                <button onClick={() => handleEdit(index)}>EDIT</button>
                <button onClick={() => handleDelete(index)}>DELETE</button>
              </div>
            </div>
          </Fragment>
        );
      })}
      <button id="ClearAll" onClick={handleClearAll}>CLEAR ALL</button>
    </div>
  );
};

export default ToDo;

// ! controlled Form,conditional rendering,states
