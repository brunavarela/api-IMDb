import styled from "styled-components";

const primaryColor = "#F5C518";
const secondaryColor = "#fff";
const black = "#000";
const backgroundColor = "#121212";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  padding: 50px;
`;

export const MovieList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(170px, 1fr));

  gap: 16px;
  max-width: 1200px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const MovieCard = styled.div`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 8px;
  width: 170px;
  height: 400px;
  text-align: left;
  background-color: ${backgroundColor};
`;

export const MovieImage = styled.img`
  width: 170px;
  height: 250px;
  border-radius: 5px;
`;

export const MovieTitle = styled.h2`
  height: 60px;
  font-size: 14px;
  margin-top: 8px;
  color: ${secondaryColor};
`;

export const MovieRating = styled.span`
  font-size: 12px;
  margin-top: 4px;
  color: ${primaryColor};
`;


export const Button = styled.button`
  font-size: 14px;
  font-weight: 600;
  padding: 10px;
  color: ${black};
  background-color: ${primaryColor};
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #deb213;
  }
`;
