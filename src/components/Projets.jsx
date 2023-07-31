import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

const Projets = () => {

  const navigate = useNavigate();
  // use props for something here

  // get random word en français
  const [loading, setLoading] = useState(true); 
  const [randomWord, setRandomWord] = useState("");

  useEffect(() => {
    fetch('https://trouve-mot.fr/api/random')
    .then((response) => response.json())
    .then((parsed) => {
      console.log("mot:", parsed[0].name)
      setLoading(false);
      setRandomWord(parsed[0].name);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
     // setLoading(false);
    });

}, []);
// end random word

  return (
    <>
    <Wrapper>
    <Menu currentPage="projets" />

    <MyHeader>
      Choses que j'ai fait et que je vais faire
    </MyHeader>

    <ProjectsWrapper>
      {/* can datafiy these */}
  
      <ProjectHolder>
            <ImageHolder onClick={() => {window.open("https://wordel-flame.vercel.app", "_blank") }} 
                src="/Wordel_gameplay.jpg" 
                alt="Prise d'écran du jeu Wordel">
            </ImageHolder>
            <ProjectDescription>
              Pour ce projet, notre tâche était de mieux comprendre la détection de collision.  J'avais l'idée de transformer Wordle un peu.. C'est fait in JavaScript Vanille + CSS. {!loading ? <RandomWord> En parlant des mots, voici un mot aléatoire: <BoldSpan>{randomWord}</BoldSpan>.</RandomWord> : <></> }
            </ProjectDescription>
      </ProjectHolder>
      <ProjectHolder>
            <ImageHolder
              src="/placeholder.jpg"
              alt="Image substititive pour des projet à venir"
            >

            </ImageHolder>
            <ProjectDescription>
                La prochaine chose incroyable va apparaîte ici.  Veuillez attendre patiemment et n'oubliez pas de rafraîchir la page souvent.  Bientôt...
              </ProjectDescription>
      </ProjectHolder>
      <ProjectHolder>
            <ImageHolder
              src="/placeholder.jpg"
              alt="Image substititive pour des projet à venir"
            >

            </ImageHolder>
            <ProjectDescription>
               Même chose ici.. À venir!
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

export default Projets;
