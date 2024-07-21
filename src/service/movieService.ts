// src/services/movieService.ts
import axios from 'axios';

const API_URL = 'https://wefit-movies.vercel.app/api/movies';

export interface Movie {
    id: number;
    title: string;
    image: string;
}

export const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const response = await axios.get<Movie[]>(API_URL);
        console.log("datass",response.data)
        return response.data;
    } catch (error) {
        console.error("Erro ao buscar filmes:", error);
        throw error; // Lide com o erro conforme necessário
    }
};
// src/services/cartService.ts
// Exemplo de definição do tipo CartItem
export interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
}


  
  let arrayBuy: CartItem[] = []; // Estado local para simular armazenamento
  
  export const addToCart = (item: CartItem) => {
    arrayBuy.push(item);
    console.log(arrayBuy); // Para verificar o array atualizado
    return arrayBuy; // Retorna o array atualizado, se necessário
  };
  
  export const getCartItems = () => {
    return arrayBuy; // Retorna os itens do carrinho
  };