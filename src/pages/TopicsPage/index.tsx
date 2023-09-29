import { useEffect, useState } from 'react';
import { TopicList } from './components/TopicList';
import api from '../../services/api';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { TopicForm } from './components/TopicForm';
import { TopicPage } from './styles';


export enum VoteType {
  UP = "UP",
  DOWN = "DOWN",
}

export interface Vote {
  id: number;
  topicId: number;
  voteType: VoteType;
  createdAt: Date;
}

export interface Topic {
  id: number;
  description: string;
  author: Author;
  createdAt: Date;
  tags: Array<string>;
  active: boolean;
}

export interface Author {
  name: string;
  city: string;
}



export function TopcisPage() {

  const [topics, setTopic] = useState<Topic[]>([])
  const [votes, setVotes] = useState<Vote[]>([]);

  useEffect(() => {
    api
      .get("/topics")
      .then((response) => setTopic(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get("/votes")
      .then((response) => setVotes(response.data))
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
  

  
  const addLikeInApi = (vote: Vote) => {

    const response = api.post("/votes", vote)
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }



  const handleAddTopic = (text: string, tags: string, city: string, name: string) => {
    const tagsArray = tags.split(',');

    const newTopic: Topic = {
      id: uuid(),
      createdAt: new Date(),
      description: text,
      author:{ city, name},
      active: true,
      tags: tagsArray
    }

    addTopicInApi(newTopic)
    setTopic([newTopic, ...topics])
  }

  const handleVote = (newVote) => {
    addLikeInApi(newVote)
    setVotes([newVote, ...votes]);
  };

  // const handleRemoveTopic = (topic: Topic) => {
  //   const filtradas = topics.filter(t => t.id !== topic.id)
  //   setTopics(filtradas)
  // }

  return (
    <>
      <TopicPage>
        <TopicForm onAdd={handleAddTopic} />
        <TopicList topics={topics} onVote={handleVote} votes={votes} />
      </TopicPage>
    </>
  )
}
