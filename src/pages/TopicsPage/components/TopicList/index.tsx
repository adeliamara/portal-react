import React, { useEffect, useState } from "react"
import { Topic, Vote } from "../.."
import { TopicListItem } from "../TopicListItem"
import { StyledTopicList } from "./styles"

interface TopicListProps {
  topics: Topic[]
  votes:  Vote[]
  onVote: (vote: Vote) => void
}


const TopicList = ({  topics, onVote, votes }: TopicListProps) => {  

    return (
      <>
          <StyledTopicList>
        <h3>{topics.length} Topicos cadastrados</h3>
        <ul>
        {topics.map(topic => <TopicListItem key={topic.id} topic={topic} onVote={onVote} votes={votes}/>)}
        </ul>
        </StyledTopicList>

      </>
    )
  }

  //{topics.map(task => <TaskListItem onRemove={onRemove} key={task.id} task={task} />)}

export { TopicList }