import React from "react";
import {
  Column,
  Description,
  Image,
  Name,
  ProjectCard,
  ProjectsContainer,
  ProjectsGrid,
  Row,
  Title,
} from "./style";
import ImageCalculator from "../../assets/calculadora.png";
import ImageLandingpage from "../../assets/landingpage.png";
import ImageSpider from "../../assets/spider.png";
import ImageSpotify from "../../assets/spotify-clone.png";
import ImageGitfind from "../../assets/gitfind.png";
import ImageToDo from "../../assets/to-do.png";
import ImageWiki from "../../assets/wiki-github.png";
import { GoContainer } from "react-icons/go";
import Tag from "../../components/Tag/Tag";

const Projects = () => {
  const projects = [
    {
      id: 1,
      img: ImageCalculator,
      name: "Calculadora funcional",
      languages: ["html", "css", "reactjs"],
      description:
        "Calculadora interativa desenvolvida com ReactJS, capaz de realizar operações matemáticas básicas como adição, subtração, multiplicação, divisão e cálculo de porcentagem. O projeto demonstra habilidades em lógica de programação e manipulação de estado em React.",
    },
    {
      id: 2,
      img: ImageLandingpage,
      name: "Landing page de uma consultora capilar",
      languages: ["html", "css", "reactjs"],
      description:
        "Landing page desenvolvida para uma consultora capilar, com foco na promoção de produtos para cuidados com os cabelos.",
    },
    {
      id: 3,
      img: ImageSpider,
      name: "Tela de escolha de filmes",
      languages: ["html", "css", "javascript"],
      description:
        "Interface interativa que permite aos usuários navegar entre diferentes franquias de filmes do Homem-Aranha. ",
    },
    {
      id: 4,
      img: ImageSpotify,
      name: "Nome",
      languages: ["html", "css", "reactjs", "mongodb", "express"],
      description: "Clone funcional do Spotify, o projeto replica funcionalidades essenciais do Spotify, como reprodução de músicas.",
    },
    {
      id: 5,
      img: ImageToDo,
      name: "Nome",
      languages: ["html", "css", "reactjs"],
      description:
        "Aplicativo de gerenciamento de tarefas que permite aos usuários adicionar, visualizar e excluir atividades. ",
    },
    {
      id: 6,
      img: ImageGitfind,
      name: "Git Find",
      languages: ["html", "css", "reactjs"],
      description:
        "Ferramenta de busca de perfis do GitHub. O usuário pode pesquisar por qualquer perfil e visualizar so repositórios. O projeto integra a API do GitHub para buscar dados em tempo real.",
    },
    {
      id: 7,
      img: ImageWiki,
      name: "Wiki Github",
      languages: ["html", "css", "reactjs"],
      description:
        "Aplicação que permite buscar e visualizar repositórios do GitHub. O o projeto utiliza a API do GitHub para fornecer informações detalhadas sobre os repositórios.",
    },
  ];

  return (
    <ProjectsContainer>
      <Title style={{ textAlign: "center" }}>Projetos</Title>

      <ProjectsGrid>
        {projects.map((item) => (
          <ProjectCard key={item.id}>
            <Image src={item.img} alt={`Imagem de ${item.name}`} />
            <Column>
              <Name>{item.name}</Name>
              <Description>{item.description} </Description>
              <Row>
                {item.languages.map((lang) => (
                  <Tag key={lang} language={lang} />
                ))}
              </Row>
            </Column>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
