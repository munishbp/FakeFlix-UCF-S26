/*
* Custom React hook that tracks a browser window's dimensions and let's any linked react component know the window size and automatically update when
* resized by the user
* */

//store values to trigger rerender, sideeffect later utilized with an eventlistener
import { useState, useEffect } from "react"

//function used to monitor and resize window dimensions if user changes the size.
const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth)
    const [height, setHeight] = useState(window.innerHeight)

    //inner function that is listener of useViewport that updates the state of the window size
    const handleWindowResize = () => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    //useEffect calls handleWindowResize, dependency array stays empty, listener is used to pay attention to window size changes and
    //change state using handleWindowResize
    useEffect(() => {
        window.addEventListener("resize", handleWindowResize)
        return () => window.removeEventListener("resize", handleWindowResize)
    }, [])

    return { width, height }
}

export default useViewport