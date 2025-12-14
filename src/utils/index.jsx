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

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
