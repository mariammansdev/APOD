import { useState, useEffect } from "react";

function useAPOD(url) {
    const [data, setData] = useState();

    useEffect(() => {
        async function fetchAPIData() {
            const dateParam = new URLSearchParams(url);
            const date = (new Date(dateParam.get('date'))).toDateString();
            const localKey = `NASA-${date}`;

            if (localStorage.getItem(localKey)) {
                const apiData = JSON.parse(localStorage.getItem(localKey));
                setData(apiData)
                return;
            }

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