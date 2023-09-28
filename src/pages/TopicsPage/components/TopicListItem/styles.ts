import styled from 'styled-components';

// Define um componente Styled para exibir um tópico
export const TopicItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
  border-radius: 8px;
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 20px;
    margin-bottom: 12px;
    color: #333;
  }

  p {
    font-size: 16px;
    color: #666;
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 12px;

    span {
      background-color: #f0f0f0;
      color: #333;
      padding: 4px 8px;
      border-radius: 4px;
      margin-right: 8px;
      margin-bottom: 8px;
      font-size: 14px;
    }
  }
`;
