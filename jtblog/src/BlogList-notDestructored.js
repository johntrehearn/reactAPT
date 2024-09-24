// here in BlogList.js we need to receive the prop that we passed from Home.js

// we use props as an argument to the BlogList function i.e. const BlogList = (props) => { ... }

// here we get access to an argument inside the component called props

//Props is just an an object that contains all the properties that were passed to a component

// we can access the blogs array by using const blogs = props.blogs;

// if we log it to the console we can see the array of blogs

const BlogList = ({blogs, title}) => {
  // const blogs = props.blogs;
  // const title = props.title;

  console.log(props, blogs);

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
