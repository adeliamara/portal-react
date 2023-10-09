import React, { useContext, useEffect, useState } from "react"
import { Topic, Vote } from "../.."
import { TopicListItem } from "../TopicListItem"
import { StyledTopicList } from "./styles"
import { TopicsContext } from "../../../../Providers/TopicContext"



const TopicList = () => { 
  const topics = useContext(TopicsContext) ;

    return (
      <>
          <StyledTopicList>
          <h3>{topics && topics.length} Tópicos cadastrados</h3>
        <ul>
          {topics &&
            topics.map((topic) => (
              <TopicListItem key={topic.id} topic={topic}/>
            ))}
        </ul>
        </StyledTopicList>

      </>
    )
  }

  //{topics.map(task => <TaskListItem onRemove={onRemove} key={task.id} task={task} />)}

export { TopicList }