import { useQuery } from "@tanstack/react-query";

function useAPOD(location) {
    const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
    const params = location.state;
    const dateParam = params.date;
    const url = 'https://api.nasa.gov/planetary/apod' + `?api_key=${NASA_KEY}&concept_tags=${true}&date=${dateParam}`;
    const fetchAPOD = async ({ queryKey }) => {
        const [, url] = queryKey;
        try {
            const res = await fetch(url);
            if (!res.ok) {
                const apodData = await res.json();
                return Promise.reject(`Error: ${apodData.code} - ${apodData.msg || 'Unknown error'}`);

            }
            const apodData = await res.json();
            return apodData;
        }
        catch (e) {
            return Promise.reject(e);
        }
    }
    const { data:apodQuery, isLoading, isError, error } = useQuery({
        queryKey: ["apod", url],
        queryFn: fetchAPOD,
        refetchOnWindowFocus: false,
        retry: false
    });

    return { apodQuery, isLoading, isError, error };
}

export default useAPOD;