import ElephantShelter from "./ElephantShelter";
import GiraffeShelter from "./GiraffeShelter";
import MonkeyShelter from "./MonkeyShelter";

const MainShelter = () => {

    /*Intially Healths Of Monkeys, Giraffes & Elephants are at full */

    const health = [[100,100,100,100,100],[100,100,100,100,100],[100,100,100,100,100]];

    return (
        <>
            <MonkeyShelter monkeysHealth = {health[0]}/>
            <GiraffeShelter giraffesHealth = {health[1]}/>
            <ElephantShelter elephantsHealth = {health[2]}/>
        </>
    )
}

export default MainShelter;