import styled from "styled-components";

export const FormStyled = styled.div`
    form {
    display: flex;
    flex-direction: column;

    input[type="text"] {
        padding: 8px; /* Adicionar um preenchimento para espaçamento interno */
        font-size: 16px; /* Tamanho de fonte personalizado */
        border: 1px solid #ccc;
        border-radius: 6px;
    }

    input[type="submit"] {
        margin-top: 8px; /* Adicionar margem superior para separar o botão */
        background-color: #0074d9;
        color: #fff;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        font-size: 16px;
    }
}
`;