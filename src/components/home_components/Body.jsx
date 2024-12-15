import React from 'react'
import { useNavigate } from "react-router-dom";
function Body() {
    const navigate = useNavigate();
  return (
    <div className='bodyC'>
        <div className='bodyContent'>
        <h2>Explore Your Universe!</h2>
        <p> APOD offers a daily visual feast of our universe, bringing the latest discoveries, breathtaking imagery, and educational content to the public, one picture at a time.</p>
        </div>
        <div>
            <button onClick={()=>{ navigate('/apod')}}> <i class="fa-solid fa-rocket"></i> Go!</button>
        </div>

    </div>
  )
}

export default Body