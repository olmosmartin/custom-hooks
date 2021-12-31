import axios from 'axios'
import { useState, useEffect, useRef } from 'react'

export const useFetch = ( url ) => {
    const [state, setstate] = useState({data: null, loading: true, error: null})    
    const isMounted = useRef(true);

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])

    useEffect(() => {
        setstate({data: null, loading: true, error: null})
        fetch(url)
        .then(resp => resp.json())
            .then ((data)=>{

                //setTimeout(() => {
                if(isMounted.current){
                    setstate({
                        data: data,
                        loading: false,
                        error: null
                    })
                }
                //}, 100)
                
            })
            .catch(error => {
                setstate({
                    data: null,
                    loading: false,
                    error: "No se pudo cargar la info"
                })
            })
    }, [url])

    return state;
}
