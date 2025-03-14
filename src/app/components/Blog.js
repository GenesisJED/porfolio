"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);

  const url = "https://blog-genesis.onrender.com";
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(`${url}/api/post/getposts?limit=3`);
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        setPosts(data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    }
    fetchPosts()
  }, [])

  // Array of background images for each card
  const backgroundImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pngtree-brain-lifting-weights-over-head-cartoon-success-win-design-vector-png-image_41207276.jpg-yDMTb9DTaKeTNiHKr9pRK64H0zpjnb.jpeg", // Brain lifting weights
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/roman-synkevych-wX2L8L-fGeA-unsplash.jpg-J7AdEIBc7ace5qOk21iyhgIc3dljVx.jpeg", // GitHub Octocat
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/james-harrison-vpOeXr5wmR4-unsplash.jpg-kavJjGLJRIb36Id6q2hEMvdBEJhp03.jpeg", // Laptop with code
  ]

  return (
    <section id="blog" className="mt-20 sm:mt-40 px-0 sm:px-6 lg:px-8 py-0 sm:py-12 rounded-lg">
      <header>
        <h2 className="text-xl md:text-3xl font-bold mb-8 sm:mb-12 text-center text-slate-300">My posts</h2>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post._id} className="card relative overflow-hidden rounded-lg h-64">
            <div className="absolute inset-0 w-full h-full z-0">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                fill="true"
                className="object-cover object-center w-full h-full opacity-10"
              />
            </div>
            <div className="p-4 relative z-10 flex flex-col justify-center h-full">
              <h3 className="text-xl md:text-1xl font-semibold mb-2">{post.title}</h3>
              <p className="text-sm mb-4">{post.category}</p>
              <Link
                href={`${url}/post/${post.slug}`}
                className="btn text-primary-400 hover:text-primary-500 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
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