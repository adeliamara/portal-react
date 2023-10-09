import React, { useContext, useEffect, useState } from "react";
import { Topic, Vote, VoteType } from "../..";
import { ButtonContainer, DescriptionStyled, InfoTopic, TopicItem } from "./styles";
import { v4 as uuid } from 'uuid';
import TagDetails from "../TagDetails";
import { VotesContext } from "../../../../Providers/VoteContext";
import { OnVoteContext } from "../../../../Providers/OnVoteContext";


interface TopicListItemProps {
  topic: Topic;
}


export function TopicListItem({ topic }: TopicListItemProps) {
  let votes: any = useContext(VotesContext) ;
  const onVote = useContext(OnVoteContext);

  votes = votes == null ? []: votes

  const adjustedVotes = votes.map((vote) => ({
    topicId: vote.topic_id, // Mapeia 'topic_id' para 'topicId'
    voteType: vote.vote_type, 
    id: vote.id, 
    
  }));

  
  const totalVotes = adjustedVotes.filter(vote => vote.topicId === topic.id).length;
  const likeVotes =  adjustedVotes.filter(vote => vote.topicId === topic.id && vote.voteType === VoteType.UP).length;
 
  
 
  const likePercentage = totalVotes === 0 ? 0 : (likeVotes / totalVotes) * 100;


  const handleVote = (type: VoteType.UP | VoteType.DOWN) => {
    const vote: any = {
      topicId: topic.id,
      voteType: type,
      createdAt: new Date(),
    };

    onVote(vote);
  };


  return (
    <li>
      <div>
        <TopicItem>
          <DescriptionStyled>
            <p className="description">{topic.description}</p>

            {topic.tags.map((tag, index) => (
              <TagDetails key={index} tag={tag.name} />
            ))}


          </DescriptionStyled>
          <InfoTopic>
            <p className="name">{topic.author.name}</p>
            <p className="city">{topic.author.city}</p>
            <p className="hour">{topic.createdAt}</p>
          </InfoTopic>
          <ButtonContainer>
            <button onClick={() => handleVote(VoteType.UP)}>Like</button>
            <button onClick={() => handleVote(VoteType.DOWN)}>Dislike</button>
          </ButtonContainer>
          <div className="progress-bar-container">
            <div className="progress-bar-like"
              style={{
                width: `${likePercentage}%`,
              }}>
              <p className="percentage">{likePercentage.toFixed(2)}%</p>
            </div>
          </div>
        </TopicItem>
      </div>
    </li>
  );
}
