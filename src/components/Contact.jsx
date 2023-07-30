import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { styled } from 'styled-components'
import Menu from './Menu'

const Contact = () => {

  // use props for something here

  const inputFields = [
    { name: 'fname', label: 'First Name' },
    { name: 'lname', label: 'Last Name' },
    { name: 'phone', label: 'Phone' },
    { name: 'address', label: 'Address' },
    { name: 'email', label: 'Email' },
  ];

  const handleSubmit = () => {

    // database connection coming soon...

  }

  const handleChange = (event) => {
    // const { name, value } = event.target;
    // // setOrder((prevData) => ({
    //    setMenuItem((prevData) => ({

    //   ...prevData,
    //   [name]: value,
    // }));
  };

  return (
    <>
  <Wrapper>
    <Menu currentPage="contact" />



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

    </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
    /* background-image: url("./src/assets/bg2.jpg"); */
  background-color: #1f1f1f;
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
  color: white;
  font-size: 18px;
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


export default Contact
