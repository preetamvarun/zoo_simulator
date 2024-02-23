import ElephantShelter from "./ElephantShelter";
import GiraffeShelter from "./GiraffeShelter";
import MonkeyShelter from "./MonkeyShelter";
import { useEffect } from "react";

import {useDispatch, useSelector} from 'react-redux';

import { updateAnimalsHealth } from "../utils/animalsHealthSlice";

const MainShelter = () => {

    // Getting the state object in the animalsHealthSlice 
    const animalsHealthSlice = useSelector((store) => store.animalsHealth)

    const currentAnimalsHealth = animalsHealthSlice.animalsHealth;

    const dispatch = useDispatch();

    const updateAnimalsHealthRandomly = () => {
        const updatedAnimalsHealth = currentAnimalsHealth.map((animalBreed) => {
            return animalBreed.map((eachAnimalHealth) => {
                const randomPercentage = Math.random() * 20;
                const reducedHealth = Math.max(0, eachAnimalHealth - (eachAnimalHealth * randomPercentage)/100);
                return parseFloat(reducedHealth.toFixed(2));
            })
        })
        dispatch(updateAnimalsHealth(updatedAnimalsHealth));
    }

    const feedAnimals = () => {
        
        /* Generating 3 random values one for each type of animal*/
        const feedingPercentages = Array.from({length : 3}, () => Math.floor(Math.random() * 16) + 10);

        const updatedAnimalsHealth = currentAnimalsHealth.map((animalBreed, index) => {
            return animalBreed.map((eachAnimalHealth) => {
                const feedingPercentage = feedingPercentages[index];
                const increasedHealth = Math.min(100, eachAnimalHealth + (eachAnimalHealth * feedingPercentage)/100);
                return parseFloat(increasedHealth.toFixed(2));
            })
        })
        dispatch(updateAnimalsHealth(updatedAnimalsHealth));
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            updateAnimalsHealthRandomly();
        }, 4000);
        return () => clearInterval(intervalID);
    }, [animalsHealthSlice])

    const handleProvoke = (evt) => {
        updateAnimalsHealthRandomly();
        evt.preventDefault();
    }

    const handleFeed = (evt) => {
        feedAnimals();
        evt.preventDefault();
    }


    return (
        <>
            <div>
                <button onClick={handleProvoke} className="border-black border-[1px] m-1 px-4 py-1 border-solid bg-gray-600 text-white">Provoke</button>
                <button onClick={handleFeed}  className="border-black border-[1px] m-1 px-4 py-1 border-solid bg-gray-600 text-white">Feed</button>
            </div>
            <ElephantShelter elephantsHealth = {currentAnimalsHealth[0]}/>
            <MonkeyShelter monkeysHealth = {currentAnimalsHealth[1]}/>
            <GiraffeShelter giraffesHealth = {currentAnimalsHealth[2]}/>
        </>
    )
}

export default MainShelter;