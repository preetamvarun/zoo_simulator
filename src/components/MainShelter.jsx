import ElephantShelter from "./ElephantShelter";
import GiraffeShelter from "./GiraffeShelter";
import MonkeyShelter from "./MonkeyShelter";
import { useEffect, useState } from "react";

const MainShelter = () => {

    /* Intially Healths Of Monkeys, Giraffes & Elephants are at 100% */
    const [health, setHealth] = useState([[100,100,100,100,100],[100,100,100,100,100],[100,100,100,100,100]]);

    const updateHealthRandomly = () => {
        const updatedHealth = health.map((animalHealths) => {
            return animalHealths.map((health) => {
                const randomPercentage = Math.random() * 20;
                const reducedHealth = Math.max(0, health - (health * randomPercentage)/100);
                return parseFloat(reducedHealth.toFixed(2));
            })
        })
        setHealth(updatedHealth);
    }

    useEffect(() => {

        const intervalId = setInterval(() => {
            updateHealthRandomly()
        }, 7000)

        return () => clearInterval(intervalId)

    }, [health])

    return (
        <>
            <ElephantShelter elephantsHealth = {health[0]}/>
            <MonkeyShelter monkeysHealth = {health[1]}/>
            <GiraffeShelter giraffesHealth = {health[2]}/>
        </>
    )
}

export default MainShelter;