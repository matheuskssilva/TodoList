import styled from "styled-components";

import { Props } from ".";

type PropsSemLegendaEContador = Omit<Props, 'legenda' | 'contador'> 



export const Card = styled.div<PropsSemLegendaEContador>`
    padding: 8px;
    border: 1px solid ${props => props.ativo ? '#1E90FF' : '#A1A1A1'} ;
    background-color: ${props => props.ativo ? '#FFF' : '#FCFCFC'};
    color: ${props => props.ativo ? '#1E90FF' : '#5E5E5E'};
    border-radius: 8px;
`

export const Contador = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    
    display: block;
`
export const Label = styled.span`
    font-size: .875rem;
    
`