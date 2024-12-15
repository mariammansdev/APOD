import { useState, useEffect } from "react";

function useAPOD(url) {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchAPIData() {
        const today = (new Date()).toDateString();
        const localKey = `NASA-${today}`
    
        if (localStorage.getItem(localKey)) {
            const apiData = JSON.parse(localStorage.getItem(localKey));
            setData(apiData)
            return
        }
        localStorage.clear();
        try {
            const res = await fetch(url);
            const apiData = await res.json();
            localStorage.setItem(localKey, JSON.stringify(apiData))
            setData(apiData);
        }
        catch (e) {
            console.log(e.message)
        }
        }
        fetchAPIData();
    }, []);
    return data;
}

export default useAPOD;