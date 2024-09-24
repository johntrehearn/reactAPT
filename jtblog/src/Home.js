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

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" />
    </div>
  );
};

export default Home;
