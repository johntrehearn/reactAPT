import {useState} from 'react';
import BlogList from './BlogList';

// to give BlogList.js access to the blogs we could redefine the blogs in the BlogsList component OR we could pass it as a prop to BlogList.js

// props is a way to pass data from a parent component to a child component

// props is an object that contains all the properties that were passed to a component

// props is short for properties

// props blogs={blogs}

// This is passing the blogs array from the Home component to the BlogList component

// In BlogList.js we need to receive the prop that we passed from Home.js

// we use props as an argument to the BlogList function i.e. const BlogList = (props) => { ... }

// Then in BlogList.js we get access to an argument inside the component called props

//Props is just an an object that contains all the properties that were passed to a component

// so in BlogList.js we can access the blogs array by using const blogs = props.blogs;

const Home = () => {
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
    {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
    {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
  ]);

  // The method below using an arrow function to filter the blogs array to only show blogs by Mario. This filter method fires a callback function for each item in the array. Now if we return true for that item it will be kept in the new array, if we return false it will be removed. IT RETURNS A NEW ARRAY with only the truthey values. i.e. the blogs by Mario. WE ARE THEN PASSING THIS DATA IN AS A PROP TO THE BLOGLIST COMPONENT.

  // we take in the blog as an argument and return true or false blogs={blogs.filter((blog) => blog.author === 'mario')}

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // handleDelete is defined in here as the data is initialised in here and this is where the state is. So we want to use the setBlog method here component to edit the state and THEN PASS THIS THROUGH AS A PROP TO THE BLOGLIST COMPONENT. i.e. pass handleDelete through as a prop to the BlogList component as you can pass functions as props handleDetete={handleDelete} is passing the prop through to the BlogList.js componenent it need to be accepted in the destructed top of const BlogList = ({blogs, title, handleDelete}) => { ... } so we can use it.

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      <BlogList
        blogs={blogs.filter((blog) => blog.author === 'mario')}
        title="Mario's Blogs"
      />
    </div>
  );
};

export default Home;
