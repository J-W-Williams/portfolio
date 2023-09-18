import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from './Menu'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


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
      setLoading(false);
      setRandomWord(parsed);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });

}, []);
// end random word

  return (
    <>
      <Wrapper>
      <Menu currentPage="projects" />

      <MyHeader>
        Some things I've done
      </MyHeader>

      <ProjectsWrapper>
        {/* can datafiy these */}
        <ProjectHolder>
              <ImageHolder onClick={() => {window.open("https://github.com/J-W-Williams/music-branches", "_blank") }}
                src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694455285/pics/03_cfla9n.jpg"
                alt="Screenshot of Music Branches App"
              >

              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>Music Branches</BoldSpan>: final MERN project for the Concordia course.  It's a supercharged voice recorder, with cloud uploading, MongoDB integration, tags, organization of sheet music and as a stretch goal, transcription and charting modes.  The link goes to GitHub -- see the README for more info.  We had two weeks for this project. <MyLink to="https://vimeo.com/864569788" target="_blank">Here'a a video demonstration!</MyLink>
                </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
              <ImageHolder onClick={() => {window.open("https://github.com/J-W-Williams/portfolio", "_blank") }} 
                  src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694456176/pics/port_tsi8eo.jpg" 
                  alt="Screenshot of Portfolio">
              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>This Portfolio</BoldSpan>: this portfolio itself was one of our course projects at Concordia.  The link here leads to the GitHub repository. There's a detailed README there for more info on the project.  We had about four day for this. The portfolio is bilingual (French / English)                              
              </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
              <ImageHolder onClick={() => {window.open("https://wordel-flame.vercel.app", "_blank") }} 
                  src="/Wordel_gameplay.jpg" 
                  alt="Gameplay screenshot of the game Wordel">
              </ImageHolder>
              <ProjectDescription>
                <BoldSpan>Wordel</BoldSpan>: for this project, we were tasked with understanding collision detection.  I had the idea to turn Wordle into this.  We had about two days to work on this.  It's desktop-only: we were asked to use the arrow keys. It's made in vanilla JavaScript / CSS.
                {!loading ? <RandomWord> Speaking of words, here is a random one: <BoldSpan>{randomWord}</BoldSpan>.</RandomWord> : <></> }                              
              </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
              <CalcHolder onClick={() => {window.open("https://res.cloudinary.com/dejkvkjmf/image/upload/v1694460432/pics/calcExploded-PhotoRoom.png-PhotoRoom_d0obid.png", "_blank") }} 
                  src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694460432/pics/calcExploded-PhotoRoom.png-PhotoRoom_d0obid.png" 
                  alt="Screenshot of calculator app"
              >
              </CalcHolder>
              <ProjectDescription>
                <BoldSpan>Calculator</BoldSpan>: during the JavaScript section of the course, I challenged myself to make a working calculator using a vintage look and LCD display.  It came out pretty well!                          
              </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
              <ImageHolder onClick={() => {window.open("https://res.cloudinary.com/dejkvkjmf/image/upload/v1694456693/pics/qora_svscxk.jpg", "_blank") }} 
                  src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694456693/pics/qora_svscxk.jpg" 
                  alt="Screenshot of an e-commerce project">
              </ImageHolder>
              <ProjectDescription>
                <BoldSpan>Group e-commerce project</BoldSpan>: here we worked in teams of three people on the same code base, using GitHub, to create an e-commerce site featuring a cart, and order confirmation.  Using MongoDB for the backend, I was the fork manager for the project.  As a stretch goal we added sorting by product category tags.                              
              </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
        <ImageHolder onClick={() => {window.open("https://res.cloudinary.com/dejkvkjmf/image/upload/v1694456963/pics/sling_bnotx0.jpg", "_blank") }} 
                src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694456963/pics/sling_bnotx0.jpg"
                alt="SCreenshot of an airline booking project"
              >

              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>Group airline booking project</BoldSpan>: here we worked in teams of four to create an airline booking project using MongoDB on the back end.  As a stretch goal, we implemented updating your order / seat choice after a booking was complete.
                </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
        <ImageHolder onClick={() => {window.open("https://jweb.carrd.co/", "_blank") }} 
                src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694458892/pics/carrd.co_se5owb.jpg"
                alt="SCreenshot of a site made using carrd.co"
              >

              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>Low-code site</BoldSpan>: A portfolio I made using carrd.co, part of the wave of low/no-code design platforms also including Webflow.  The portfolio is bilingual (French / English).
                </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
        <ImageHolder onClick={() => {window.open("http://mikekammerer.com/", "_blank") }} 
                src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694459183/pics/mk_zza6xf.jpg"
                alt="SCreenshot of the website for sculptor Mike Kammerer"
              >

              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>Artist portfolio</BoldSpan>: A portfolio I made for Mike Kammerer, a sculptor based in British Columbia.  The site was handcoded using JavaScript. I included custom code which allows the artist to update the site himself.
                </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
        <ImageHolder onClick={() => {window.open("http://crl.recherche.usherbrooke.ca/", "_blank") }} 
                src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694459401/pics/crl_wks9qw.jpg"
                alt="SCreenshot of the website for CRL"
              >

              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>Communauté de recherche lexicale</BoldSpan>: The website for a pedagogical project by Constance Lavoie, Ph.D. Originally for the Université du Québec à Chicoutimi, I later facilitated the migration of this site to Université de Sherbrooke.
                </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
        <ImageHolder onClick={() => {window.open("https://deft-hamster-0ad592.netlify.app/", "_blank") }} 
                src="https://res.cloudinary.com/dejkvkjmf/image/upload/v1694460132/pics/tools_setkly.jpg"
                alt="SCreenshot of custom music notation tool"
              >

              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>Somnitab</BoldSpan>: A custom music transcription tool that I created for my own purposes.  It was made using JavaScript / jQuery.  Sheet music can be edited, saved & loaded as data, or saved as an image file. 
                </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
        <ImageHolder onClick={() => {window.open("/placeholder.jpg", "_blank") }} 
                src="/placeholder.jpg"
                alt="SCreenshot of custom music notation tool"
              >

              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>Bluewave Audio</BoldSpan>: I served as webmaster for Bluewave Audio, a Montreal-based tech startup in the hifi audio space.  I inherited an existing WordPress site and was responsible for its maintenance.  I spearheaded and implemented the complete translation (content and interface) from English to French using WPML.
                </ProjectDescription>
        </ProjectHolder>
        <ProjectHolder>
        <ImageHolder onClick={() => {window.open("/placeholder.jpg", "_blank") }} 
                src="/placeholder.jpg"
                alt="SCreenshot of the Bluewave Audio website"
              >

              </ImageHolder>
              <ProjectDescription>
              <BoldSpan>Journal de Montréal</BoldSpan>: I was a Web Integrator for the Journal de Montréal website for several years. We used JavaScript / jQuery and a custom CMS. Part of my responsiblity was to create tools to speed up our publication process.
                </ProjectDescription>
        </ProjectHolder>

        <ProjectHolder>
              <ImageHolder
                src="/placeholder.jpg"
                alt="Placeholder image for projects to come"
              >

              </ImageHolder>
              <ProjectDescription>
                 Coming soon!
                </ProjectDescription>
        </ProjectHolder>

        </ProjectsWrapper>  
      </Wrapper>

      
    </>
  )
}

const MyLink = styled(Link)`
  text-decoration: none;
  font-weight: bold;
  color: white;
`

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

const CalcHolder = styled.img`
  width: 110px;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  border: 1px solid white;
 
  &:hover {
    scale: 1.05;
  }
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
  font-size: 9vw;
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
   
  background-color: #1f1f1f;

  height: 100vh; 
`


export default Projects;
