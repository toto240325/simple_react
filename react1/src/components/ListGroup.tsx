import { useState } from "react";
// import { MouseEvent } from "react";

// cities = [];

// function ListGroup0() {
//   return (
//     <>
//       <h1>List Group</h1>
//       <ul className="list-group">
//         <li className="list-group-item">An item</li>
//         <li className="list-group-item">A second item</li>
//         <li className="list-group-item">A third item</li>
//         <li className="list-group-item">A fourth item</li>
//         <li className="list-group-item">And a fifth one</li>
//       </ul>
//     </>
//   );
// }

// function ListGroup1() {
//   if (cities.length === 0) {
//     return (
//       <>
//         <h1>List</h1>
//         <p>No cities</p>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <h1>List Group2</h1>
//         <ul className="list-group">
//           {cities.map((city) => (
//             <li key={city}>{city}</li>
//           ))}
//         </ul>
//       </>
//     );
//   }
// }

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // const handleClick = (e: MouseEvent) => {
  //   console.log(e.target);
  //   //  city, index);
  //   console.log("event e :", e);
  // };

  let [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No {heading}</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              console.log("click");
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
