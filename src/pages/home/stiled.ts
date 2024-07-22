import styled from 'styled-components';

import { FaShoppingCart } from 'react-icons/fa'; // Exemplo usando react-icons

export const Container = styled.div`
  padding: 20px;
  background-color: #2f2e41;
  min-height: 100vh; /* Garante que o contêiner tenha pelo menos 100% da altura da viewport */
  
  @media (max-width: 375px) {
    padding: 10px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  margin-top: 20px;
  width: 100%; /* Garante que o conteúdo ocupe toda a largura disponível */
  
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
`;

export const CartIcon = styled(FaShoppingCart)`
  font-size: 24px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;
