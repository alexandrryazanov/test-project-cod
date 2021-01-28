import styled from "@emotion/styled";

export const FormWrapper = styled.div`
    font-family: sans-serif;
    width: 500px;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    box-shadow: 10px 10px 15px lightgray;
    border-radius: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    padding-bottom: 20px;
`;

export const Header = styled.div`
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(245, 245, 245);
    color: rgb(180, 180, 180);
    font-size: 36px;
    font-weight: 500;
    margin-bottom: 30px;
`;

export const Field = styled.input`
    width: 80%;
    height: 4rem;
    margin-bottom: 40px;
    padding: 0 20px;
    font-size: 1.2rem;
    border-radius: 5px;
    border: 2px solid lightgray;
    &::placeholder {
        color: lightgray;
        font-weight: 600;
    }

    &:focus {
        border-color: rgb(180, 180, 240);
    }

    border-color: ${({ error }) => (error ? "red" : "lightgray")};
    border-bottom-width: ${({ error }) => (error ? "2px" : "4px")};
`;

export const Error = styled.pre`
    color: red;
    font-size: 1.2rem;
    margin: 0;
`;

export const Button = styled.button`
    width: 80%;
    height: 4.5rem;
    outline: none;
    color: white;
    background-color: rgb(240, 120, 120);
    font-size: 2rem;
    border: 3px solid red;
    border-bottom: 6px solid rgb(220, 0, 0);
    border-radius: 8px;
    font-weight: 600;
    text-shadow: 1px 1px 2px rgb(120, 0, 0);
    margin: 20px;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
    &:active {
        transform: translate(2px, 2px);
    }
`;
