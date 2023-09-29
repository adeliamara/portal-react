import styled from 'styled-components';

export const TopicItem = styled.div`
  padding: 16px;
  transition: box-shadow 0.3s ease-in-out;
  border-bottom: 1px solid #aaa;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  .description {
    font-size: 16px;
    color: #00000;
  }

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

  .progress-bar-container {
    width: 80%;
    height: 10px;
    background: lightgray;
    margin: 10px auto; /* Centraliza horizontalmente e adiciona margem superior e inferior de 10px */
    display: flex;
  }
  
  .progress-bar-like {
    height: 100%;
    background-color: green;
    transition: width 0.5s ease;
  }

  .info-topic {
    font-size: 10px;
  }


  /* Estilos para as estatísticas de likes e dislikes */
  span {
    margin-left: 10px;
  }
`;
