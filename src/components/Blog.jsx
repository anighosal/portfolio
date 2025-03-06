"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Element } from "react-scroll";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error("Error loading blogs:", err));
  }, []);

  return (
    <Element name="blog">
      <div>
        {" "}
        <h2
          className="font-semibold md:text-4xl text-lg text-center mb-20 text-white"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          Blog
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6 mt-20">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="text-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full"
          >
            <Image
              src={blog.image}
              alt={blog.title}
              width={400}
              height={250}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold">{blog.title}</h3>
              <p className="text-White text-sm">
                Release Date: {blog.releaseDate}
              </p>
              <p className="text-white mt-2">{blog.description}</p>

              {/* Author Section */}
              <div className="flex items-center mt-4">
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <p className="ml-3 text-white">{blog.author.name}</p>
              </div>

              {/* Button - Forces alignment to the bottom */}
              <div className="mt-auto">
                <Link href={`/blog/${blog.id}`} passHref>
                  <button className="w-full mt-3 px-4 py-2 btn bg-gradient-to-br from-purple-400 to-pink-600 text-white text-xs hover:from-pink-600 hover:to-purple-400">
                    Read Full Blog
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Element>
  );
};

export default BlogList;
