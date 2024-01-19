import styled, { createGlobalStyle } from "styled-components";
import { Botao } from "../Components/Tarefa/styles";
import variaveis from "./variaveis";

const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        list-style: none;
    }
`

export const Container = styled.div`
    display: grid;
    grid-template-columns: 224px auto;
`

export const MainContainer = styled.main`
    padding: 0 40px;
    height: 100vh;
    overflow-y: scroll;
`

export const Titulo = styled.h2`
    display: block;
    margin-top: 40px;
    margin-bottom: 40px;
    font-weight: bold;
    font-size: 1.125rem;
`

export const Campo = styled.input`
    padding: 8px;
    background-color: #FFF;
    border-radius: 8px;
    font-weight: bold;
    color: #666666;
    border-color: #666666;
    outline: none;
    width: 100%;
`

export const BotaoSalvar = styled(Botao)`
    background-color: ${variaveis.verde};
`

export default EstiloGlobal