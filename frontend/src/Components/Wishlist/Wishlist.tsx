import React, { useEffect, useState } from "react";
import "./Wishlist.css";
//import { Link } from "react-router-dom";

interface Wish {
  id: number;
  title: string;
  link: string;
  description: string;
  image: string;
}

const Wishlist: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace 'http://localhost:3000' with the actual URL of your server
    fetch("http://localhost:5000/wishes")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        if (data.wishes) {
          setWishes(data.wishes);
        } else {
          setError('Invalid JSON structure: "wishes" key not found.');
        }
      })
      .catch((error) => {
        setError(`Error fetching data: ${error.message}`);
      });
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Ønskeliste</h1>
      <div className="grid-container">
        {wishes.map((wish) => (
          <div className="card" key={wish.id}>
            <h2>{wish.title}</h2>
            <p>{wish.description}</p>
            <a href={wish.link} target="_blank" rel="noopener noreferrer">
              Link
            </a>
            <img src={wish.image} alt={wish.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
