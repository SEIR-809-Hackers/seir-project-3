import styled from 'styled-components'
import images from './images/35631.jpg'

const MainHeader = styled.header`

  display: flex;
  justify-content: space-around;
  
  background-image: url(${images});
 
  background-repeat: no-repeat;
  background-size: 20%;
  background-color: white;
  position: fixed;
  height: 185px;
  width: 100%;
  
`



export default MainHeader;