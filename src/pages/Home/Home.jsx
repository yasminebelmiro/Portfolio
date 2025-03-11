import React from "react";
import {
  HomeContainer,
  Hole,
  Image,
  Name,
  SocialContainer,
  SocialIcons,
  Text,
  TextIcons,
  MobileColumn,
  MobileRow,
  MobileColumnVariant,
} from "./style";
import Me from "../../assets/me.jpg";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import { MdOutlineLocationOn, MdOutlineMailOutline } from "react-icons/md";
import { FaGithubSquare, FaInstagramSquare } from "react-icons/fa";

const Home = () => {
  return (
    <HomeContainer>
      <MobileRow>
        <Image src={Me} alt="" />
        <MobileColumn>
          <Name>Yasmine Belmiro</Name>
          <Hole>Desenvolvedora Front-end</Hole>
        </MobileColumn>
      </MobileRow>

      <MobileColumnVariant>
        <Text>
          <TextIcons as={MdOutlineLocationOn} />
          Pires do Rio - GO
        </Text>
        <Text>
          <TextIcons as={MdOutlineMailOutline} />
          devyasminebelmiro@gmail.com
        </Text>
        <SocialContainer>
          <a  href="https://www.linkedin.com/in/yasmine-oliveira-belmiro-471612282">
            <SocialIcons as={FaLinkedin} />
          </a>
          <a href="https://github.com/yasminebelmiro">
            <SocialIcons as={FaGithubSquare} />
          </a>
        </SocialContainer>
      </MobileColumnVariant>
    </HomeContainer>
  );
};

export default Home;
