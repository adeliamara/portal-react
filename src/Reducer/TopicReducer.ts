import { Topic } from "../pages/TopicsPage";

interface TopicState {
  topics: Topic[]
}

export enum ActionType { ADDED, UPDATED, REMOVED, LOADED }

type ActionAdded = { type: ActionType.ADDED, payload: { topic: Topic } }
type ActionUpdated = { type: ActionType.UPDATED, payload: { topic: Topic } }
type ActionRemoved = { type: ActionType.REMOVED, payload: { id: string } }
type ActionLoaded = { type: ActionType.LOADED, payload: { topics: Topic[] } }

export type Action = ActionAdded | ActionUpdated | ActionRemoved | ActionLoaded


function reducer(state: TopicState, action: Action): TopicState {

  switch (action.type) {
    case ActionType.ADDED: {
      const new_topic = action.payload.topic
      return { topics: [new_topic, ...state.topics] }
    }
    case ActionType.UPDATED: {
      const topic_updated = action.payload.topic
      const topics = state.topics.filter(topic =>
        topic.id === topic_updated.id ? topic_updated : topic
      )

      return { topics }
    }
    case ActionType.REMOVED: {
      const removed_id = action.payload.id
      const updatedTopics = state.topics.filter(topic => String(topic.id) !== String(removed_id));
      return { topics: updatedTopics };
    }
    case ActionType.LOADED: {
      return { topics: [...action.payload.topics] }
    }
    default: {
      console.warn('Action Inválida')
      return state
    }

  }

}

export { reducer as TopicReducer };