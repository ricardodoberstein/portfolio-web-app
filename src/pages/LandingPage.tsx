import React from 'react';
import styled from 'styled-components';
import { SKILL_GROUPS_STRUCTURE } from '../api/data';
import DeveloperOverview from '../components/DeveloperOverview';
import SkillGroupCard from '../components/SkillGroupCard';

function getTemplateColumns(): string {
  const width = window.innerWidth;

  if (width < 700) return "1fr";
  if (width < 1200) return "1fr 1fr";
  else return "1fr 1fr 1fr";
}

function getMaxColumns(): number {
  const width = window.innerWidth;

  if (width < 700) return 2;
  if (width < 1200) return 3;
  else return 4; 
}

const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: ${getTemplateColumns()};
  grid-template-rows: max-content;
  grid-gap: 16px;
  padding: 16px;
`

const HeaderContainer = styled.div`
  grid-column: 1 / ${getMaxColumns()};
  grid-row: 1;
`

type LandingPageProps = {

}

const LandingPage: React.FC<LandingPageProps> = (props) => {
  
  return (
    <Container>
      <HeaderContainer>
        <DeveloperOverview />
      </HeaderContainer>
      {SKILL_GROUPS_STRUCTURE.map((obj) => (
        <SkillGroupCard
          key={SKILL_GROUPS_STRUCTURE.indexOf(obj)}
          skillGroup={obj}
        />
      ))}
    </Container>
  )
}

export default LandingPage;
