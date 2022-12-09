import React from "react";
import { useParams } from "react-router-dom";
import useBlog from "../hooks/useBlog";

const BlogDetails = () => {
  const { id } = useParams();
  const blog = useBlog(id);

  const { title, image, description, tag, author, rating, highlights, _id } =
    blog;

  return (
    <section className="container mx-auto">
      <article className="h-full w-full flex justify-center items-center">
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-4 py-8 items-center justify-center flex-col">
            <img
              class="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
              alt={title}
              src={image}
              loading="lazy"
            />
            <div class="text-center lg:w-2/3 w-full">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                {title}
              </h1>
              <p class="mb-8 leading-relaxed">{description}</p>
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  {tag}
                </button>
                <button class="ml-4 inline-flex items-center text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  {[...Array(rating).keys()]?.map((rate) => (
                    <svg
                      key={rate}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-yellow-500"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ))}
                </button>
              </div>
            </div>
            <div className="flex flex-wrap">
              {highlights?.map((highlight, index) => (
                <div key={_id} class="xl:w-1/3 md:w-1/2 p-4">
                  <div class="border border-gray-200 p-6 rounded-lg">
                    <div class="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                      {index === 0 && (
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                        </svg>
                      )}
                      {index === 1 && (
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="6" cy="6" r="3"></circle>
                          <circle cx="6" cy="18" r="3"></circle>
                          <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                        </svg>
                      )}
                      {index === 2 && (
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      )}
                      {index === 3 && (
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          class="w-6 h-6"
                          viewBox="0 0 24 24"
                        >
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                        </svg>
                      )}
                    </div>
                    <p class="leading-relaxed text-base">{highlight}</p>
                  </div>
                </div>
              ))}
            </div>
            <section class="text-gray-600 body-font">
              <div class="container px-5 py-24 mx-auto flex items-center md:flex-row flex-col">
                <div class="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
                  <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
                    ROOF PARTY POLAROID
                  </h2>
                  <h1 class="md:text-3xl text-2xl font-medium title-font text-gray-900">
                    {author}
                  </h1>
                </div>
              </div>
            </section>
          </div>
        </section>
      </article>
    </section>
  );
};

export default BlogDetails;
