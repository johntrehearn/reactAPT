import {useState, useEffect} from 'react';

const useFetch = (url) => {
  // here we are going to change blogs and setBlogs to data so it is more reuseable
  // old code: const [blogs, setBlogs] = useState(null);
  // new code: const [data, setData] = useState(null);

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return {data, isLoading, error};
};

export default useFetch;
