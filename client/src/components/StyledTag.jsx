import styled from "styled-components"


const Mainview = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    min-height: 844px;
    text-align: center;
    font-family: 'GmarketSansMedium';
`

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

const Bigicons = styled.img`
    width: 80%;
    height: 30%;

    max-width: 300px;
    max-heigth: 300px;
`
const Middleicons = styled.img`
    width: 100%;
    height: 100%;
    margin-left: -3%;

    max-width: 200px;
    max-height: 400px;
`

// const Form = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
// `

const Button = styled.button`
    width: 75%;
    height: 60px;

    margin: 10px;
    border: none;
    border-radius: 50px;
    background-color: #FF6CD9;
    color: white;
    text-align: center;
    font-size: 20px;
    font-family: 'GmarketSansMedium';

    max-width: 272px;
    max-height: 60px;
`
const Titlebox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    margin-top: 50px;

    width: 100%;
`
const Title = styled.h1`
    width: 80%;
    
    background-color: rgba(255, 255, 255, 0.40);
    border-radius: 100px;
    font-family: TTTtangsbudaejjigaeB;
    font-size: 36px;
    padding: 35px;
    color: black;

    max-width: 300px;
    max-height: 90px;
`
const Middletitle = styled.h2`
    width: 70%;
    background-color: rgba(255, 255, 255, 0.40);
    border-radius: 100px;
    font-family: GmarketSansMedium;
    font-size: 20px;
    padding: 20px;
    color: black;

    max-width: 270px;
    
`
const Minititle = styled.h2`
    width: 90%;

    background-color: rgba(255, 255, 255, 0.40);
    border-radius: 100px;
    font-family: GmarketSansMedium;
    font-size: 16px;
    padding: 25px;
    color: grey;

    max-width: 300px;
`
const Smalltext = styled.p`
    font-size: 16px;
    color: grey;
    font-family: 'GmarketSansMedium';
    margin: 3% 3%;
`
const Whiteback = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1%;

    background-color: white;
    border-radius: 50px;
    width: 80%;
    max-width: 280px;
`
const Linebox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 8px;

    margin: 10px;
    max-height: 100px;
    max-width: 300px;
    font-size: 16px;
`
const Subtext = styled.div`
    margin: 5% 0%;

    max-width: 500px;
    max-heigth: 100px;
`
const Balancebox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    

    width: 100%;
    height: 80%;

    max-width: 400px;
    min-height: 500px;
`
const Balancebutton = styled.button`

`
const Btnbox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    width: 100%;
`
const Rowbtnbox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
`
const Keywordbtn = styled.button`
    width: 80%;
    height: 8vh;
    text-align: center;
    margin: 2%;

    color: white;
    font-size: 17px;
    font-family: 'GmarketSansMedium';
    border-radius: 50px;
    border: none;

        
    max-width: 100px;
    max-height: 60px;
`

export default Mainview;
export {Biglogo, Middlelog, Minilogo, Button, Smalltext, 
    Whiteback, Linebox, Subtext, Bigicons, Middleicons,
    Title, Middletitle, Minititle, Titlebox,
    Balancebox,Btnbox, Rowbtnbox, Keywordbtn};