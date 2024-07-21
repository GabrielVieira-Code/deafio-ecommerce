import styled from 'styled-components';
import { FaShoppingCart, FaTrash } from 'react-icons/fa'; // Importando ícones
// import { FaShoppingCart } from 'react-icons/fa'; // Exemplo usando react-icons

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 16px;
  width: 300px; /* Ajuste a largura conforme necessário */
  margin: 16px; /* Espaçamento entre cards */
`;


export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px; /* Tamanho do ícone */
  cursor: pointer; /* Cursor para indicar interatividade */
`;


export const Header = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc; /* Linha horizontal */
  padding-bottom: 8px;
`;

export const Image = styled.img`
  width: 80px; /* Tamanho da imagem */
  height: auto; /* Manter proporção */
  border-radius: 4px;
  margin-right: 12px;
`;

export const Container = styled.div`
  padding: 20px;
  background-color: #2f2e41; /* Cor de fundo especificada */
  height: 100vh; /* Para ocupar toda a altura da tela */
  @media (max-width: 375px) {
    padding: 10px; /* Ajuste de padding para telas menores */
  }
`;

export const Content = styled.div`
  display: flex; /* Aplica flexbox ao conteúdo */
  flex-wrap: wrap; /* Permite que os itens quebrem para a linha de baixo, se necessário */
  justify-content: center; /* Centraliza os itens */
 gap: 16px; /* Espaçamento uniforme entre os itens */
  margin-top: 20px; /* Espaçamento acima do conteúdo */
`;
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between; /* Espaço entre os itens */
  align-items: center; /* Alinhamento vertical */
  color: white; /* Cor do texto */
`;



export const MovieTitle = styled.h3`
  margin: 10px 0; /* Ajuste a margem superior e inferior conforme necessário */
  font-size: 16px; /* Defina o tamanho da fonte desejado */
  align-self: center; /* Centraliza verticalmente */
`;
export const QuantityInputContainer = styled.div`
  display: flex;
  justify-content: center; /* Centraliza o input */
  margin: 16px 0; /* Espaçamento acima e abaixo do input */
`;



export const QuantityInput = styled.input`
  width: 20px; /* Tamanho do input */
  height: 20px; /* Ajuste a altura conforme necessário */
  text-align: center; /* Centraliza o texto dentro do input */
  padding: 1px; /* Ajuste o padding para um input mais compacto */
  margin: 90px 7px 0; /* Adiciona margem superior */
  font-size: 14px; /* Ajuste o tamanho da fonte se necessário */
  border: 1px solid #ccc; /* Adiciona uma borda se necessário */
  border-radius: 4px; /* Arredonda os cantos */
`;


export const Button = styled.button`
  background-color: #007bff; /* Cor do botão */
  color: white; /* Cor do texto */
  border: none;
  border-radius: 4px;
  padding: 5px; /* Tamanho do botão */
  cursor: pointer;
  width: 15px; /* Defina uma largura fixa para os botões */
  height: 20px; /* Ajuste a altura conforme necessário */
  margin: 90px 7px 0; /* Adiciona margem superior */

  &:hover {
    background-color: #0056b3; /* Cor ao passar o mouse */
  }
`;
export const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto; /* Leva para o lado direito */
`;

export const TrashIcon = styled(FaTrash)`
  cursor: pointer; /* Cursor de mãozinha */
  margin-left: 8px;
  font-size: 24px; /* Ajuste o tamanho do ícone conforme necessário */
`;
export const Subtotal = styled.p`
  margin: 0;
  font-size: 14px; /* Ajuste o tamanho da fonte */
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px; /* Espaçamento acima do rodapé */
`;

export const TotalLabel = styled.p`
  margin: 0;
`;

export const TotalValue = styled.p`
  margin: 0;
`;

export const CheckoutButton = styled.button`
  background-color: #007bff; /* Cor do botão */
  color: white; /* Cor do texto */
  border: none;
  border-radius: 4px;
  padding: 12px 0; /* Ajuste o padding para mais espaço vertical */
  cursor: pointer;
  width: 100%; /* Faz o botão ocupar toda a largura do card */
  margin-top: 16px; /* Espaço acima do botão */

  &:hover {
    background-color: #0056b3; /* Cor ao passar o mouse */
  }
`;
