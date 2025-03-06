import React, { useEffect, useState } from "react";
import Logo from "../../assets/bunny-solid.svg";
import { HeaderContainer, Image, Item, Left, Right } from "./style";

const Header = () => {
  const [active, setActive] = useState("Sobre");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const itemsMenu = [
    { id: 1, title: "Sobre", path: "/" },
    { id: 2, title: "Currículo", path: "/curriculo" },
    { id: 3, title: "Projetos", path: "/projetos" },
    { id: 4, title: "Contato", path: "/contatos" },
  ];

  return (
    <HeaderContainer>
      {isMobile ? (
        <Right>
          {itemsMenu.map((item) => (
            <Item
              key={item.id}
              onClick={() => setActive(item.title)}
              active={active === item.title}
              to={item.path}
            >
              {item.title}
            </Item>
          ))}
        </Right>
      ) : (
        <>
          <Left>
            <Image src={Logo} alt="Logo" />
          </Left>

          <Right>
            {itemsMenu.map((item) => (
              <Item
                key={item.id}
                onClick={() => setActive(item.title)}
                active={active === item.title}
                to={item.path}
              >
                {item.title}
              </Item>
            ))}
          </Right>
        </>
      )}
    </HeaderContainer>
  );
};

export default Header;
