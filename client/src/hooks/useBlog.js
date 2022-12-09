import { useEffect, useState } from "react";

function useBlog(id) {
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/blog/${id}`)
      .then((res) => res.json())
      .then((data) => setBlog(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  return blog;
}

export default useBlog;
