import React, { useState } from "react";
import {
  Column,
  Description,
  Image,
  ImageContainer,
  Name,
  Overlay,
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
      code: {
        github: "https://github.com/yasminebelmiro/Calculadora",
        demo: "https://yasminebelmiro-calculadora.netlify.app",
      },
    },
    {
      id: 2,
      img: ImageLandingpage,
      name: "Landing page de uma consultora capilar",
      languages: ["html", "css", "reactjs"],
      description:
        "Landing page desenvolvida para uma consultora capilar, com foco na promoção de produtos para cuidados com os cabelos.",
      code: {
        github: "https://github.com/yasminebelmiro/Elisana-Rodrigues",
        demo: "https://elisanarodrigues.netlify.app",
      },
    },
    {
      id: 3,
      img: ImageSpider,
      name: "Tela de escolha de filmes",
      languages: ["html", "css", "javascript"],
      description:
        "Interface interativa que permite aos usuários navegar entre diferentes franquias de filmes do Homem-Aranha. ",
      code: {
        github: "https://github.com/yasminebelmiro/Spider-Man-Multiverse",
        demo: "https://yasminebelmiro.github.io/Spider-Man-Multiverse/",
      },
    },
    {
      id: 4,
      img: ImageSpotify,
      name: "Spotify Clone",
      languages: ["html", "css", "reactjs", "mongodb", "express"],
      description:
        "Clone funcional do Spotify, o projeto replica funcionalidades essenciais do Spotify, como reprodução de músicas.",
      code: {
        github: "https://github.com/yasminebelmiro/spotify-clone",
        demo: "https://spotify-clone-hashtag-o9r8.onrender.com",
      },
    },
    {
      id: 5,
      img: ImageToDo,
      name: "TO DO List",
      languages: ["html", "css", "reactjs"],
      description:
        "Aplicativo de gerenciamento de tarefas que permite aos usuários adicionar, visualizar e excluir atividades. ",

      code: {
        github: "https://github.com/yasminebelmiro/TO-DO-List",
        demo: "https://lista-tarefas-19.netlify.app",
      },
    },
    {
      id: 6,
      img: ImageGitfind,
      name: "Git Find",
      languages: ["html", "css", "reactjs"],
      description:
        "Ferramenta de busca de perfis do GitHub. O usuário pode pesquisar por qualquer perfil e visualizar so repositórios. O projeto integra a API do GitHub para buscar dados em tempo real.",
      code: {
        github: "https://github.com/yasminebelmiro/GitFind",
      },
    },
    {
      id: 7,
      img: ImageWiki,
      name: "Wiki Github",
      languages: ["html", "css", "reactjs"],
      description:
        "Aplicação que permite buscar e visualizar repositórios do GitHub. O o projeto utiliza a API do GitHub para fornecer informações detalhadas sobre os repositórios.",
      code: {
        github: "https://github.com/yasminebelmiro/wiki-repositorio-github",
      },
    },
  ];
  const [isHovered, setIsHovered] = useState();

  return (
    <ProjectsContainer>
      <Title style={{ textAlign: "center" }}>Projetos</Title>

      <ProjectsGrid>
        {projects.map((item) => (
          <ProjectCard key={item.id}>
            <ImageContainer>
              <Image src={item.img} alt={`Imagem de ${item.name}`} />
              <Overlay>
                <Row>
                  {Object.entries(item.code).map(([key, url]) => (
                    <a href={url}>
                      <Tag key={key} language={key} />
                    </a>
                  ))}
                </Row>
              </Overlay>
            </ImageContainer>

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
