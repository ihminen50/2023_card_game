import Card from "./components/Card";
import './App.css'

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name: 'Cutness', value: 99},
  {name: 'speed', value: 555}
  
]
}      

const opponentCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name: 'Cutness', value: 66},
  {name: 'speed', value: 234}
  
]
}  

export default function App(){

function compareCards(){
  console.log("button clicked!");
}

  return(
    <><h1>kissa peli</h1>
     <div className= 'game'> 
     <Card card={playerCard}/>
     <button onClick={compareCards} type="button">Play</button>
     <Card card={opponentCard}/>
     </div>
    </>
  );
}
