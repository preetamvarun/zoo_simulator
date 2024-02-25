import ElephantShelter from "./ElephantShelter";
import GiraffeShelter from "./GiraffeShelter";
import MonkeyShelter from "./MonkeyShelter";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateAnimalsHealth, updateFeedStatus } from "../utils/animalsHealthSlice";
import '../styles/AnimateButtons.css';

const MainShelter = () => {

    // Getting the state object in the animalsHealthSlice 
    const animalsHealthSlice = useSelector((store) => store.animalsHealth)

    const currentAnimalsHealth = animalsHealthSlice.animalsHealth;

    /* Get the dispatch function to make changes to the slices in the store  */
    const dispatch = useDispatch();

    /*  Function to decrease the healths of animals randomly */
    const updateAnimalsHealthRandomly = () => {
        dispatch(updateFeedStatus(false))
        const updatedAnimalsHealth = currentAnimalsHealth.map((animalBreed) => {
            return animalBreed.map((eachAnimalHealth) => {
                /* Generating a random value (floating point value) between 0 to 20 inclusive*/
                const randomPercentage = Math.random() * 21;
                /* Making sure health doesn't go below 0 */
                const reducedHealth = Math.max(0, eachAnimalHealth - (eachAnimalHealth * randomPercentage)/100);
                return parseFloat(reducedHealth.toFixed(2));
            })
        })
        dispatch(updateAnimalsHealth(updatedAnimalsHealth));
    }

    /* Function to feed the animals */
    const feedAnimals = () => {
        
        /* Generating 3 random values one for each type of animal*/
        const feedingPercentages = Array.from({length : 3}, () => Math.floor(Math.random() * 16) + 10);

        /* Generate a new 2D array of healths after feeding the animals */
        const updatedAnimalsHealth = currentAnimalsHealth.map((animalBreed, index) => {
            /* collection each 1D array(animalBreed) and map over it*/
            return animalBreed.map((eachAnimalHealth) => {
                /* Feed the animal at a particular index. Initially, we will be having 15 animals indexed from [0,14] */
                /*
                [0, 4] : indexed animals should be fed with one value
                [5, 9] : indexed animals should be fed with one value
                [10,14] : indexed animals should be fed with one value 
                */
                const feedingPercentage = feedingPercentages[index];

                /* Make Sure health <= 100 */
                const increasedHealth = Math.min(100, eachAnimalHealth + (eachAnimalHealth * feedingPercentage)/100);
                return parseFloat(increasedHealth.toFixed(2));
            })
        })

        /* update animals health slice in the store */
        dispatch(updateAnimalsHealth(updatedAnimalsHealth));
        dispatch(updateFeedStatus(true));
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            updateAnimalsHealthRandomly();
            /* 1 hour => 60 minutes => 60 * 60 seconds => 3600 seconds => 3600 * 1000 milliseconds */
        }, 3600 * 1000);
        /* clear out the intervals */
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
            <div className="flex flex-row justify-around items-center py-2 mt-2">
                <div className="inline-block border-2 border-solid border-green-400
                px-[12px] py-[2px] Btn-Provoke">
                    <button onClick={handleProvoke} className="px-6 py-1 text-white"
                    >Provoke</button>
                </div>
                <div className="inline-block border-2 border-solid border-green-400 px-[12px] py-[2px]
                Btn-Feed"
                >
                <button onClick={handleFeed}  className="px-9 py-1 text-white inline-block">Feed</button>
                </div>
            </div>
            {/* Intially, our 2D health array will be [[100,100,100,100,100],[100,100,100,100,100],
            [100,100,100,100,100]]. Pass 0th index 1D array to monkey shelter component, 
            1st index 1D array to elephant shelter component and 2nd index 1D array to 
            Giraffe shelter component */}
            <MonkeyShelter monkeysHealth = {currentAnimalsHealth[0]}/>
            <ElephantShelter elephantsHealth = {currentAnimalsHealth[1]}/>
            <GiraffeShelter giraffesHealth = {currentAnimalsHealth[2]}/>
        </>
    )
}

export default MainShelter;