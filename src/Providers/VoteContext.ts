import { Dispatch, createContext } from "react";
import { Vote } from "../pages/TopicsPage";
import { Action } from "../Reducer/TopicReducer";

export const VotesContext = createContext<Vote[] | null>(null);
export const VotesDispatchContext = createContext<Dispatch<Action> | null>(null);
