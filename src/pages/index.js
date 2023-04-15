import React, { useState } from "react";
import Card1 from "../components/cards/Card1";
import Card2 from "../components/cards/Card2";
import ImageGallery from "../components/Blogs/ImageGallery";
import Card3 from "../components/cards/Card3";
import Card4 from "../components/cards/Card4";
import { fetchBlogs } from "../http/UrlAddress.js";
import Link from "next/link";
function Home({ posts }) {
  // console.log(posts)

  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = posts.filter((post) =>
    post.heading.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayData = filteredData.length > 0 ? filteredData : posts;

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <>
      <div className="w-full text-center ">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          className="bg-slate-300 mx-auto rounded px-5 py-3"
          placeholder="type your search"
        />
      </div>

      <div className="py-10">
        <div className="grid grid-cols-1 gap-3 p-4 mt-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:max-w-7xl xl:mx-auto">
          {displayData.map((post) => {
            return <Card1 key={post._id} post={post} />;
          })}
        </div>
      </div>

      <section className="body-font py-20">
        <div className="px-5 mx-auto max-w-7xl">
          <h1 className="font-black tracking-normal text-3xl dark:text-slate-100 sm:text-4xl sm:text-slate-900 text-center">
            Checkout Our Gallery
          </h1>
          <p className="mt-3 text-lg dark:text-gray-300 sm:max-w-lg sm:mx-auto text-center">
            Time is more valuable than money. You can get more money but you
            cannot get more time.
          </p>
          <div className="flex flex-wrap -m-4 mt-4">
            <Card2 />
            <Card2 />
            <Card2 />
          </div>
        </div>
      </section>

      <ImageGallery />

      <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          <Card3 />
          <Card3 />
          <Card3 />
          <Card3 />
          <Card3 />
          <Card3 />
        </div>
      </div>

      <div className="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-14">
        <div className="grid gap-10 mx-auto mt-8 sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <Card4 />
          <Card4 />
          <Card4 />
          <Card4 />
        </div>
      </div>
    </>
  );
}

export default Home;

export async function getStaticProps(context) {
  const posts = await fetchBlogs();

  return {
    props: {
      posts: posts.data,
    },
  };
}
