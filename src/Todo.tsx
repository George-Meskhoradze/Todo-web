import styled, { createGlobalStyle } from "styled-components"
import React from "react";
import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri"
import { TbSquarePlus } from "react-icons/tb"


const Todo = () => {

  const [saver, setSaver] = useState<string[]>([])

  const [inputvalue, setInputValue] = useState<string>("")

  const HandlerSaved = () => {

    if (inputvalue === "") {

      return
      
    } else {

      setSaver([...saver, inputvalue])
      
      setInputValue("")
    }
  }




  const handleDelete = (index: number, count: number) => {

    const reverseindex = saver.length - 1 - index

    setSaver((prevSaver) => {
      const newSaver = [...prevSaver];
      newSaver.splice(reverseindex, count);
      return newSaver;
    });
  };

  return (
    <div>
      <GlobalStyle />
      <BodySize>

        <BoxContainer>

          <InpContainer>

            <Input type="text" value={inputvalue} placeholder="Add Some Text" onChange={(e) => setInputValue(e.target.value)}/>

            <Btn onClick={HandlerSaved}>
              <BtnText>
                <TbSquarePlus />
              </BtnText>
            </Btn>
                       
          </InpContainer>


          <SavedInp>

          {saver.slice().reverse().map((value, index) => (

              <React.Fragment key={index}>
                
                <SavedContainer>

                  <Saved>{value}</Saved>

                  <Del onClick={() => handleDelete(index, 1)}> 
                    <RiDeleteBin6Fill />
                  </Del>

                </SavedContainer>

            </React.Fragment>

          ))}

          </SavedInp>

        </BoxContainer>

      </BodySize>
    </div>
  )
}

export default Todo

const GlobalStyle = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
  
  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }
  
  body {
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
`

const BodySize = styled.div`

  width: 100%;
  height: 100vh;
  background-image: linear-gradient(100deg, #575656, #062e3f);
  display: flex;  
  justify-content: center;
  align-items: center;
`

const BoxContainer = styled.div`
  
  width: 550px;
  height: 461px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media (max-width: 800px) {
    width: 320px;
    height: 380px;
    gap: 10px;
  }
`

const InpContainer = styled.div`

  width: 100%;
  height: 40px;
  border-radius: 10px;
  display: flex;

  @media (max-width: 800px) {
    height: 30px;
  }
` 

const Input = styled.input `

  width: 85%;
  height: 40px;
  outline: none;
  border: none;
  border-radius: 3px 0px 0px 3px;
  padding: 0px 20px;
  font-weight: 400;
  font-size: 1.1rem;
  background: white;

  @media (max-width: 800px) {
    font-size: 0.9rem;
    height: 30px;
  }
`

const BtnText = styled.h1`
  
  width: 100%;
  height: 21px;
  font-weight: 400;
  font-size: 1.3rem;
  text-align: center;
  color: white;
  user-select: none;

  @media (max-width: 800px) {
    font-size: 1rem;
  }
`

const Btn = styled.div`
  
  width: 15%;
  height: 40px;
  background: #c97900;
  border-radius: 0px 3px 3px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {

    background: #865801;
  }

  @media (max-width: 800px) {
    height: 30px;
  }
`

const SavedInp =styled.div`
  
  width: 100%;
  height: 480px;
  display: block;
  overflow: hidden;

  @media (max-width: 800px) {
    height: 280px;
  }
`

const SavedContainer = styled.div`
  
  width: 100%;
  height: 40px;
  display: flex;
  margin-top: 10px;
  border-radius: 3px;

  @media (max-width: 800px) {
    height: 30px;
  }
`

const Saved = styled.div`

  width: 85%;
  height: 40px;
  border-radius: 3px 0px 0px 3px;
  padding: 10px 20px;
  background: white;
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 1px;

  @media (max-width: 800px) {
    font-size: 0.9rem;
    padding: 5px 20px;
    height: 30px;
  }
`

const Del = styled.div`
  width: 15%;
  height: 40px;
  border-radius: 0px 3px 3px 0px;
  background: #ff0202;
  font-size: 1.3rem;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 1rem;
    height: 30px;
  }
`