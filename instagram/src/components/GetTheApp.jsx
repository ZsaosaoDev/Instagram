import React from 'react'
import googlePlay from "../assets/GGPLAY.png";
import microsoftStore from "../assets/MSS.png";
const GetTheApp = () => {
  return (
    <div className='absolute_center flex-column mt-2'>
          <p className="mb-4">get the app </p>
          <div className="absolute_center gap-2">
            <a>
              <img alt="google play" className="h40" src={googlePlay} />
            </a>
            <a>
              <img alt="microsoft store" className="h40" src={microsoftStore} />
            </a>
          </div>
    </div>
  )
}

export default GetTheApp