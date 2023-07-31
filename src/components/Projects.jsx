import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'


const Projects = () => {

  const navigate = useNavigate();
  // use props for something here

  // get random word 
  const [loading, setLoading] = useState(true); 
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word')
    .then((response) => response.json())
    .then((parsed) => {
      console.log("random word:", parsed)
      setLoading(false);
      setRandomWord(parsed);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
      //setLoading(false);
    });

}, []);
// end random word

  return (
    <>
      <Wrapper>
      <Menu currentPage="projects" />

      <MyHeader>
        Things I've done and will do
      </MyHeader>

      <ProjectsWrapper>
        {/* can datafiy these */}
    
        <ProjectHolder>
              <ImageHolder onClick={() => {window.open("https://wordel-flame.vercel.app", "_blank") }} 
                  src="/Wordel_gameplay.jpg" 
                  alt="Gameplay screenshot of the game Wordel">
              </ImageHolder>
              <ProjectDescription>
                For this project, we were tasked with understanding collision detection (desktop only).  I had the idea to turn Wordle into this.  Made in vanilla JavaScript / CSS. 
                {!loading ? <RandomWord> Speaking of words, here is a random one: <BoldSpan>{randomWord}</BoldSpan>.</RandomWord> : <></> }
                
                
                
              </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
              <ImageHolder
                src="/placeholder.jpg"
                alt="Placeholder image for projects to come"
              >

              </ImageHolder>
              <ProjectDescription>
                  The next incredible thing will appear here.  Please wait patiently and don't forget to refresh often.  Your patience will surely be rewarded... soon
                </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
              <ImageHolder
                src="/placeholder.jpg"
                alt="Placeholder image for projects to come"
              >

              </ImageHolder>
              <ProjectDescription>
                  Same here.  Coming soon!
                </ProjectDescription>
        </ProjectHolder>
        </ProjectsWrapper>  
      </Wrapper>

      
    </>
  )
}

const RandomWord = styled.span`
  font-family: "Raleway";
  font-size: 12px;
`

const BoldSpan = styled.span`
  font-weight: bold;
`

const ProjectDescription = styled.div`
  
  font-family:"Raleway";
  font-size: 12px;
  padding-top: 15px;
  line-height: 20px;
  padding-left: 17px;
`

const ProjectsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: left;
  justify-content: left; 
`

const ProjectHolder = styled.div`
  width: 300px;
  transition: transform 250ms;
  margin-right: 15px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: left;
  padding-left: 15px;
`

const ImageHolder = styled.img`
  width: 300px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  border: 1px solid white;
 
  &:hover {
    scale: 1.05;
  }
`

const MyHeader = styled.div`
  font-family: "Raleway";
  font-weight: 240;
  color: White;
  font-size: 80px;
  padding: 20px;
`
const MainContent = styled.p`
font-family: "Raleway";
font-weight: 300;
color: white;
font-size: 12px;
padding: 20px;
line-height: 20px;
`

const Wrapper = styled.div`
    /* background-image: url("./src/assets/bg2.jpg"); */
  background-color: #1f1f1f;

  height: 100vh; 
`


export default Projects;
