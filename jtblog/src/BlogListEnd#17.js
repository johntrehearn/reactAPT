// here in BlogList.js we need to receive the prop that we passed from Home.js

// we use props as an argument to the BlogList function i.e. const BlogList = (props) => { ... }

// here we get access to an argument inside the component called props

//Props is just an an object that contains all the properties that were passed to a component

// we can access the blogs array by using const blogs = props.blogs;

// if we log it to the console we can see the array of blogs

// when we destructure the props we can access the blogs array by using const blogs = props.blogs; and the title by using const title = props.blogs; i.e. we can put in the curly braces and then use ONLY the title such below - blogs, title and handleDelete.

const BlogList = ({blogs, title, handleDelete}) => {
  // const blogs = props.blogs;
  // const title = props.title;

  //console.log(props, blogs);

  return (
    <div className="blog-list">
      <h2>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          {/* Here we need to give an onclick event handler which references the id. This need to be wrapped in an annonomous functions so we can pass an argument into the custom function beacuse we need to pass in the id of the blog we want to delete so we can find it in the array and delete it. It need to be created in the home.js as the data is initialised in the home.js and this is where the state is. So we want to use the setBlog method in the home.js componenet to edit the state*/}
          <button onClick={() => handleDelete(blog.id)}>Delete Blog</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
