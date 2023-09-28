import Card from "./components/Card";
import './App.css'

const playerCard = {
  image: 'http://placekitten.com/120/100',
  stats: [{name: 'Cutness', value: 99},
  {name: 'speed', value: 555}
  
]
}         

export default function App(){
  return(
    <><h1>kissa peli</h1>
     <Card card={playerCard}/>
    </>
  );
}
