import React, { useEffect, useState } from 'react';
import { fetchStories } from '../services/api';
import StoryCard from '../components/StoryCard';

const HomePage = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    const getStories = async () => {
      const data = await fetchStories();
      setStories(data);
    };
    getStories();
  }, []);

  return (
    <div className="stories-page">
      {stories.map(story => (
        <StoryCard key={story.id} story={story} />
      ))}
    </div>
  );
};

export default HomePage;
