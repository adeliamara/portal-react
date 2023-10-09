import styled from 'styled-components';

export const TopicItem = styled.div`
  padding: 15px;
  transition: box-shadow 0.3s ease-in-out;
  border-bottom: 1px solid #aaa;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .description {
    font-size: 25px;
    color: #00000;
    font-weight: bold;
  }

  .progress-bar-container {
    height: 15px;
    background: lightgray;
    margin: 10px auto; 
    display: flex;
  }
  
  .progress-bar-like {
    height: 100%;
    background-color: green;
    transition: width 0.5s ease;
  }

  .percentage {
    color: white;
    font-size: 14px;
    margin: 0;
  }
  

  .info-topic {
    font-size: 10px;
  }

  span {
    margin-left: 10px;
  }

 
`;


export const InfoTopic = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #333;
  padding: 0px;


 

  .name {
    margin-right: 8px;
    font-size: 18px;
    font-weight: bold;
  }

  .city {
    color: #777; /* Cor da cidade (menos destaque) */
    margin-right: 8px;
  }

  .hour {
    color: #777; /* Cor da hora (menos destaque) */
  }

  
`;



export const DescriptionStyled = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  color: #333;
  padding: 0px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px; ;
  
  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    margin-right: 10px;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`