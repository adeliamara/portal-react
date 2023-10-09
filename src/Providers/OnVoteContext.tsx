import React, { createContext, useContext } from "react";
import { Vote } from "../pages/TopicsPage";

// Criar o contexto
export const OnVoteContext = createContext((newVote: Vote) => {});


// Hook personalizado para acessar a função handleVote
export const useOnVote = () => {
  return useContext(OnVoteContext);
};
