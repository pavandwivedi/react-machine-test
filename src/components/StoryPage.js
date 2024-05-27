import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchStoryById } from '../services/api';

const StoryPage = () => {
  const { id } = useParams();
  const [story, setStory] = useState(null);
      
  useEffect(() => {
    const getstory = async ()=>{
        const data = await fetchStoryById(id);
      setStory(data);
    };
    getstory();
  }, [id]);

  if (!story) return <div>Loading...</div>;

  return (
    <div>
      <h1>{story.title}</h1>
      <img src={`https://ik.imagekit.io/dev24/${story.image}`} alt={story.title} />
      <div>
        <p>{story.content}</p>
      </div>
    </div>
  );
};

export default StoryPage;
