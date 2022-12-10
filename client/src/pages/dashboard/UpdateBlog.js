import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getBlog from "../../redux/thunks/getBlog";

const UpdateBlog = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { blog } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(getBlog(id));
  }, [dispatch, id]);

  console.log(blog);

  return (
    <section className="flex flex-col justify-center items-center h-full w-full ">
      <form className="shadow-lg p-10 rounded-md flex flex-wrap gap-3 max-w-3xl justify-between bg-white">
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="title">
            Title
          </label>
          <input type="text" id="title" />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="image">
            Image
          </label>
          <input type="text" name="image" id="image" />
        </div>

        <div className="flex flex-col w-full">
          <label className="mb-2" htmlFor="description">
            Description
          </label>
          <textarea type="text" name="description" id="description" />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-3" htmlFor="tag">
            Tag
          </label>
          <select name="tag" id="tag">
            <option value="programming-language">Programming Language</option>
            <option value="interview-question">Interview Question</option>
            <option value="aptitude-qna">Aptitude QNA</option>
            <option value="machine-learning">Machine Learning</option>
            <option value="cloud-computing">Cloud Computing</option>
            <option value="embedded-system">Embedded System</option>
            <option value="nanotechnology">Nanotechnology</option>
            <option value="big-data">Big Data</option>
            <option value="hadoop">Hadoop</option>
            <option value="dbms">DBMS</option>
          </select>
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="author">
            Author
          </label>
          <input type="text" name="author" id="author" />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight1">
            Highlight 1
          </label>
          <input type="text" name="highlight1" id="highlight1" />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight2">
            Highlight 2
          </label>
          <input type="text" name="highlight2" id="highlight2" />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight3">
            Highlight 3
          </label>
          <input type="text" name="highlight3" id="highlight3" />
        </div>
        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="highlight4">
            Highlight 4
          </label>
          <input type="text" name="highlight4" id="highlight4" />
        </div>

        <div className="flex flex-col w-full max-w-xs">
          <label className="mb-2" htmlFor="rating">
            Rating
          </label>
          <input type="number" name="rating" id="rating" />
        </div>

        <div className="flex justify-between items-center w-full">
          <button
            className=" px-4 py-3 bg-indigo-500 rounded-md font-semibold text-white text-lg disabled:bg-gray-500"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateBlog;
