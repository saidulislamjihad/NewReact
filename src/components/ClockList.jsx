import SecondClock from './ClassBase';
import ClassBase from './ClassBase'

export default function ClockList({quantities = []}){
    return(
        <div>
            {quantities.map(()=>(
                <SecondClock key={Math.random()}/>
            ))}
        </div>
    );
}