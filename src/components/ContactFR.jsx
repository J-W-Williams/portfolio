import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from './Menu'

const ContactFR = () => {


  const inputFields = [
    { name: 'nom', label: 'Nom ' },
    { name: 'courriel', label: 'Courriel ' },
    { name: 'message', label: 'Me dire allô! '}
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
    <Menu currentPage="contactFR" />
    <MyHeader>
      Me dire âllo!
    </MyHeader>
    <MainContent>
    Me dire âllo en remplissant le formulaire en bas!  Je vais vous revenir tout de suite!  

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
    </FormWrapper>
    </Wrapper>
    </>
  )
}

const FormWrapper = styled.div`
  
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 100px;
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
  font-size: 80px;
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
`

const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;
  align-items: center;
`

export default ContactFR
