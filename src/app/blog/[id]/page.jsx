"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const BlogDetail = () => {
  const params = useParams();
  const [blog, setBlog] = useState(null); // Set initial state to null

  useEffect(() => {
    fetch("/data/blogs.json")
      .then((res) => res.json())
      .then((data) => {
        const selectedBlog = data.find((b) => b.id === Number(params.id)); // Find the blog by ID
        setBlog(selectedBlog || null); // Set the blog if found, else null
      })
      .catch((err) => console.error("Error loading blog:", err));
  }, [params.id]);

  // Show loading text or placeholder if the blog is not yet loaded
  if (!blog) {
    return <p className="text-gray-500 text-center">Loading blog...</p>;
  }

  // Handle the case if blog is still missing or not found
  if (!blog.image || !blog.title || !blog.content) {
    return <p className="text-red-500 text-center">Blog not found!</p>;
  }

  return (
    <div className="container mx-auto p-8">
      <Image
        src={blog.image}
        alt={blog.title}
        width={800}
        height={400}
        className="w-full h-64 object-cover rounded-lg"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold mt-6">{blog.title}</h2>
        <Link href="/" passHref>
          <FaArrowLeft className="cursor-pointer text-xl" />
        </Link>
      </div>
      <p className="text-gray-500">{blog.releaseDate}</p>
      <div className="flex items-center mt-4">
        <Image
          src={blog.author.image}
          alt={blog.author.name}
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="ml-3 text-gray-600">{blog.author.name}</p>
      </div>
      <p className="text-gray-700 mt-6">{blog.content}</p>
    </div>
  );
};

export default BlogDetail;
