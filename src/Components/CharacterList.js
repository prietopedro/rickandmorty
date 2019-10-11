import React,{useState,useEffect} from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from 'styled-components'


const CharacterList = () =>{
    const ListWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    `


    const [data , setData] = useState([])
    useEffect(()=>{
        axios.get("https://rickandmortyapi.com/api/character/")
        .then(response=>{
            setData(response.data.results);

        },5000)
        .catch(error=>{
            console.log("SORRY")
        })
    },[]);
    return(
        <ListWrapper>
            <h1>RICK & MORTY</h1>
            <ListWrapper>
                {data.map((char,index)=>{
                    return (<CharacterCard key={index} char={char}/>)
                })}
            </ListWrapper>
        </ListWrapper>
    )
}

export default CharacterList;