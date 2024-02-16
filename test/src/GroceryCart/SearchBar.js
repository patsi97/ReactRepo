import {
  produce, pantryItems
} from "./storeItems";
import {useState} from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  console.log(produce.filter(item=>item.toLowerCase().includes("")));

  return (
      <div className="div-search-bar">
        <input type="text" placeholder="Search..." className="search"
               onChange={e => setQuery(e.target.value)}/>
        <ul className="list">
          {produce.filter(item => item.toLowerCase().includes(query)).map((item) => (
              <li key={item.id} className="listItem">{item}</li>
          ))}

        </ul>
      </div>
  )
}