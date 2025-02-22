"use client";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://fullstack-blog-mern-coya.onrender.com/api/post/getposts');
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <section id="blog" className="container mx-auto px-5 py-8 sm:py-12 bg-gray-800/20 rounded-lg">
      <header>
        <h2 className="text-xl md:text-3xl font-bold mb-8 sm:mb-12 text-center text-slate-400">My posts</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post._id} className="card">
            <div className="p-4">
              <h3 className="text-xl md:text-1xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm mb-4">{post.category}</p>
              <Link href={`https://fullstack-blog-mern-coya.onrender.com/post/${post.slug}`}
                className="btn text-primary-400 hover:text-primary-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer">
                Read More
              </Link>
            </div>
          </article> 
        ))}
      </div>
    </section>
  )
}

export default Blog;