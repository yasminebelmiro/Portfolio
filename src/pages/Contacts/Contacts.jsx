import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  ContactContainer,
  ContactForm,
  Input,
  SocialContainer,
  SocialIcons,
  TextArea,
  Title,
} from "./style";
import { FaGithubSquare, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const Contacts = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    topic: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      to_name: "Yasmine Belmiro",
      from_name: formData.from_name,
      reply_to: formData.from_email,
      topic: formData.topic,
      message: formData.message,
    };

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
          setIsSending(false);
          setFormData({
            from_name: "",
            from_email: "",
            topic: "",
            message: "",
          });
          alert("Mensagem enviada com sucesso!");
        },
        (err) => {
          console.error("Erro ao enviar: ", err);
          setSuccess(false);
          setError(true);
          setIsSending(false);
          alert("Erro ao enviar messagem, tente novamente!");
        }
      );
  };

  return (
    <ContactContainer>
      <Title>Contatos</Title>
      <ContactForm onSubmit={handleSubmit} method="POST">
        <Input
          type="text"
          name="from_name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="from_email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <Input
          type="text"
          name="topic"
          placeholder="Assunto"
          value={formData.topic}
          onChange={handleChange}
          required
        />
        <TextArea
          type="text"
          name="message"
          placeholder="Escreva sua mensagem"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <Button type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </Button>
      </ContactForm>

      <SocialContainer>
        <a
          href="https://www.linkedin.com/in/yasmine-oliveira-belmiro-471612282"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcons as={FaLinkedin} />
        </a>

        <a
          href="https://github.com/yasminebelmiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SocialIcons as={FaGithubSquare} />
        </a>
      </SocialContainer>
    </ContactContainer>
  );
};

export default Contacts;
