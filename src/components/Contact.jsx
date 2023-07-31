import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from './Menu'

const Contact = () => {

  // use props for something here

  const inputFields = [
    { name: 'name', label: 'Name ' },
    { name: 'email', label: 'Email ' },
    { name: 'message', label: 'Say hi! '}
  ];

  const handleSubmit = () => {
    // database connection coming soon...
  }

  const handleChange = (event) => {
    // do stuff
  };

  return (
    <>
  <Wrapper>
    <Menu currentPage="contact" />
    <MyHeader>
      Drop me a line!
    </MyHeader>
    <MainContent>
    Drop me a line by filling out the form below!  I will get back to you near-instantaneously!  
    </MainContent>
 

    <FormWrapper>
    <form onSubmit={handleSubmit} >
        <ul>
          
        {inputFields.map((field) => (
          <InputRow key={field.name}>
            <label htmlFor={field.name}>{field.label}: </label>
            <input
              // disabled={!formActive}
              type="text"
              id={field.name}
              name={field.name}
              // value={inputItem[field.name]}
              onChange={handleChange}
            />
          </InputRow>
       
        ))}

        </ul>  

    </form>
    <SubmitButton type="submit">Submit form</SubmitButton>
    </FormWrapper>
 
    <IconWrapper>
      <ImgWrapper src="/email.png"></ImgWrapper>
      <ImgWrapper src="/linkedIn.png"></ImgWrapper>
      <ImgWrapper src="/github.png"></ImgWrapper>
    </IconWrapper>
    </Wrapper>
    </>
  )
}

const SubmitButton = styled.button`
  padding-top: 10px;
  padding-bottom: 10px;
  margin-top: 10px;
  width: 320px;
  margin-bottom: 10px;
  border: none;
  background-color: grey;
  color: white;
  font-family: "Raleway";
  &:hover {
    background-color: darkgrey;
  }
`

const FormWrapper = styled.div`
  
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
`

const Wrapper = styled.div`
    /* background-image: url("./src/assets/bg2.jpg"); */
  background-color: #1f1f1f;

  height: 100vh; 

`
const InputRow = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  width: 340px;
  font-family: "Raleway";
  font-weight: 200;
`
const MyHeader = styled.div`
  font-family: "Raleway";
  font-weight: 400;
  color: White;
  font-size: 9vw;
  padding: 10px;
`

const MainContent = styled.p`
font-family: "Raleway";
font-weight: 300;
color: white;
font-size: 12px;
padding: 20px;
line-height: 20px;
`
const ImgWrapper = styled.img`
  width: 50px;
  &:hover {
    scale: 1.15;
  }
  margin-left: 40px;
  margin-right: 30px;
  cursor: pointer;
`
const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  
  `

export default Contact
