import React, { createContext, useContext } from "react";

// Criar o contexto
export const OnVoteContext = createContext((newVote) => {});


// Hook personalizado para acessar a função handleVote
export const useOnVote = () => {
  return useContext(OnVoteContext);
};
