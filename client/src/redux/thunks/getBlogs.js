import { fetchBlogsData } from "../actions/blogActions";

const getBlogs = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs");
    const data = await res.json();

    if (data.data.length) {
      dispatch(fetchBlogsData(data.data));
    }
  };
};

export default getBlogs;
