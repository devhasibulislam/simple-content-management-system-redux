import { updateBlogData } from "../actions/blogActions";

const getBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`https://simple-content-management-system-redux.vercel.app/blog/${id}`);
    const data = await res.json();

    if (data.status) {
      dispatch(updateBlogData(data.data));
    }
  };
};

export default getBlog;
