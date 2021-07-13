import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there, I'm Gobinath <br />
          Front End Developer and Fresher
        </SectionTitle>
        <SectionText>
        I'm a 23-year-old self-taught developer. <br />
        Gather my experiences by creating a memorable products that are not only enjoyable to use but are written in code thats's maintainable and easy to inderstand.
        </SectionText>
        <Button onClick={() => window.location = `https://drive.google.com/file/d/1XwwRQQFYY7juMaiyW0g2Tm0LPtTC-Us1/view`}>Download CV</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
