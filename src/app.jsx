import KartOlustur from "./kart";
import toursArray from "./tours";

function App(){
return(
    <div>
        {toursArray.map((cardData)=>(
            <KartOlustur cardData={cardData}/>
        ))}
    </div>
)
}

export default App;