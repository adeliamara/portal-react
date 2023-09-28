import React from "react"
import { Topic } from "../.."

interface TopicListItemProps {
  topic: Topic
}

export function TopicListItem({ topic }: TopicListItemProps) {

  return (
    <li>
      <div>
        <p>{topic.description}</p>
      </div>
    </li>)
}