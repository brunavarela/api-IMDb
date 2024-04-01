import {
  Button,
  CloseButton,
  Form,
  Input,
  Label,
  ModalContainer,
  ModalContent,
  TextArea,
  DivInput,
} from "./modal";

export const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  formData,
  handleChange,
}) => {
  return (
    <>
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <Form onSubmit={onSubmit}>
              <DivInput>
                <Label>Título:</Label>
                <Input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </DivInput>
              <DivInput>
                <Label>Diretor:</Label>
                <Input
                  type="text"
                  name="director"
                  value={formData.director}
                  onChange={handleChange}
                  required
                />
              </DivInput>
              <DivInput>
                <Label>Elenco:</Label>
                <Input
                  type="text"
                  name="cast"
                  value={formData.cast}
                  onChange={handleChange}
                  required
                />
              </DivInput>
              <DivInput>
                <Label>Resumo:</Label>
                <TextArea
                  name="resume"
                  value={formData.resume}
                  onChange={handleChange}
                  required
                />
              </DivInput>
              <DivInput>
                <Label>Gênero:</Label>
                <Input
                  type="text"
                  name="genre"
                  value={formData.genre}
                  onChange={handleChange}
                  required
                />
              </DivInput>
              <DivInput>
                <Label>Image:</Label>
                <Input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  required
                />
              </DivInput>
              <Button type="submit">Adicionar Filme</Button>
            </Form>
            <CloseButton onClick={onClose}>Fechar</CloseButton>
          </ModalContent>
        </ModalContainer>
      )}
    </>
  );
};
