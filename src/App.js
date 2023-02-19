import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Frace from "./components/Frace";

// componente de styles
// npm install @emotion/core @emotionstyled

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(
    top left,
    #007d35 0%,
    #007d35 40%,
    #0f574e 100%
  );
  background-size: 300px;
  font-size: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover{
    cursor: pointer;
    background-size: 400px;
  }
`;

function App() {

  // estado de la frace 
  const [frace, guardarFrace] = useState({});


  const consularAPI = async () => {
    const api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes");
    const frace = await api.json();
    //console.log(frace[0]);
    guardarFrace(frace[0])
  };

  // cargar una frace
  useEffect(()=>{
    consularAPI()
  },[]);



  return (
    <Contenedor>
      <Frace frace={frace} />
      <Boton onClick={consularAPI}>Obtener Frace</Boton>
    </Contenedor>
  );
}

export default App;
