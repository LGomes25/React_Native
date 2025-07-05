import { styled } from "styled-components/native";

export const Container = styled.View`
    
    justify-content: center;
    align-items: center;
    background-color: gray;
`;

export const Title = styled.Text`
    font-size: ${(props) => props.tamanho};
    color: ${(props) => props.cor};
`;