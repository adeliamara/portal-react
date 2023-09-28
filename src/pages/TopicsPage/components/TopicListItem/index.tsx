import React from "react"
import { Topic } from "../.."
import { TopicItem } from "./styles"

interface TopicListItemProps {
  topic: Topic
}

export function TopicListItem({ topic }: TopicListItemProps) {

  return (
    <li>
      <div>
        <TopicItem>
        {topic.description} 
        </TopicItem> 
      </div>
    </li>)
}