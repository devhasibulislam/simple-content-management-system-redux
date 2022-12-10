import blogActionTypes from "../actionTypes/blogActionTypes";

export const addBlogData = (data) => {
  return {
    type: blogActionTypes.ADD_BLOG,
    payload: data,
  };
};

export const removeBlogData = (id) => {
  return {
    type: blogActionTypes.REMOVE_BLOG,
    payload: id,
  };
};

export const fetchBlogsData = (data) => {
  return {
    type: blogActionTypes.FETCH_BLOGS,
    payload: data,
  };
};

export const updateBlogData = (data) => {
  return {
    type: blogActionTypes.UPDATE_BLOG,
    payload: data,
  };
};
