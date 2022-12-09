import { useEffect, useState } from "react";

function useBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((err) => console.log(err));
  }, []);

  return blogs;
}

export default useBlogs;
