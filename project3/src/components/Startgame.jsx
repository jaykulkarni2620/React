import styled from "styled-components"


const Startgame = () => {
    return(
    <MainContent className="main_content">
        
        <img src="./images/dices.png" alt="" />
      
        <div className="content">
        <h1>DICE GAME</h1>
        <Button>Play Now</Button>
        </div>
    </MainContent>
   
            

    )
}

export default Startgame

const Button = styled.button`

background-color:black;
color: white;
border-radius: 5px;
padding:10px 18px;
min-width: 220px;
border:none;
font-size:16px;
cursor: pointer;

`;

const MainContent = styled.div`
  display: flex;
  max-width: 1182px;
  align-items: center;
  height:100vh;
  margin: 0 auto;


  .content h1 {
    font-size: 96px;
  }
`;
