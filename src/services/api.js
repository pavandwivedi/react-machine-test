const BASE_URL = 'https://child.onrender.com/api/sciencefiction';

export const fetchStories = async () => {
  const response = await fetch(BASE_URL);
  return response.json();
};

export const fetchStoryById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};
