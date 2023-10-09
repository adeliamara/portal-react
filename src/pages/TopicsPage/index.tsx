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
    const fetchData = async () => {
      try {
        const topics = await api.fetchTopics(); // Use 'await' para esperar a resolução da promessa
        setTopic(topics);
      } catch (err) {
        console.log(err);
      }
    };
  
    fetchData(); 
  
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const votes = await api.fetchVotes(); // Use 'await' para esperar a resolução da promessa
        setVotes(votes);
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
    const updatedTopics = topics.filter((topic) => topic.id !== topicToRemove.id);

    setTopic(updatedTopics);
  }

  
  const handleRemoveVote = (voteToRemove: Vote) =>{
    const updatedVotes = votes.filter((vote) => vote.id !== voteToRemove.id);

    setVotes(updatedVotes);
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

    setTopic([newTopic, ...topics])
    addTopicInApi(newTopic)
  }

  const handleVote = (newVote) => {
    addLikeInApi(newVote)
    setVotes([newVote, ...votes]);
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
