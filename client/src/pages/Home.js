import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import getBlogs from "../redux/thunks/getBlogs";

const Home = () => {
  const dispatch = useDispatch();
  const { blogs } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlogs());
  }, [dispatch]);

  const activeClass = "bg-purple-500 border-0 text-white";

  return (
    <section className="container mx-auto">
      <div className="flex flex-col gap-y-4 mt-4">
        <div className="flex gap-x-2 lg:px-0 md:px-0 px-4">
          <button
            className={`border rounded-3xl py-2 px-4 font-semibold text-sm ${activeClass}`}
          >
            First upload
          </button>
          <button
            className={`border rounded-3xl py-2 px-4 font-semibold text-sm`}
          >
            Last upload
          </button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 lg:px-0 md:px-0 px-4">
          {blogs.map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
