import { Card } from '@blueprintjs/core';
import React from 'react';
import styled from 'styled-components';
import { PROJECTS_STRUCTURE } from '../api/data';

const Container = styled.div`
  margin-top: 8vh;
  width: 100%;

  display: grid;
  grid-template-columns: ${window.innerWidth > 1200 ? `25% 25%` : `70%`};
  grid-gap: 1rem;
  justify-content: center;
`

const Logo = styled.img`
  max-width: 9vh;
  max-height: 9vh;
  border-radius: 1px;

  margin-right: 8px;
  margin-top: 4px;

  display: inline-block;
  float: left;
`

const Text = styled.p`
  font-size: 1rem;
`

type ProjectsPageProps = {

}

const ProjectsPage: React.FC<ProjectsPageProps> = (props) => {
  return (
    <Container>
      {PROJECTS_STRUCTURE.map((project) => (
        <Card style={{ display: 'block' }} elevation={3}>
          <h2>{project.title}</h2>
          <Logo src={project.logo} />
          <Text>{project.overview}</Text>
          <Text><b>Company: </b>
          {project.company !== 'NDA' ? (
            <a target="_blank" href={project.companyUrl}>{project.company}</a>
          ) : (
            'NDA'
          )}
          </Text>
          <Text><b>Platforms: </b>
            {project.platforms.map(el => (project.platforms.indexOf(el) !== project.platforms.length - 1 ? `${el}, ` : `${el}`))}
          </Text>
          <Text><b>Github: </b>{project.github}</Text>
          <Text><b>Technologies: </b>
            {project.technologies.map(el => (project.technologies.indexOf(el) !== project.technologies.length - 1 ? `${el}, ` : `${el}`))}
          </Text>
          <Text><b>My Role: </b>{project.role}</Text>
        </Card>
      ))}
    </Container>
  )
}

export default ProjectsPage;
