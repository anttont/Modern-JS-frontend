import React from 'react'
import "./blog.css"
import { Article } from '../../components'
import { blog01, blog02, blog03, blog04, blog05} from "./imports"

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id="blog">
      <div>
        <h1 className='gradient__text'>A lot is happening</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01} date = "Sep 28, 2032" title="A sandstorm moves from the direction of the large desert. "/>
          </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02} date = "Sep 28, 2032" title="Build and Deploy 4 Modern React Apps and Get Hired as a Frontend Developer | Full 10-Hour Course"/>
          <Article imgUrl={blog03} date = "Sep 28, 2032" title="Build and Deploy 4 Modern React Apps and Get Hired as a Frontend Developer | Full 10-Hour Course"/> 
          <Article imgUrl={blog04} date = "Sep 28, 2032" title="Build and Deploy 4 Modern React Apps and Get Hired as a Frontend Developer | Full 10-Hour Course"/> 
          <Article imgUrl={blog05} date = "Sep 28, 2032" title="Build and Deploy 4 Modern React Apps and Get Hired as a Frontend Developer | Full 10-Hour Course"/>
            </div>
          </div>
        </div>
      
  )
}

export default Blog
