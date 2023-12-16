import styled from "styled-components";

export const Card = styled.div`
    background-color: #FCFCFC;
    box-shadow: 0rem .25rem .25rem rgba(0, 0, 0, 0.25);
    padding: 1rem;
    margin-bottom: 32px;
    border-radius: 16px;
`

export const Titulo = styled.h3`
    font-size: 18px;
    font-weight: bold;
    
    margin-bottom: 16px;
`
export const Tag = styled.span`
    padding: .25rem .5rem;
    font-size: 10px;
    font-weight: bold;
    color: #FFF;
    background-color: #E1A32A;
    border-radius: 8px;
    margin-right: 16px;
    display: inline-block;
`
export const Descricao = styled.textarea`
    color: #8B8B8B;
    font-size: .875rem;
    line-height: 24px;
    font-family: 'Roboto Mono', monospace;
    display: block;
    width: 100%;
    margin-bottom: 16px;
    margin-top: 16px;
    resize: none;
    border: none;
    background-color: transparent;
`
export const BarraAcoes = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    padding-top: 16px;
`
export const Botao = styled.button`
    font-weight: bold;
    font-size: .75rem;
    color: #FFF;
    padding: 8px 12px;
    border: none;
    cursor: pointer;
    background-color: #2F3640;
    border-radius: 8px;
    margin-right: 8px;
`