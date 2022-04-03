import { useContext } from "react";
import MyContext from "../context/MyContext";

const SearchInput = () => {
  const context = useContext(MyContext);
  const { input, handleChange, handleSubmit } = context;

  return (
    <div className="searchBtn">
      <form>
        <input
          type="text"
          maxLength="200"
          value={input}
          onChange={(e) => handleChange(e)}
        />

        <button onClick={(e) => handleSubmit(e)}>search</button>
      </form>
    </div>
  );
};

export default SearchInput;
