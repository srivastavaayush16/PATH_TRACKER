import "./header.css";
import React from 'react';

import { Bfs } from "../algos/Bfs";
import { getNodesInShortestPathOrder } from "../algos/getNodeInShortestPath";
import Button from "./Button";

const Header = (props) => {
  const onClickHandler = (event) => {
    if (
      props.start[0] !== -1 &&
      props.start[1] !== -1 &&
      props.end[0] !== -1 &&
      props.end[1] !== -1
    ) {
      
       if (event.target.outerText === "BFS") {
        console.log(event.target.outerText);
        const visitedNodesInOrder = Bfs(
          [...props.grid],
          props.grid[props.start[0]][props.start[1]],
          props.grid[props.end[0]][props.end[1]]
        );
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(
          props.grid[props.end[0]][props.end[1]]
        );
        //console.log(visitedNodesInOrder, nodesInShortestPathOrder);
        props.onAnimateShortestPath(
          visitedNodesInOrder,
          nodesInShortestPathOrder
        );
      }
    }
  };
  return (
    <div className="headerdiv">
     
      

      <Button onClick={props.onReset}>Reset</Button>
      <Button onClick={onClickHandler}>BFS</Button>
    </div>
  );
};
export default Header;
