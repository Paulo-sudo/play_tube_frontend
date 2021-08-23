import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import {DivImg1, DivImg2, DivImg3} from "./components/DivImg";
import Form from "./components/Form";
import Input from "./components/Input";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import puppeteer from "./services/puppeteer";
import img from "./assets/img.svg";
import Div from "./components/Div";
import Box  from "./components/Box";
import { normalizeAppearance, values } from "pdf-lib";
import Card from "./components/Card";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BoxIcons from "./components/BoxIcons";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


function App() {

  const [buscar, setBuscar] = React.useState(1);
  const [ musicUrl,  setMusicUrl ] = React.useState("");
  const [history, setHistory] = React.useState([]);
  const [music, setMusic] = React.useState("");
  
  useEffect(() => {
    if(sessionStorage.getItem("@botData")){
      let array = [];
      array = JSON.parse(sessionStorage.getItem("@botData"))
      array = array.reverse();
      setHistory(array)
    }
    
    
  },[]);
   
  const handleChangeMusic = (event) => {
    setMusic(event.target.value);
  };
  const handleKeyDown =  (e) => {
    if (e.key === 'Enter') {
      loadDoc()

    }
  }
  
  const loadDoc = async () => {
    if(music.length<1){
      return
    }else{
      
      setBuscar(2)
      const name = {music:music}
      setMusic("");
      const live = await puppeteer(name);
      if(sessionStorage.getItem("@botData")){
        let array = [];
        array = JSON.parse(sessionStorage.getItem("@botData"))
        array = array.reverse();
        setHistory(array)
      }
      setBuscar(3)
      setMusicUrl(live.url)
      console.log( "mano",live)
    }
  }

  return(
    
     
    <Wrapper>
        <div>
          <a href= "https://youtube.com" target="_blank">
            <img style = {{padding:10, width: 120, height: 80, borderRadius: 30}} 
            src="https://yt3.ggpht.com/ytc/AAUvwngR3ZPbDMQjeGv4VCMagBrRgL0qpQXJhe9jOxLZuA=s900-c-k-c0x00ffffff-no-rj" alt= "logo botTube"/>
          </a>
        </div>
      <Title  >
        <h1>PlayTube</h1>
      </Title>
      <BoxIcons>
        <a href= "https://www.linkedin.com/in/paulohpaula/" target="_blank">
            <LinkedInIcon  color='primary' style={{fontSize:50, padding :15}}></LinkedInIcon>  
        </a>
        <a href="https://github.com/Paulo-sudo" target="_blank">
            <GitHubIcon  color='primary' style={{fontSize:50, padding :15}}></GitHubIcon>  
        </a>
        <a href="https://api.whatsapp.com/send?phone=5511992739896" target="_blank">
        <WhatsAppIcon  color='primary' style={{fontSize:50, padding :15}}></WhatsAppIcon>  
        </a>
      </BoxIcons>


      <Form>
       <>{ buscar == 1 ? <DivImg1/> : buscar == 2 ? <DivImg2/> : 
        <DivImg3>
          <iframe  id="ytplayer" type="text/html" style={{height:440}} width="90%" src={musicUrl}frameborder="0"/>
        </DivImg3>}        
            
        <div style={{display:"flex", flexDirection:"row"}}>
          <Input
          onChange={handleChangeMusic}
          onKeyDown={handleKeyDown}
          value={music}
          placeholder= "Digite o nome da música"></Input>
          <Button 
            type="button" 
            onClick={loadDoc}>
              <img style = {{width: "100%", padding: 5, height: "80%", borderRadius: 100}} src={img} />
          </Button>
        </div>
        </>

      {history.length > 0 &&(
        <Div>
          <div style={{ marginLeft:"3.5%"}}>
            <a href="https://youtube.com" target="_blank">

            <img style={{width:200, height:80}} src="https://www.magicpirotecnia.com.br/_media/img/medium/youtube-03.png"></img>
            </a>
          </div>
          <Card>

          {history.map((c, index) => (<>
            <Box style={{backgroundImage:`url(${c.imgUrl})`, backgroundRepeat:"no-repeat",backgroundPosition: "top center" ,backgroundPositionY:10, backgroundSize:"85%" }}>
              <a  href= {c.url} target="_blank">

               <img style={{marginTop:60, width: "40%", height: "40%"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8BAMAAAADCSC/AAAAJFBMVEVMaXEAAAAAAAAAAAAAAADb29szMzP///+6urrz8/OWlpZnZ2fzXe86AAAADHRSTlMAKlGCmemm/9f3yLYMKNyhAAAA00lEQVR4Aa3WtRkDMQxA4cAEgT7YBwcIeIVw6xX8GdrAEJf2Rrj9woyvkOrfDFLqFPmO+hqdSuoWNfUz2ldXUH+idXYZ9TfKJ1j/Dweww3OXRQL7B9glcAhHPo6dZbDJpnicZJ3BQarL4JBDBeMVjim0Kwp9DKE1CYTWaQhtoNBuKbQLCu2GQh9DaH0CoTUaQus0hDai0C6kYSS8GKNlN9zHwpdiIXxxg/DjMonwB7AS+KRYyP+4/LPH6QMnJJzicNLkaZgldloq4OKDlzO8QMIl1x7m048r9nkEpwAAAABJRU5ErkJggg=="/> 
              </a>
            
            <div><h1 style={{color:"white", marginBottom:5, marginTop:10, padding:10}}><b>{c.name}</b></h1></div>
            </Box>
              </>
            ))}
          </Card>
          
        </Div>
      )}
      </Form>
    
    </Wrapper>
    ) 
    
  
 
  
}

export default App;
