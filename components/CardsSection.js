import { useEffect, useState } from "react";
import Cards from "./Cards";

const CardsSection = (props) => {
  const cards = props.data.data;

  return (
    <div className="m-auto container mx-auto text-center py-4 flex flex-col justify-center align-center gap-2">
      <span>Resultado:</span>
      <div className="flex flex-col justify-center align-center m-auto sm:flex-row sm:flex-wrap">
        {cards.map((item, index) => (
          <Cards key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default CardsSection;
