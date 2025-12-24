import axios from "axios";

const url = 'https://strapi-store-server.onrender.com/api';

const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
export const apodurl = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}&thumbs=true&concept_tags=${true}`;

export const customFetch = axios.create({
    baseURL: apodurl,
});

export const formatPrice = (price) => {
  const dollarsAmount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format((price / 100).toFixed(2));
  return dollarsAmount;
};

  const EVENT_KEY_REGEX = /^event\(.+\)$/;

  export const getAllEvents = () => {
    const results = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && EVENT_KEY_REGEX.test(key)) {
        try {
          const eventData = JSON.parse(localStorage.getItem(key));
          results.push(eventData);
        } catch { }
      }
    }
    return results;
  }
