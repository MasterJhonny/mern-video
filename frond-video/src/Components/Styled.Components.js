import styled from "styled-components";

const boderRadius = '15px';
const fontSize = '20px';


const Title = styled.h2`
    text-align: center;
`; 

const Entrada = styled.input`
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    padding: 4px 15px;
    margin-top: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: ${boderRadius};
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffff;
    font-size: ${fontSize};
`;

const Description = styled.textarea`
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 10px 15px;
    margin-top: 15px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: ${boderRadius};
    background-color: rgba(255, 255, 255, 0.1);
    color: #ffff;
    font-size: ${fontSize};
`;

const Button = styled.button`
    width: 100%;
    height: 40px;
    background-color: rgba(177,90,199,1);
    background: linear-gradient(90deg, rgba(177,90,199,1) 24%, rgba(209,88,153,1) 47%, rgba(226,108,140,1) 66%, rgba(243,163,152,1) 89%);
    color: #ffff;
    font-size: ${fontSize};
    font-weight: bold;
    border: 0;
    border-radius: ${boderRadius};
    cursor: pointer;
`;

const ErrorInput = styled.span`
    color: #E64848;
    font-size: 16px;
    padding: 7px;
`;

export { Title, Entrada, Description, Button, ErrorInput };