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
import { Modal } from "../Modal/modal.jsx";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    cast: "",
    resume: "",
    genre: "",
    image: "",
  });

  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = localStorage.getItem("Token");
    if (storedToken) {
      console.log("Token recuperado:", storedToken);
      setToken(storedToken);
    }
  }, []);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/movies", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      alert("Filme adicionado com sucesso!");
      handleCloseModal();
    } catch (error) {
      console.error("Erro ao adicionar filme:", error);
      alert("Erro ao adicionar filme. Por favor, tente novamente.");
    }
  };

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
          <Text onClick={handleOpenModal}>Adicionar filme</Text>
          <Text onClick={handleLogout}>Sair</Text>
        </DivContent>
      </DivHeader>

      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          onSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
        />
      )}
    </>
  );
};
