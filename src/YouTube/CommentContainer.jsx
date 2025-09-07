import React from 'react'
import FirstComment from './FirstComment'
import CommentList from './CommentList';

const commentsData = [
  {
    id: 1,
    author: "John Doe",
    text: "This video is amazing! 🔥🔥🔥",
    likes: 120,
    createdAt: "2025-09-01T10:30:00Z",
    isVerified: true,
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    replies: [
      {
        id: 11,
        author: "Alice",
        text: "Totally agree! 💯 Best content so far.",
        likes: 45,
        createdAt: "2025-09-02T12:00:00Z",
        isVerified: false,
        avatarUrl: "https://i.pravatar.cc/150?img=2",
        replies: [
          {
            id: 111,
            author: "Mike",
            text: "I keep replaying this video! 😂",
            likes: 18,
            createdAt: "2025-09-03T08:00:00Z",
            isVerified: false,
            avatarUrl: "https://i.pravatar.cc/150?img=3",
            replies: [
              {
                id: 1111,
                author: "Sophia",
                text: "Same here, pure gold!",
                likes: 8,
                createdAt: "2025-09-04T09:30:00Z",
                isVerified: true,
                avatarUrl: "https://i.pravatar.cc/150?img=7",
                replies: []
              }
            ]
          }
        ]
      },
      {
        id: 12,
        author: "David",
        text: "The editing in this video is top-notch.",
        likes: 30,
        createdAt: "2025-09-02T13:20:00Z",
        isVerified: false,
        avatarUrl: "https://i.pravatar.cc/150?img=4",
        replies: []
      }
    ]
  },
  {
    id: 2,
    author: "Emma Watson",
    text: "Thanks for this tutorial. Very helpful!",
    likes: 250,
    createdAt: "2025-09-01T14:45:00Z",
    isVerified: true,
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    replies: [
      {
        id: 21,
        author: "Chris",
        text: "Same! Learned a lot from this.",
        likes: 70,
        createdAt: "2025-09-02T16:20:00Z",
        isVerified: false,
        avatarUrl: "https://i.pravatar.cc/150?img=6",
        replies: [
          {
            id: 211,
            author: "Olivia",
            text: "This video deserves more views!",
            likes: 40,
            createdAt: "2025-09-03T11:10:00Z",
            isVerified: false,
            avatarUrl: "https://i.pravatar.cc/150?img=8",
            replies: [
              {
                id: 2111,
                author: "Noah",
                text: "Exactly! Why isn't this trending?",
                likes: 15,
                createdAt: "2025-09-04T13:40:00Z",
                isVerified: false,
                avatarUrl: "https://i.pravatar.cc/150?img=9",
                replies: [
                  {
                    id: 21111,
                    author: "Sophia",
                    text: "It will soon, trust me!",
                    likes: 6,
                    createdAt: "2025-09-05T09:50:00Z",
                    isVerified: true,
                    avatarUrl: "https://i.pravatar.cc/150?img=10",
                    replies: []
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    author: "Robert",
    text: "Can you make a video on React Router?",
    likes: 90,
    createdAt: "2025-09-01T18:00:00Z",
    isVerified: false,
    avatarUrl: "https://i.pravatar.cc/150?img=11",
    replies: [
      {
        id: 31,
        author: "Liam",
        text: "That would be awesome!",
        likes: 22,
        createdAt: "2025-09-02T20:30:00Z",
        isVerified: false,
        avatarUrl: "https://i.pravatar.cc/150?img=12",
        replies: []
      }
    ]
  },
  {
    id: 4,
    author: "Sophia",
    text: "The thumbnail is so catchy! 👏",
    likes: 65,
    createdAt: "2025-09-01T21:15:00Z",
    isVerified: true,
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    replies: [
      {
        id: 41,
        author: "Jackson",
        text: "Yes, caught my attention instantly!",
        likes: 12,
        createdAt: "2025-09-02T22:45:00Z",
        isVerified: false,
        avatarUrl: "https://i.pravatar.cc/150?img=14",
        replies: []
      }
    ]
  }
];



const CommentContainer = () => {
  
  return (
    <div className=' border-t-1 border-gray-300'>
      <h1 className='mt-3  px-4.5 text-2xl font-bold mb-4'>
        Comments:
      </h1>
      {/* <FirstComment data={commentsData[0]}/> */}
      <CommentList comments={commentsData}/>
    </div>
  )
}
export default CommentContainer
  

