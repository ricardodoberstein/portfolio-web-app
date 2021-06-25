import { Card, Icon, Intent, ProgressBar } from '@blueprintjs/core';
import React from 'react';
import styled from 'styled-components';

const Grid = styled.div`
  display: grid;
  width: 100%;

  grid-template-columns: max-content 4fr min-content;
  grid-gap: 8px;

  align-items: center;
  justify-content: center;

  span {
    text-align: end;
  }
`

type SkillGroupCardProps = {
  skillGroup: SkillGroup;
}

const SkillGroupCard: React.FC<SkillGroupCardProps> = (props) => {
  const { skillGroup } = props;

  function getIntent(value: number): Intent {
    if (value < 0.3) return Intent.DANGER;
    else if (value < 0.5) return Intent.WARNING;
    else if (value < 0.7) return Intent.PRIMARY;
    else return Intent.SUCCESS
  }

  return (
    <Card elevation={3} interactive={true}>
      <h2>{skillGroup.name}</h2>
      <Grid>
      {skillGroup.skills.map((skill) => (
        <>
          <span>{skill.name}</span>
          <ProgressBar
            className="bp3-no-stripes"
            value={skill.progress}
            intent={getIntent(skill.progress)}
          />
          <Icon intent={skill.leveling === true ? Intent.SUCCESS : Intent.WARNING} icon={skill.leveling === true ? "trending-up" : "trending-down"} />
        </>
      ))}
      </Grid>
    </Card>
  )
}

export default SkillGroupCard;
