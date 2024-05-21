import styled from "styled-components"


const Startgame = ({toggle}) => {
    return(
    <MainContent className="main_content">
        
        <img src="./images/dices.png" alt="" />
      
        <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
        </div>
    </MainContent>
   
            

    )
}

export default Startgame

const Button = styled.button`

background-color:black;
display: flex;
justify-content: center;
color: white;
border-radius: 5px;
padding:10px 18px;
min-width: 220px;
border:none;
font-size:16px;
cursor: pointer;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.3s background ease-in;
}



`;

const MainContent = styled.div`
  display: flex;
  max-width: 1182px;
  align-items: center;
  height:100vh;
  margin: 0 auto;

  .content {
   
    display: flex;
    flex-direction: column;
    align-items: flex-end; /* Align items to the start */
  }
  .content h1 {
    font-size: 96px;
  }
`;
