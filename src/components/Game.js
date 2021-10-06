import React from "react";

import styled from "styled-components";
import { motion } from "framer-motion";

import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

const Game = ({ name, released, image, id }) => {
  
  const dispatch = useDispatch();
  const loadDetailHandler = (id) => {
    dispatch(loadDetail(id));
  }
  
  return (
    <StyledGame onClick={()=>loadDetailHandler({id})}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    cursor: pointer;
    height: 50vh;
    object-fit: cover;
    width: 100%;
  }
`;
export default Game;
