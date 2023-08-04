import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`                                             
 _____             _            _____ _     
|   __|_ _ ___ ___|_|_ _ ___   |  _  |_|___ 
|__   | | | . |  _| | | | . |  |     | |   |
|_____|___|  _|_| |_|_  |___|  |__|__|_|_|_|
          |_|       |___|                   
 `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`                              
 _____             _         
|   __|_ _ ___ ___|_|_ _ ___ 
|__   | | | . |  _| | | | . |
|_____|___|  _|_| |_|_  |___|
          |_|       |___|    
             
          _____ _     
          |  _  |_|___ 
          |     | |   |
          |__|__|_|_|_|
                                
`}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to Ain's Terminal (v2.1.1).</div>
        <Seperator>....................</Seperator>
        <div>
          Type `<Cmd>help</Cmd>` for more information.
        </div>
        <Seperator>....................</Seperator>
      </div>
    </HeroContainer>
  );
};

export default Welcome;
