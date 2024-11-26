

import SectionHeading from '@/components/Helper/SectionHeading'
import Blog_Card from '@/components/Home/Blog_Section/Blog_Card'
import { blogs } from '@/data/data'
import React from 'react'
import './blog.css'

const Blog = () => {
  return (
    <div className='pt-16 pb-16 bg-black'>
       <div className='w-[80%] mx-auto mt-20'>
        
        <h1 className='head'>Check Our Blogs</h1>
        <p className='para'>Latest insights and updates</p>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center'>
           {
             blogs.map((blog)=> {
                return <div key={blog.id}>
                     {/* BlogCard */}
                       <Blog_Card blog={blog}/>
                </div>
             })
           }
        </div>

       </div>
    </div>
  )
}

export default Blog
