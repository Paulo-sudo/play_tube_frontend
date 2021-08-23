import styled from 'styled-components'

export const Card = styled.div`

width: "100%";
position: relative;

display: flex;
flex-direction: row;
align-items: left;

margin-top: 10px;
margin-bottom: 20px;
@media (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
  }
 `

export default Card;