import { Dispatch, createContext } from "react";
import { Topic } from "../pages/TopicsPage";
import { Action } from "../Reducer/TopicReducer";

export const TopicsContext = createContext<Topic[] | null>(null);
export const TopicsDispatchContext = createContext<Dispatch<Action> | null>(null);
