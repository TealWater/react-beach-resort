import styled from 'styled-components';
import defaultImg from '../images/room-1.jpeg';

const StyledHero = styled.header`
  min-height: 60vh;
  /* the 'img' is a variable to reference the background 
  property of this styled component.  You can call 'img' 
  'car' if you want, just make sure you reference the 
  same variable in your JSX, whether it is in your pages
  or in your components */
  background: url(${props => props.img ? props.img : defaultImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default StyledHero;