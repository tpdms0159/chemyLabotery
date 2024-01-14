import styled from "styled-components"


const Mainview = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 844px;
    text-align: center;
    font-family: 'GmarketSansMedium';
`;

const Biglogo = styled.img`
    width: 80%;
    heigth: 30%;
    margin-bottom: 20px;

    
    max-width: 310px;
    max-height: 339px;
`
const Middlelog = styled.img`
    width: 45%;
    height: 20%;
    margin-bottom: 20px;


    max-width: 175px;
    max-height: 200px;
`

const Minilogo = styled.img`
    width: 35%;
    height: 20%;
    margin-bottom: 20px;


    max-width: 140px;
    max-height: 155px;
`

export default Mainview;
export {Biglogo, Middlelog, Minilogo};