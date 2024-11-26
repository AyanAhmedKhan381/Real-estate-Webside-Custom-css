import Image from "next/image";
import { BiCalendar, BiMessage } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import "./style.css/Blog_Card.css";

interface Props {
  blog: {
    id: number;
    date: string;
    comment: string;
    title: string;
    shortDescription: string;
    image: string;
  };
}

const Blog_Card = ({ blog }: Props) => {
  return (
    <div className="blog-card">
      <div>
        <Image
          src={blog.image}
          alt={blog.title}
          height={300}
          width={300}
          className="blog-card-image"
        />

        <div className="blog-card-content">
          <div className="blog-card-meta">
            <div className="blog-card-meta-item">
              <BiCalendar className="blog-card-meta-icon" />
              <span className="blog-card-meta-text">{blog.date}</span>
            </div>
            <div className="blog-card-meta-item">
              <BiMessage className="blog-card-meta-icon" />
              <span className="blog-card-meta-text">{blog.comment}</span>
            </div>
          </div>

          <div>
            <h1 className="blog-card-title">{blog.title}</h1>
            <p className="blog-card-description">{blog.shortDescription}</p>
          </div>

          <div className="blog-card-readmore">
            <span>Read More</span>
            <BsArrowRight className="blog-card-readmore-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog_Card;
