import styled from 'astroturf'
import React from "react";
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
    () => import('../components/header'),
    { ssr: true }
)

const IndexPage = ({cats}) => {
  return <Container>
    <h1>SSR PAGE</h1>
    <DynamicComponent/>
    <CatImage src={cats[0].url}/>
    <DexLogo src={"/logo-white.svg"}/>
  </Container>
}

export async function getServerSideProps() {
  const result = await fetch("https://api.thecatapi.com/v1/images/search",
      {method:"GET", mode:"no-cors", headers:{"Content-Type":"application/json"}})
      .then(res => res.json());
  return {
    props: { cats: result }
  }
}

//getStaticProps

export default IndexPage

const Container = styled.div`
flex-flow:column;
display: flex;
width: 100%;
height:100vh;
`

const DexLogo = styled.img`
width: 256px;
height: 256px;
margin:auto;
background: black;
`

const CatImage = styled.img`
width: 256px;
height: 256px;
margin:auto;

`