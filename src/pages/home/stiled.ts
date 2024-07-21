import styled from 'styled-components';

import { FaShoppingCart } from 'react-icons/fa'; // Exemplo usando react-icons

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

export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px; /* Tamanho do ícone */
  cursor: pointer; /* Cursor para indicar interatividade */
`;
