import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";


const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    title,
    cover,
    author,
    author_img,
    post_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-20">
      <img
        className="w-full mb-8"
        src={cover}
        alt={`Cover Picture of the title ${title}`}
      />
      <div className="flex justify-between item-center mb-4">
        <div className="flex items-center">
          <img className="w-14" src={author_img} alt="" />
        </div>
        <div className="mr-auto ml-4">
          <h3 className="text-2xl">{author}</h3>
          <p>{post_date}</p>
        </div>
        <div>
          <span className="text-xl text-gray-600 ">{reading_time}min read</span>
          <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl">
            <FaBookmark></FaBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func
};
export default Blog;
