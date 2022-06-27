import React from "react";
import FlexItem from '../flexItem';

const List = () => {
  const itemsList = ['#3da70d', '#fe4c4c', '#FBBF24'];

  return (
      <>
          {itemsList.map((color, idx)=> {
              return <FlexItem color={color} key={color}>{idx + 1}</FlexItem>;
          })}
      </>
  );
};

export default List;
