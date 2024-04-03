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
          <Article imgUrl={blog02} date = "Jan 28, 2032" title="But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system"/>
          <Article imgUrl={blog03} date = "Sep 28, 2032" title="No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful."/> 
          <Article imgUrl={blog04} date = "Aug 22, 2032" title="To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it"/> 
          <Article imgUrl={blog05} date = "Dec 11, 2032" title="But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences"/>
            </div>
          </div>
        </div>
      
  )
}

export default Blog
