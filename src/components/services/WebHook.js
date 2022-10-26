import axios from "axios";
import { useState } from "react";

//https://birdie0.github.io/discord-webhooks-guide/structure/embeds.html

const DiscordWebHook = () =>{

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null)


 
  const checkStatus = (status)=>{
    console.log(status)
    if(status === 204){
      setSuccess(true)
    }
  }

  const clearStatus = () =>{
    setError(null)
    setSuccess(null)
  }

    const postData = async (data) =>{
      console.log(data)
        const body = {
            tts: false,
            embeds: [
              {
                title: ":purple_square:  NEW CONTACT :purple_square: ",
                color: 12555519,
                description: `**${data}**`,

                footer: {
                  text: "-------------------------------------",
                  // icon_url: "https://i.imgur.com/fKL31aD.jpg"
                },
                // image: {
                //   url: "https://cdn.7tv.app/emote/603cb5e1c20d020014423c68/4x.webp"
                // }
              },
            ],
          };
      
          try {
            const data = await axios.post(
                "https://discord.com/api/webhooks/1032620008322375710/OIu_cZ-kstvrHIcIExEe1eYI3bUBLoZ9UYno8k0BuuBxCwwl1htYRPfZV7Id_w4JWEuf",
              body
            );
            // лень переводить date
            console.log(data.headers.date + " + 3 часа");
            // console.log(data.status)
            checkStatus(data.status)

          } catch (error) {
            setError(true)
            console.error(error);
          }
        
    }

    return {postData,error,success, clearStatus}

}

export default DiscordWebHook;



