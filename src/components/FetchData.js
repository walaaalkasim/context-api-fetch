import { useContext, useEffect } from "react";

import MyContext from "../context/MyContext";

const FetchData = () => {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const context = useContext(MyContext);
  const { dispatchData, setLoading, setError, search } = context;

  const URL = `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`;

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => dispatchData({ type: "ADD_DATA", payload: data }))
      .then(() => setLoading(false))
      .catch((err) => setError(err));
  }, [dispatchData, setLoading, setError, URL]);

  return null;
};

export default FetchData;
