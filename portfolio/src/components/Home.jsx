import React from 'react';
import Blob from './Blob';
import { Bio } from '../data/PortfolioData';
import Typewriter from 'typewriter-effect';
import SocialMedia from './SocialMedia';
import {
  HomeMainWrapper,
  HomeDescriptionContainer,
  HomePictureContainer,
  HomeMainContainer,
  HomeSocialMediaHorizantalDiv,
  HomeSocialMediaVerticalDiv,
  TitleName,
  TextLoop,
  TextSpan,
  SubTitle,
} from '../styledComponents/StyledComponents';

function Home() {
  const typewriterOptions = {
    strings: Bio.roles,
    autoStart: true,
    loop: true,
  };

  return (
    <div id="home">
      <HomeMainContainer>
        <HomeMainWrapper>
          <HomeSocialMediaVerticalDiv>
            <SocialMedia />
          </HomeSocialMediaVerticalDiv>
          <HomeDescriptionContainer>
            <TitleName>
              Greetings, I am
              <br />
              {Bio.name}
            </TitleName>
            <TextLoop>
              I am a
              <TextSpan>
                <Typewriter options={typewriterOptions}></Typewriter>
              </TextSpan>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <HomeSocialMediaHorizantalDiv>
              <SocialMedia />
            </HomeSocialMediaHorizantalDiv>
          </HomeDescriptionContainer>
          <HomePictureContainer>
            <Blob></Blob>
          </HomePictureContainer>
        </HomeMainWrapper>
      </HomeMainContainer>
    </div>
  );
}

export default Home;
