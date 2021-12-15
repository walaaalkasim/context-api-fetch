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
        <option value="apple">apple</option>
        <option value="covid">covid</option>
        <option value="london">london</option>
        <option value="sea">sea</option>
      </select>
    </div>
  );
};

export default DropDown;
