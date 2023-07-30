import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'

const Projets = () => {

  const navigate = useNavigate();
  // use props for something here

  return (
    <>
    <Wrapper>
    <Menu currentPage="projects" />

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
              Pour ce projet, notre tâche était de mieux comprendre la détection de collision.  J'avais l'idée de transformer Wordle un peu.. C'est fait in JavaScript Vanille + CSS.
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
      </ProjectsWrapper>  
    </Wrapper>

    
  </>
  )
}

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
