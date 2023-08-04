import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Supriyo Ain</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>an Aspiring Data Scientist</HighlightAlt> based in West Bengal,
        India.
      </p>
      <p>
        I love solving problems and <br />
        developing intelligent applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
