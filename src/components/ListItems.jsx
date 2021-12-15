import { useContext } from "react";

import MyContext from "../context/MyContext";
import Item from "./Item";

const ListItems = () => {
  const context = useContext(MyContext);
  const { data, loading, error } = context;

  return (
    <div className="content-container">
      {loading && <p>Loading...</p>}
      {!loading &&
        data.map((item) => (
          <Item
            key={item.id}
            name={item.author}
            img={item.urlToImage}
            content={item.description}
            link={item.url}
          />
        ))}
      {error && error}
    </div>
  );
};

export default ListItems;
