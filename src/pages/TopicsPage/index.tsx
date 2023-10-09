import { createContext, useEffect, useReducer, useState } from 'react';
import { TopicList } from './components/TopicList';
import api from '../../services/api';
import React from 'react';
import { v4 as uuid } from 'uuid';
import { TopicForm } from './components/TopicForm';
import { TopicPage } from './styles';
import { ActionType, TopicReducer } from '../../Reducer/TopicReducer';
import { VoteReducer } from '../../Reducer/VoteReducer';


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

  const [{ topics }, dispatchTopic] = useReducer(TopicReducer, { topics: [] })
  const [{ votes }, dispatchVotes] = useReducer(VoteReducer, { votes: [] })


  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchTopics(); // Use 'await' para esperar a resolução da promessa
        dispatchTopic({ type: ActionType.LOADED, payload: { topics: data } })
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData(); 
  
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.fetchVotes(); // Use 'await' para esperar a resolução da promessa
        dispatchVotes({ type: ActionType.LOADED, payload: { votes: data } })
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData(); 
  }, []);

  const addTopicInApi = async (topic: Topic) => {
    try {
      await api.addTopic(topic)
    } catch (err) {
      alert(err);
      handleRemoveTopic(topic);
    }
  };
  
    
  const addLikeInApi = async (vote: Vote) => {
    try {
      await api.addVote(vote)
    } catch (err) {
      alert(err);
      handleRemoveVote(vote);
    }
  }

  const handleRemoveTopic = (topicToRemove: Topic) =>{
    dispatchTopic({ type: ActionType.REMOVED, payload: { id: String(topicToRemove.id)} })
  }

  
  const handleRemoveVote = (voteToRemove: Vote) =>{
    dispatchVotes({ type: ActionType.REMOVED, payload: { id: String(voteToRemove.id)} })
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

    dispatchTopic({ type: ActionType.ADDED, payload: { topic: newTopic } })
    addTopicInApi(newTopic)
  }

  const handleVote = (newVote) => {
    dispatchVotes({ type: ActionType.ADDED, payload: { vote: newVote } })
    addLikeInApi(newVote)
  };




  return (
    <>
      <TopicPage>
        <TopicForm onAdd={handleAddTopic} />
        <TopicList topics={topics} onVote={handleVote} votes={votes} />
      </TopicPage>
    </>
  )
}

