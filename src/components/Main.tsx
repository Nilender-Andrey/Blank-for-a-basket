import styled from 'styled-components/macro';

const Main = styled.div`
  min-height: calc(100vh - 120px);
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 10px 170px;

  @media (max-width: 840px) {
    padding-bottom: 280px;
  }
`;

export default Main;
