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
  description: string;
  authorId: number;
  createdAt: Date;
  tags: Array<String>;
  active: boolean;
}

export interface Author {
  id: number;
  name: string;
  city: string;
  country: string;
  created_at: Date;
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



  const handleAddTopic = (text: string) => {
    const newTopic: Topic = {
      id: uuid(),
      createdAt: new Date(),
      description: text,
      active: true,
      tags: ["a"]
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
