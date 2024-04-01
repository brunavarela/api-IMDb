import { useEffect, useState } from "react";
import {
  DivHeader,
  Button,
  Title,
  DivTitle,
  DivContent,
  Text,
  Input,
  DivInput,
} from "./header";
import axios from "axios";
import { FaSearch } from "react-icons/fa";

export const Header = () => {
  return (
    <>
      <DivHeader>
        <DivTitle>
          <Title>IMDB-API</Title>
          <DivInput>
            <Input />
            <Button>
              <FaSearch />
            </Button>
          </DivInput>
        </DivTitle>
        <DivContent>
          <Text>Adicionar filme</Text>
          <Text>Usuários</Text>
          <Text>Sair</Text>
        </DivContent>
      </DivHeader>
    </>
  );
};
