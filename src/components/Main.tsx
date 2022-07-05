import styled from 'styled-components';

const Main = styled.div`
  min-height: calc(100vh - 473px);
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 10px 110px;

  @media (max-width: 680px) {
    padding-bottom: 300px;
  }
`;

export default Main;
