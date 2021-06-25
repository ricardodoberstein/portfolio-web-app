import React from 'react';
import styled from 'styled-components';
import AVATAR from '../assets/images/ricardo.png';

const Container = styled.div`
  padding: 16px;
  display: grid;
  grid-template-rows: auto auto auto;
  justify-content: center;
`

const DeveloperAvatar = styled.img`
  border-radius: 50%;
  max-height: 10vh;
  max-width: 10vh;
  justify-self: center;
`

const Greetings = styled.h2`
  justify-self: center;
`

const Description = styled.p`
  max-width: ${window.innerWidth > 1000 ? '50vw' : '90vw'};
  font-size: 1.1rem;
`

type DeveloperOverviewProps = {

}

const DeveloperOverview: React.FC<DeveloperOverviewProps> = (props) => {

  return (
    <Container>
      <DeveloperAvatar src={AVATAR} />
      <Greetings>Hi, I'm Ricardo Doberstein!</Greetings>
      <Description>
        A few years ago I decided to change my career path,
        I used to own a small business in Brazil. Due to my passion for technology since my early years
        I decided to give programming a try, since then I fell in love with it.
      </Description>
      <Description>
        My main interests are Backend and Systems development, I do however
        have a strong passion about Game Development, I had numerous personal projects using commercial
        engines and also trying to develop my own 2D engine from scratch for learning purposes.
        I also love writing small desktop applications using low level languages such as C++.
      </Description>
      <Description>
        I work as a Software Engineer for Innovativ, an outsource company,
        with whom I had the opportunity to work with many projects using different
        technologies and areas such as Frontend, Backend, Native Apps, Desktop Apps, and more.
      </Description>
    </Container>
  )
}

export default DeveloperOverview;
