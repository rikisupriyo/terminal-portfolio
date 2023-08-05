import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "High School, Graduation",
    desc: "Hindmotor High School | 2008 ~ 2020",
  },
  {
    title: "Computer Science Engineering, B.Tech",
    desc: "Academy of Technology | 2020 ~ 2025",
  },
  // {
  //   title: "IELTS 6.5",
  //   desc: "British Council Myanmar | 2017",
  // },
];

export default Education;
