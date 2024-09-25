import {useState, useEffect, version} from 'react';
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
  // old blogs data
  // const [blogs, setBlogs] = useState([
  //   {title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1},
  //   {title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2},
  //   {title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3},
  // ]);

  const [blogs, setBlogs] = useState(null);

  // The method below using an arrow function to filter the blogs array to only show blogs by Mario. This filter method fires a callback function for each item in the array. Now if we return true for that item it will be kept in the new array, if we return false it will be removed. IT RETURNS A NEW ARRAY with only the truthey values. i.e. the blogs by Mario. WE ARE THEN PASSING THIS DATA IN AS A PROP TO THE BLOGLIST COMPONENT.

  // we take in the blog as an argument and return true or false blogs={blogs.filter((blog) => blog.author === 'mario')}

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  };

  // handleDelete is defined in here as the data is initialised in here and this is where the state is. So we want to use the setBlog method here component to edit the state and THEN PASS THIS THROUGH AS A PROP TO THE BLOGLIST COMPONENT. i.e. pass handleDelete through as a prop to the BlogList component as you can pass functions as props handleDetete={handleDelete} is passing the prop through to the BlogList.js componenent it need to be accepted in the destructed top of const BlogList = ({blogs, title, handleDelete}) => { ... } so we can use it.

  // useEffect runs a function every render of the component. So once when the component is first loaded and then again every time the component is re-rendered. ie. when the state changes - useState is called. IT IS A WAY TO RUN CODE ON EVERY RENDER.

  // useEffect is not stored in a constant as it does not return anything to us.
  // All we need to do is pass as an argument a fiunction that we want to run on every render of the component.
  // normally we use it to fetch data or communicate with some sort of authentication service (these are known as side effects in react)

  // useEffect takes a second argument which is an array of dependencies. This is an array of values that the effect depends on. If any of these values change the effect will run again. If we pass an empty array it will only run on the first render of the component. If we pass nothing it will run on every render of the component.

  // ONE THING TO BE CAREFUL OF is changing the state inside of a useEffect. If we do this it will cause an infinite loop. This is because changing the state causes a re-render and useEffect runs on every render. So if we change the state inside of useEffect it will cause a re-render and useEffect will run again and so on. This is why we pass an empty array as the second argument to useEffect. This will only run the effect on the first render of the component.

  // Old version

  // useEffect(() => {
  //   console.log('use effect ran');
  //   console.log(blogs);
  // }, [blogs]);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, []);

  // to run json web server make data folder in root and db.json file with some data in it run json-server npx json-server --watch data/db.json --port 8000

  return (
    <div className="home">
      {blogs && (
        <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />
      )}
      {blogs && (
        <BlogList
          blogs={blogs.filter((blog) => blog.author === 'mario')}
          title="Mario's Blogs"
        />
      )}
    </div>
  );
};

export default Home;
