import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const buttonNames = [
   "Music", "Mixes", "Gaming", "Live", "News", "Sports", "Learning", "Movies",
  "Fashion", "Podcasts", "Recently uploaded", "Watched", "New to you", "Trending",
  "Technology", "Comedy", "Travel", "Food", "Science", "Education", "DIY", "Health",
  "Fitness", "Nature", "Documentary", "History", "Art", "Business", "Finance", "Motivation",
  "Cars", "Animals", "Photography", "Space", "Programming", "ReactJS", "JavaScript", "CSS",
  "HTML", "Python", "Mobile", "Web Development", "Shorts",
];

const ButtonList = () => {
  const isMenuOpen= useSelector(store=>store.app.isMenuOpen)
  return (
    <div className={`hidden md:block px-4 py-2 w-full max-w-screen overflow-hidden transition-all duration-300 ${isMenuOpen ? "ml-45" : "ml-0"}`}>
      <div className="flex gap-3 overflow-x-auto overscroll-x-contain w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <button className='px-4 py-1 bg-gray-400 rounded-full text-lg font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer'>All</button>
        {buttonNames.map((name, idx) => (
          <button
            key={idx}
            className="px-4 py-1 bg-gray-100 hover:bg-gray-400 rounded-full text-lg font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer"
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
