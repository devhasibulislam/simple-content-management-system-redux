import blogActionTypes from "../actionTypes/blogActionTypes";

const initialState = {
  blogs: [],
  blog: {},
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case blogActionTypes.ADD_BLOG:
      return {
        ...state,
        blogs: [...state.blogs, action.payload],
      };

    case blogActionTypes.REMOVE_BLOG:
      return {
        ...state,
        blogs: state.blogs.filter((blog) => blog._id !== action.payload),
      };

    case blogActionTypes.FETCH_BLOGS:
      return {
        ...state,
        blogs: action.payload,
      };

    case blogActionTypes.FETCH_BLOG:
      return {
        ...state,
        blog: action.payload,
      };

    case blogActionTypes.UPDATE_BLOG:
      return {
        ...state,
        blogs: [
          ...state.blogs,
          state.blogs.filter((blog) => blog._id !== action.payload._id),
          action.payload,
        ],
      };

    default:
      return state;
  }
};

export default blogReducer;
