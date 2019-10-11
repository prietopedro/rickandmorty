import React from 'react';
import styled from "styled-components"

const CharacterCard = props =>{

    const CardWrapper = styled.div`
    margin-bottom: 2rem;
    `

    const ContainerHey = styled.div`
        width: 34%;
    `

    const Image = styled.img`
    border: 2px #333 solid;
    padding: 1rem;
    background: #333;

    `

    return (
        <ContainerHey>
            <h2>{props.char.name}</h2>
        <CardWrapper>
            <Image src={props.char.image} alt="A Rick And Morty Character"/>
        </CardWrapper>
        </ContainerHey>
    )
}
export default CharacterCard;