import React from "react";
import Cards from "./Cards";
import { useSelector } from "react-redux";

function CardList() {
  const { shopItems } = useSelector((store) => store.shop);
  return (
    <div className="cardList">
      <div className="columns">
        {shopItems.map((item) => {
          return <Cards key={item.id} {...item} />;
        })}
      </div>
    </div>
   
  );
}

export default CardList;
