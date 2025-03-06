import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Button,
  ContactContainer,
  ContactForm,
  LargeInput,
  SmallInput,
  SocialContainer,
  SocialIcons,
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
      from_name: formData.name,
      reply_to: formData.email,
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
          setFormData({ name: "", email: "", topic: "", message: "" });
        },
        (err) => {
          console.error("Erro ao enviar: ", err);
          setSuccess(false);
          setError(true);
          setIsSending(false);
        }
      );

    success
      ? alert("Mensagem enviada com sucesso!")
      : alert("Erro ao enviar messagem, tente novamente!");
  };

  return (
    <ContactContainer>
      <h1>Contatos</h1>
      <ContactForm onSubmit={handleSubmit} method="POST">
        <SmallInput
          type="text"
          name="name"
          placeholder="Nome completo"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <SmallInput
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <SmallInput
          type="text"
          name="topic"
          placeholder="Assunto"
          value={formData.topic}
          onChange={handleChange}
          required
        />
        <LargeInput
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
          href="www.linkedin.com/in/yasmine-oliveira-belmiro-471612282"
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
