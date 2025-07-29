import { useEffect, useState } from "react";

export default function useDebounce(movieName, delay){
    const [debounce, setDebounce] = useState("");

    useEffect(()=> {
            const debounceTimer = setTimeout(() => {
                setDebounce(movieName);
            }, delay)
            return () => clearTimeout(debounceTimer)
    }, [movieName, delay])
    
    return debounce
}