import { useEffect, useState } from 'react';

const useCosmosApi = () => {
    const [cosmosData, setCosmosData] = useState([]);

    const fetchData = async () => {
        const res = await fetch('http://127.0.0.1:8080/api/v1.0/TravelPrices');
        return res.json();
    };

    useEffect(() => {
        fetchData().then((data) => setCosmosData(data));
    }, []);

    return cosmosData;
};

export default useCosmosApi;
