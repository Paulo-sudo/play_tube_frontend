import styled from 'styled-components'

const Input = styled.input`
border-bottom-left-radius: 10px;
border-top-left-radius: 10px;
width: 69vw;
height: 6vh;
border:none;
border-width: 2px;
background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
border-style: inset;
border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
border-image: initial;
margin-top: 10px;
margin-bottom: 20px;
color: #ae2997;
font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
font-size: 30px;
font-weight: bold;
padding-left:20px;
@media (max-width: 580px) {
    font-size: 20px;
  }
@media (max-width: 350px) {
font-size: 14px;
}
`

    ;

export default Input;