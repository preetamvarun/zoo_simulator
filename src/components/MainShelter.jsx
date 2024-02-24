import ElephantShelter from "./ElephantShelter";
import GiraffeShelter from "./GiraffeShelter";
import MonkeyShelter from "./MonkeyShelter";
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { updateAnimalsHealth, updateFeedStatus } from "../utils/animalsHealthSlice";
import provokeLeaves from '../Images/provokeLeaves2.svg';

const MainShelter = () => {

    // Getting the state object in the animalsHealthSlice 
    const animalsHealthSlice = useSelector((store) => store.animalsHealth)

    const currentAnimalsHealth = animalsHealthSlice.animalsHealth;

    const dispatch = useDispatch();

    const updateAnimalsHealthRandomly = () => {
        dispatch(updateFeedStatus(false))
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
        dispatch(updateFeedStatus(true));
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            updateAnimalsHealthRandomly();
        }, 40000);
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
            <div className="flex flex-row justify-around items-center py-2">
                <div className="inline-block border-2 border-solid border-green-400
                px-[12px] py-[2px]">
                    <button onClick={handleProvoke} className="px-6 py-1 text-white"
                    >Provoke</button>
                </div>
                <div className="inline-block border-2 border-solid border-green-400 px-[12px] py-[2px]"
                >
                    <button onClick={handleFeed}  className="px-9 py-1 text-white inline-block">Feed</button>
                </div>
            </div>
            <MonkeyShelter monkeysHealth = {currentAnimalsHealth[1]}/>
            <ElephantShelter elephantsHealth = {currentAnimalsHealth[0]}/>
            <GiraffeShelter giraffesHealth = {currentAnimalsHealth[2]}/>
        </>
    )
}

export default MainShelter;