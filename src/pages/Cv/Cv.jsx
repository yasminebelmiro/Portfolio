import React from "react";
import { LuBook } from "react-icons/lu";
import {
  CvContainer,
  Button,
  Icon,
  IconContainer,
  Title,
  EducationContent,
  DescriptionContent,
  Subtitle,
  Column,
  Name,
  Description,
  Row,
} from "./style";
import { PiBagSimpleBold } from "react-icons/pi";
import curriculum from "../../assets/curriculo.pdf";
import { Link } from "react-router-dom";

const ExperienceList = [
  {
    id: 1,
    name: "Desenvolvedora Front-end|Projeto de extensão “Desconto Direto 02/2023 - 12/2025",
    description:
      "Uma aplicação voltada para a retenção de ofertas locais, com o objetivo de tornar o acesso a promoções mais fácil e incentivar o comércio local de forma eficiente e acessível. Desempenho um papel de liderança na equipe e atuo como desenvolvedora front-end.",
  },
  {
    id: 2,
    name: "Embaixadora | DIO Campus Expert 03/2024 - 04/2024",
    description:
      "Participei do programa de Embaixadores Universitários da DIO, uma jornada de 6 semanas focada no desenvolvimento de habilidades de liderança e soft skills, com mentorias, desafios e premiações exclusivas. Durante o programa, compartilhei oportunidades e conhecimentos em tecnologia com colegas universitários, ampliando o impacto positivo da DIO enquanto me desenvolvia em uma experiência prática.",
  },
  {
    id: 3,
    name: "Monitora Voluntária | Programação Orientada a Objetos 03/2024 - 07/2024",
    description:
      "Atuei como monitora, auxiliando calouros com dúvidas, atividades práticas e projetos. Ofereci suporte técnico e acadêmico, ajudando a esclarecer conceitos fundamentais, solucionar problemas de programação e desenvolver habilidades práticas de codificação.",
  },
];

const Cv = () => {
  return (
    <CvContainer>
      <Title>Curriculo</Title>
      <a href={curriculum} download={"Curriculo-Yasmine"}>
        <Button>Baixar pdf</Button>
      </a>
      <EducationContent>
        <Row>
          <IconContainer>
            <Icon as={LuBook} />
          </IconContainer>
          <Subtitle>Educação</Subtitle>
        </Row>

        <DescriptionContent>
         
          <Column>
            <Name>Bacharelado em Sitemas de informação(2022 - 2026)</Name>
            <Description>IF Goiano - Campus Urutaí</Description>
          </Column>
        </DescriptionContent>
      </EducationContent>
      <EducationContent>
        <Row>
          <IconContainer>
            <Icon as={PiBagSimpleBold} />
          </IconContainer>
          <Subtitle>Experiência</Subtitle>
        </Row>

        <DescriptionContent>
          {ExperienceList.map((item) => (
            <Column key={item.id}>
              <Name>{item.name} </Name>
              <Description>{item.description} </Description>
            </Column>
          ))}
        </DescriptionContent>
      </EducationContent>
    </CvContainer>
  );
};

export default Cv;
