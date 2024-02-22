import ElephantShelter from "./ElephantShelter";
import GiraffeShelter from "./GiraffeShelter";
import MonkeyShelter from "./MonkeyShelter";
import { useEffect, useState } from "react";

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

    useEffect(() => {
        const intervalID = setInterval(() => {
            updateAnimalsHealthRandomly();
        }, 7000);
        return () => clearInterval(intervalID);
    }, [animalsHealthSlice])

    return (
        <>
            <ElephantShelter elephantsHealth = {currentAnimalsHealth[0]}/>
            <MonkeyShelter monkeysHealth = {currentAnimalsHealth[1]}/>
            <GiraffeShelter giraffesHealth = {currentAnimalsHealth[2]}/>
        </>
    )
}

export default MainShelter;