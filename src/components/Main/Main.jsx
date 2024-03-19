import { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/Context";

const Main = () => {

const {
  onSent,
  recentPrompt,
  showResult,
  loading,
  resultData,
  input,
  setInput
} = useContext(Context)

  return (
    <div>
      <div className="main">
        <div className="nav flex justify-between items-center p-4 w-full bg-white">
          <p className="text-2xl font-medium">Gemini</p>
          <img
            src={assets.user_icon}
            alt="user-icon"
            className="rounded-full w-[6%]"
          />
        </div>
        <div className="main-container">
          
          {!showResult ?
          <>
            <div className="greet">
            <p>
              <span>Hello, Dev</span>
            </p>
            <p>How can I help you today?</p>
          </div>
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} alt="compass" />
            </div>
            <div className="card">
              <p>Briefly summarize this concept: urban planning</p>
              <img src={assets.bulb_icon} alt="blub" />
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                minus.
              </p>
              <img src={assets.message_icon} alt="message" />
            </div>
            <div className="card">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                minus.
              </p>
              <img src={assets.code_icon} alt="code" />
            </div>
          </div>
          </>
          : <div className="result">
            <div className="result-title flex items-center gap-4">
              <img src={assets.user_icon} alt="icon" className="size-16 rounded-full"/>
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data flex mt-8">
              <img src={assets.gemini_icon} alt="logo" className="size-12"/>
              {loading ? <div className="loader">
                <hr/>
                <hr/>
                <hr/>
              </div>
              :
              <p dangerouslySetInnerHTML={{__html:resultData}}></p>
              }
            </div>
            </div>}
        
          <div className="main-bottom">
            <div className="search-box">
              <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here" />
              <div>
                <img src={assets.gallery_icon} alt="gallery" />
                <img src={assets.mic_icon} alt="mic" />
                {input ? <img onClick={()=>onSent()} src={assets.send_icon} alt="send" /> : null}
              </div>
            </div>
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and You chat Apps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
