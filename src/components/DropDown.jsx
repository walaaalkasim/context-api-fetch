import { useContext } from "react";
import MyContext from "../context/MyContext";

const DropDown = () => {
  const context = useContext(MyContext);
  const { dispatchSearch } = context;
  return (
    <div>
      <select
        onChange={(e) =>
          dispatchSearch({ type: "OPTION", payload: e.target.value })
        }
        id="selectSubject"
      >
        <option value="">pick subject</option>
        <option value="music">music</option>
        <option value="covid">covid</option>
        <option value="beauty">beauty</option>
        <option value="art">art</option>
      </select>
    </div>
  );
};

export default DropDown;
