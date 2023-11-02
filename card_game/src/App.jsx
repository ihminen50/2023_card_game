import Card from "./components/Card";
import './App.css'
import { useState } from 'react'

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min +1)+min)

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name: 'Cutness', value: getRandomInt(1, 9999)},
  {name: 'speed', value: 50}
  
]
}      

const opponentCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name: 'Cutness', value: 66},
  {name: 'speed', value: 234}
  
]
}  
const createCard = index =>({
  image: 'http://placekitten.com/120/100?image=' + index,
  stats: [{name: 'Cutness', value: getRandomInt(1, 9999)},
  {name: 'Speed', value: getRandomInt(1, 9999)},
  {name: 'Weight', value: getRandomInt(1, 9999)}],
  id:crypto.randomUUID
});
  
  const deck = Array(16).fill(null).map((_,index) => createCard(index));
  const half = Math.ceil(deck.length / 2);
  const dealCards =()=>{
  return{
    player: deck.slice(0,half),
    opponent: deck.slice(half)
  };
};

export default function App(){
const[result,setResult]=useState('');
const [cards, setCards] = useState(dealCards);

function compareCards(){
  const playerStat = cards.player[0].stats[0];
  const opponentStat = cards.opponent[0].stats[0];


if(playerStat.value === opponentStat.value){
  setResult("Draw");
}
  else if(playerStat.value > opponentStat.value){
    setResult("Win");
  }else{
    setResult("Loss");
  }
  console.log(result);
}

  return(
    <><h1>kissa peli</h1>
     <div className= 'game'> 
     <Card card={cards.player[0]}/>
     <div className='center-area'>
      <p>{result || 'Press the button'}</p>
     <button onClick={compareCards} type="button">Play</button>
     </div>
     <Card card={cards.opponents[0]}/>

     {console.log(dealCards())}
     </div>
    </>
  );
}
