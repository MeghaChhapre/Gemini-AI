import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)


  return (
    <div className='main'>
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">


        {!showResult
        ?<>
        <div className="greet">
          <p><span>Hello, Megha</span></p>
          <p>How can I help you</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>
              Ask me some questions so that i can give you the answers
            </p>
            <img src={assets.compass_icon} alt="" />
          </div>
          <div className="card">
            <p>
             Let me give you the breif summary of todays headlines
            </p>
            <img src={assets.bulb_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Now we can suggegts you the images of weather
            </p>
            <img src={assets.message_icon} alt="" />
          </div>
          <div className="card">
            <p>
              Just choose one of the sport and enjoy it
            </p>
            <img src={assets.code_icon} alt="" />
          </div>
        </div>
        </>
        :<div className='result'>
          <div className="result-title">
            <img src={assets.user_icon} alt="" />
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={assets.gemini_icon} alt="" />
            {loading
            ?<div className='loader'>
              <hr />
              <hr />
              <hr />
            </div>
            :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
            }
            
          </div>
        </div>
        }
        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Enter prompt here' />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input?<img onClick={()=>onSent()} src={assets.send_icon} alt="" />:null}
            </div>
          </div>
          <p className='bottom-info'>
          <b>&#169; By MeghaChhapre</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main