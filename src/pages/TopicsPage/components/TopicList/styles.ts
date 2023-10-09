import styled from "styled-components";

export const StyledTopicList = styled.div`

  h3 {
    font-size: 18px;
    margin-bottom: 12px;
    color: black;
    text-align: center;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;

  }


  @media (max-width: 768px) {
    li {
      min-width: 90%;
      margin: 0 auto;
    }
 
  }

  @media (min-width: 769px) {
    li {
      min-width: 50%;
      margin: 0 auto;
      flex-wrap: wrap;
    }
  }
 
`;