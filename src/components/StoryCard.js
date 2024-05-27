import React from 'react';
import { Link } from 'react-router-dom';
import "./storycard.css"
const StoryCard = ({ story }) => {
  return (
    <div className="card">
      <img src={`https://ik.imagekit.io/dev24/${story.Image}`} alt={story.title} />
      <div className="card-body">
        <h5 className="card-title">{story.title}</h5>
        <p className="card-text">{story.description}</p>
        <Link to={`/story/${story.id}`} className="btn btn-primary">Read More</Link>
      </div>
    </div>
  );
};

export default StoryCard;
