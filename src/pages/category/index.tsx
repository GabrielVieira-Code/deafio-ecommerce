import * as C from "./stiled";
import React from 'react';
import { CartItem } from "../../types/CardType";
import { addToCart } from '../../service/movieService'; // Importe a função addToCart

interface MovieCardProps {
  id: number;
  title: string;
  price: number;
  image: string;
  onAddToCart: () => void; // Ajuste para que onAddToCart não receba parâmetros
}
  

export const MovieCard: React.FC<MovieCardProps> = ({ id, title,price,image, onAddToCart  }) => {
  const handleAddToCart = () => {
    const item: CartItem = { id, title, price, image }; // Cria o objeto CartItem com os dados do filme
    addToCart(item); // Chama a função do serviço para adicionar ao carrinho
    console.log('Item adicionado:', item); // Para verificar no console
  };
  
  return (
   
    <C.Card>
           <C.MovieImage src={image} alt={title} />
      {/* <img src={image} alt={title} /> */}
      <C.Title>{title}</C.Title>
      <C.Footer>
        <C.CartIcon />
        <C.AddToCartButton onClick={handleAddToCart}>Adicionar ao carrinho</C.AddToCartButton>

      </C.Footer>
    </C.Card>
     
  );
};
