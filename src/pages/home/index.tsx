import * as C from "./stiled";
import React from 'react';
import { NavLink } from "react-router-dom";
import { MovieCard } from "../category/index";

const testeArray = [
  {
    "id": 1,
    "title": "Viúva Negra",
    "price": 9.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/viuva-negra.png"
  },
  {
    "id": 2,
    "title": "Shang-chi",
    "price": 30.99,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/shang-chi.png"
  },
  {
    "id": 3,
    "title": "Homem Aranha",
    "price": 29.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/spider-man.png"
  },
  {
    "id": 5,
    "title": "Morbius",
    "price": 1.5,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/morbius-1.png"
  },
  {
    "id": 6,
    "title": "Batman",
    "price": 21.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/the-batman.png"
  },
  {
    "id": 4,
    "title": "Eternos",
    "price": 17.9,
    "image": "https://wefit-react-web-test.s3.amazonaws.com/eternals.png"
  }
];

export const Home: React.FC = () => {
  return (
    <C.Container>
      <C.Nav>
        <div>WeMovies</div>
        <NavLink to="/shoppingCart" style={{ textDecoration: 'none', color: 'white', cursor: 'pointer' }}>
          <C.CartIcon />
        </NavLink>
      </C.Nav>
      <C.Content>
        {testeArray.map(item => (
          <MovieCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
            onAddToCart={() => {}} // Deixe vazio aqui, pois o MovieCard já cuida disso
          />
        ))}
      </C.Content>
    </C.Container>
  );
};
