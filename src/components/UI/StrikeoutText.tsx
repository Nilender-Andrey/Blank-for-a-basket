import styled from 'styled-components/macro';
import Text from './Text';

const StrikeoutText = styled(Text)`
  position: relative;
  display: inline-block;
  min-width: 100px;

  &::after {
    display: block;
    content: '';

    position: absolute;

    width: 100%;
    height: 3px;

    background-color: red;
    transform-origin: 0 0;
    transform: rotate(-11deg);
  }
`;

export default StrikeoutText;
