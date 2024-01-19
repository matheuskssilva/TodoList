import { Link } from 'react-router-dom'
import styled from "styled-components";

export const Circulo = styled(Link)`
    display: block;
    height: 64px;
    width: 64px;
    background-color: #44BD32;
    color: #fff;
    position: fixed;
    right: 40px;
    bottom: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    text-decoration: none;
`