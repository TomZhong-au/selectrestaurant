import { useEffect, useState } from "react";

export const useSelectOptions = (numberOfOptions) => {
    // the program runs for 10s
    // when the program runs, it returns a number between 1 to number of options

    // setInterval: it runs to the next option given a set amount of time

    //first 4 seconds, it is fast, interval, 300s

    // second 4 seconds, it gets slower, interval, 600s

    // in the last 2 seconds it slows down, interval 800s
const randomSeedNumber=Math.floor((Math.random()*12.35))
    const [counter, setCounter] = useState(randomSeedNumber);

    const increment = () => {
        setCounter(prev => prev + 1)
    }

    useEffect(() => {
        const firstTimeout=setTimeout(() => {
            const intervalFast = setInterval(increment, 100)
            setTimeout(()=>{
                clearInterval(intervalFast)
            },4000)
        }, 0)
    
        const secondTimeout=setTimeout(() => {
            const intervalMedium = setInterval(increment, 400)
            setTimeout(()=>{
                clearInterval(intervalMedium)
            },4000)
        }, 4000)
    
        const thirdTimeout=setTimeout(() => {
            const intervalSlow = setInterval(()=>increment(), 700)
            setTimeout(()=>{
                clearInterval(intervalSlow)
            },3000)
        }, 8000)

        return () => {
            clearTimeout(firstTimeout)
            clearTimeout(secondTimeout)
            clearTimeout(thirdTimeout)
        }
    }, [])
    const output = counter % numberOfOptions
    return output
};
