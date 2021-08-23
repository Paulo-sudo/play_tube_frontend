import styled from 'styled-components'

const Button = styled.button`
width: 11vw;
margin-top: 10px;
color: white;
font-size: 30px;
font-weight: bold;
display: flex;
flex-direction: column;
align-items: center;
background-image: linear-gradient( #ab0034 3%, black);
justify-content: space-between;
border: none;
border-bottom-right-radius: 10px;
border-top-right-radius: 10px;
height:6.8vh;
margin-bottom: 20px;
background-color: -internal-light-dark(rgb(255, 255, 255), rgb(59, 59, 59));
border-width: 2px;
border-style: inset;
border-color: -internal-light-dark(rgb(118, 118, 118), rgb(133, 133, 133));
border-image: initial;
&:hover{
   
    background-image: linear-gradient( indigo 3%, black);
    
}

`

;

export default Button;