import { useState, useReducer } from "react";

import MyContext from "./MyContext";
import { dataReducer } from "../reducers/dataReducer";
import { searchReducer } from "../reducers/searchReducer";

const MyProvider = ({ children }) => {
  const [data, dispatchData] = useReducer(dataReducer, []);
  const [search, dispatchSearch] = useReducer(searchReducer, "apple");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [input, setInput] = useState("");
  const [headerLogo] = useState("This is news API");
  const [footerName] = useState("Walaa Alkasim");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatchSearch({ type: "SEARCH", payload: input });
  };

  return (
    <MyContext.Provider
      value={{
        data,
        dispatchData,
        loading,
        setLoading,
        error,
        setError,
        search,
        dispatchSearch,
        input,
        setInput,
        handleChange,
        handleSubmit,
        headerLogo,
        footerName,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
