import PropTypes from "prop-types";


const Blog = ({ blog }) => {
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
    <div>
      <img src={cover} alt={`Cover Picture of the title ${title}`} />
      <div className="flex justify-between item-center">
        <div className="flex items-center">
          <img className="w-14" src={author_img} alt="" />
        </div>
        <div className="mr-auto ml-4">
          <h3 className="text-2xl">{author}</h3>
          <p>{post_date}</p>
        </div>
        <div>
          <span>{reading_time}min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {
          hashtags.map((hash, idx) => <span key={idx}><a href="">{hash}</a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    author_img: PropTypes.string.isRequired,
}
export default Blog;
