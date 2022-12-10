import { updateBlogData } from "../actions/blogActions";

const getBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`);
    const data = await res.json();

    if (data.status) {
      dispatch(updateBlogData(data.data));
    }
  };
};

export default getBlog;
