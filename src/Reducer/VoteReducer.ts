import { Vote } from "../pages/TopicsPage"

interface VoteState {
  votes: Vote[]
}

export enum ActionType { ADDED, UPDATED, REMOVED, LOADED }

type ActionAdded = { type: ActionType.ADDED, payload: { vote: Vote } }
type ActionUpdated = { type: ActionType.UPDATED, payload: { vote: Vote } }
type ActionRemoved = { type: ActionType.REMOVED, payload: { id: string } }
type ActionLoaded = { type: ActionType.LOADED, payload: { votes: Vote[] } }

type Action = ActionAdded | ActionUpdated | ActionRemoved | ActionLoaded


function reducer(state: VoteState, action: Action): VoteState {

  switch (action.type) {
    case ActionType.ADDED: {
      const new_vote = action.payload.vote
      return { votes: [new_vote, ...state.votes] }
    }
    case ActionType.UPDATED: {
      const vote_updated = action.payload.vote
      const votes = state.votes.filter(vote =>
        vote.id === vote_updated.id ? vote_updated : vote
      )

      return { votes }
    }
    case ActionType.REMOVED: {
      const removed_id = action.payload.id
      return { votes: state.votes.filter(t => Number(t.id)!== Number(removed_id)) }
    }
    case ActionType.LOADED: {
      return { votes: [...action.payload.votes] }
    }
    default: {
      console.warn('Action Inválida')
      return state
    }

  }

}

export { reducer as VoteReducer };