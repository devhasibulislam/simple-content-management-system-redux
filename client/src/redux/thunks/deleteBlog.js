import { removeBlogData } from "../actions/blogActions";

function deleteBlog(id) {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();
    if (data.data.acknowledged) {
      dispatch(removeBlogData(id));
    }
  };
}

export default deleteBlog;
