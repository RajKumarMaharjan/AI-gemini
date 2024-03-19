import { useContext, useState } from "react";
import { assets } from "../../assets/assets";
import "./Sidebar.css";
import { Context } from "../../context/Context";

const Sidebar = () => {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar flex flex-col justify-between bg-[#f0f4f9] p-6">
      <div className="top">
        <img
          onClick={() => setExtended((prev) => !prev)}
          src={assets.menu_icon}
          alt="menu"
          className="block cursor-pointer"
        />
        <div onClick={()=>newChat()} className="new-chat flex gap-3 items-center justify-center bg-[#e0e3e5] rounded-3xl text-gray-500 py-3 px-4 hover:opacity-80 transition duration-300 cursor-pointer my-4">
          <img src={assets.plus_icon} alt="plus" />
          {extended ? <p className="text-[14px]">New Chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={()=>loadPrompt(item)} key={index} className="recent-entry">
                  <img src={assets.message_icon} alt="message-icon" />
                  <p className="recent-text">{item.slice(0, 18)}...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottom grid gap-4">
        <div className="bottom-item recent-entry">
          <img src={assets.question_icon} alt="question" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.history_icon} alt="history" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <img src={assets.setting_icon} alt="question" />
          {extended ? <p>Setting</p> : null}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
