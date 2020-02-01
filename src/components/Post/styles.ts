import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;

  @media (max-width: 600px) {
    width: 450px;
  }

  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

export const PostContent = styled.ul`
  display: flex;
  flex-direction: row;
  width: 600px;

  @media (max-width: 600px) {
    width: 450px;
  }

  background: ${props => props.theme.colors.postContent};
  border-radius: 4px;
  /*box-shadow: 0em 0.2em 3em rgba(0,0,0,0.1); */
  padding: 3em;
  
  margin-top: 2em;

  div {
    img {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      margin-right: 1em;
    }
  }

  h1 {
    font-size: 22px;
    margin-bottom: 0.5em;
  }

  p {
    font-size: 14px;
    line-height: 25px;
  }
`;

