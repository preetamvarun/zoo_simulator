import ElephantShelter from "./ElephantShelter";
import GiraffeShelter from "./GiraffeShelter";
import MonkeyShelter from "./MonkeyShelter";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { updateAnimalsHealth, updateFeedStatus } from "../utils/animalsHealthSlice";
import '../styles/AnimateButtons.css';

const MainShelter = () => {

    // Getting the state object in the animalsHealthSlice 
    const animalsHealthSlice = useSelector((store) => store.animalsHealth)

    /* Get the current health of all the animals from the store */
    const currentAnimalsHealth = animalsHealthSlice.animalsHealth;

    const [currentTime, setCurrentTime] = useState(new Date());

    /* Use effect function to update the timer for every one minute*/
    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentTime(new Date());
        }, 60 * 1000);
        return () => clearInterval(intervalID);
    }, [currentTime])

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
        {/* Fast Forward To One Hour */}
        setCurrentTime(new Date(currentTime.getTime() + 60 * 60 * 1000));
        evt.preventDefault();
    }

    const handleFeed = (evt) => {
        feedAnimals();
        evt.preventDefault();
    }

    return (
        <div className="flex flex-col justify-evenly items-center min-h-screen">
            <div className="py-2 mt-2 flex flex-col justify-center items-center
            md:flex-row md:justify-evenly md:items-center
            md:w-full">
                <div className="inline-block
                px-[8px] py-[2px] border-2 border-solid border-white
                sm:px-[12px] sm:py-[2px] Btn-Provoke rounded-xl overflow-hidden
                ">
                    <button onClick={handleProvoke} className="px-6 py-1 tracking-wide"
                    >PROVOKE</button>
                </div>
                <p className="inline-block my-4 text-[#FFD700] tracking-wide font-black sm:text-xl text-center"> 
                TIME - <span className="bg-white px-3 py-1 rounded-lg text-green-700">
                {/* Display the timer with hours and minutes */}
                {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span></p>
                <div className="inline-block px-[8px] py-[2px] sm:px-[12px] sm:py-[2px]
                Btn-Feed rounded-xl overflow-hidden border-2 border-solid"
                >
                <button onClick={handleFeed} className="px-9 py-1 tracking-wide">FEED</button>
                </div>
            </div>
            {/* Intially, our 2D health array will be [[100,100,100,100,100],[100,100,100,100,100],
            [100,100,100,100,100]]. Pass 0th index 1D array to monkey shelter component, 
            1st index 1D array to elephant shelter component and 2nd index 1D array to 
            Giraffe shelter component */}
            <div className="md:w-full">
                <MonkeyShelter monkeysHealth = {currentAnimalsHealth[0]}/>
                <ElephantShelter elephantsHealth = {currentAnimalsHealth[1]}/>
                <GiraffeShelter giraffesHealth = {currentAnimalsHealth[2]}/>
            </div>
        </div>
    )
}

export default MainShelter;