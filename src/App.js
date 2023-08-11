import React from "react";

import Header from "./components/Header";
import Sort from "./components/Sort";
import Categories from "./components/Categories";
import PizzaBlock from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

import "./scss/app.scss";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    fetch("https://64d36c0a67b2662bf3dc31bb.mockapi.io/api/v1/items")
      .then((res) => res.json())
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoading
              ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
              : items.map((obj) => (
                  <PizzaBlock
                    key={obj.id}
                    title={obj.title}
                    price={obj.price}
                    imgUrl={obj.imageUrl}
                    sizes={obj.sizes}
                    types={obj.types}
                  />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
