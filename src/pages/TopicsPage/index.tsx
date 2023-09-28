import { useEffect, useState } from 'react';
import { TopicList } from './components/TopicList';
import api from '../../services/api';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { TopicForm } from './components/TopicForm';


export interface Topic {
    id: number;
    description: string;
    //author: Author;
    created_at: Date;
    tags: Array<String>;
    active: boolean;
  }

export interface Author {
    id: number;
    name:  string;
    city: string;
    country: string;
    created_at: Date;
  }


  
export function TopcisPage() {

  const [topics, setTopic] = useState<Topic[]>([])

  
  useEffect(() => {
    api
      .get("/topics")
      .then((response) => setTopic(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);
     const addTopicInApi = (topic: Topic) => {

    const response = api.post("/topics", topic)
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });
}
  

  const handleAddTopic = (text: string) => {
    const newTopic: Topic = {
      id: uuid(),
      created_at: new Date(),
      description: text,
      active: true,
      tags: ["a"]
    }

      addTopicInApi(newTopic)
      setTopic([newTopic, ...topics])
  }

  // const handleRemoveTopic = (topic: Topic) => {
  //   const filtradas = topics.filter(t => t.id !== topic.id)
  //   setTopics(filtradas)
  // }

  return (
    <>
      <TopicForm onAdd={handleAddTopic} /> 
      <TopicList topics={topics} />
    </>
  )
}
