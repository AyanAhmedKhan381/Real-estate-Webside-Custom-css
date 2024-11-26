import SectionHeading from '@/components/Helper/SectionHeading';
import { blogs } from '@/data/data';
import React from 'react';
import Blog_Card from './Blog_Card';
import './style.css/Blog.css';

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-wrapper">
        <SectionHeading heading="Check Our Blogs" subHeading="Latest insights and updates" />
        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id}>
              <Blog_Card blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
