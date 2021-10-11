
import styled from 'styled-components'

const MainPark = styled.main`
 width: var(--size);
  height: var(--size);
  display: inline-block;
  grid-template-columns: repeat(2, 50%);
  grid-template-rows: repeat(2, 50%);
  justify-items: center;
  align-items: center;
  filter: drop-shadow(0px 0px 7px rgba(1, 1, 1, .7));
  border: 1px solid black;
  /* padding:100px 100px 100px 100px; */
  /* margin: 100px 100px 100px 100px; */
`;



export default MainPark;