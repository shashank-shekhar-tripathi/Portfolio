import React from 'react'
import './MyWork.css'
import theme from '../../assets/theme_pattern.svg'
import data from '../../assets/mywork_data.js'
import arrow from '../../assets/arrow_icon.svg'

const MyWork = () => {

  return (
    <div id='work' className='mywork'> 
        <div className="mywork-title">
            <h1>My latest work</h1>
            <img src={theme} />
        </div>
        <div className="mywork-container">
          {data.map( (work,index)=>{
            return <img key={index} src={work.w_img} alt="" />
          })}

        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img src={arrow} alt="" />
        </div>
    </div>
  )
}

export default MyWork