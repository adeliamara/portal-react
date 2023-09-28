import React, { useEffect, useState } from "react"
import { Topic } from "../.."
import { TopicListItem } from "../TopicListItem"
import { StyledTopicList } from "./styles"

interface TopicListProps {
  topics: Topic[]
}


const TopicList = ({ topics }: TopicListProps) => {  


    return (
      <>
          <StyledTopicList>
        <h3>{topics.length} Topicos cadastrados</h3>
        <ul>
        {topics.map(topic => <TopicListItem key={topic.id} topic={topic} />)}
        </ul>
        </StyledTopicList>

      </>
    )
  }

  //{topics.map(task => <TaskListItem onRemove={onRemove} key={task.id} task={task} />)}

export { TopicList }