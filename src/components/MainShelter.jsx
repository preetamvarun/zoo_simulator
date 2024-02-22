import ElephantShelter from "./ElephantShelter";
import GiraffeShelter from "./GiraffeShelter";
import MonkeyShelter from "./MonkeyShelter";

const MainShelter = () => {

    /*Intially Healths Of Monkeys, Giraffes & Elephants are at full */

    const health = [[100,100,100,100,100],[100,100,100,100,100],[100,100,100,100,100]];

    return (
        <>
            <ElephantShelter elephantsHealth = {health[0]}/>
            <MonkeyShelter monkeysHealth = {health[1]}/>
            <GiraffeShelter giraffesHealth = {health[2]}/>
        </>
    )
}

export default MainShelter;