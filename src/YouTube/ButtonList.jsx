import React from 'react';

const buttonNames = [
  "All", "Music", "Mixes", "Gaming", "Live", "News", "Sports", "Learning", "Movies",
  "Fashion", "Podcasts", "Recently uploaded", "Watched", "New to you", "Trending",
  "Technology", "Comedy", "Travel", "Food", "Science", "Education", "DIY", "Health",
  "Fitness", "Nature", "Documentary", "History", "Art", "Business", "Finance", "Motivation",
  "Cars", "Animals", "Photography", "Space", "Programming", "ReactJS", "JavaScript", "CSS",
  "HTML", "Python", "Mobile", "Web Development", "Shorts",
];

const ButtonList = () => {
  return (
    <div className="px-4 py-2 w-full max-w-screen overflow-hidden">
      <div className="flex gap-3 overflow-x-auto overscroll-x-contain w-full [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
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
