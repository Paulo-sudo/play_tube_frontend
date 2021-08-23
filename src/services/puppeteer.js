import Bot from "./apiBotTube";

const puppeteer = async (name)=>{
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

    if (!sessionStorage.getItem("@botData")) {
        sessionStorage.setItem("@botData", JSON.stringify([]));
      }
    const session = sessionStorage.getItem("@botData")
    await delay(1000)
    
    
    const find = await Bot.find(name)

    const data = {
        url:find[0].url,
        error: false,
        embed: true,
        name: find[0].title,
        imgUrl:find[0].img
    }

    const array = [];
    if(JSON.parse(session).length == 0){
        array.push(data)
        sessionStorage.setItem("@botData",JSON.stringify(array))
    }else{

            for(let i=0; i<JSON.parse(session).length; i++ ){
            array.push(JSON.parse(session)[i])
            
        }
        
        array.push(data)
        
        const values = array.filter(function (a) {

            return !this[JSON.stringify(a.url)] && (this[JSON.stringify(a.url)] = true);
        }, Object.create(null))
        if(values.length > 6){
            values.shift();
        }
 
                
        sessionStorage.setItem("@botData",JSON.stringify(values))
    }

   
    return data;
}

export default puppeteer;