import { useEffect, useState } from 'react';

const useCosmosApi = (url) => {
    const [cosmosData, setCosmosData] = useState([]);

    const fetchData = async () => {
        const res = await fetch(url);
        return res.json();
    };

    useEffect(() => {
        fetchData().then((data) => setCosmosData(data));
    }, []);

    return cosmosData;
};

export default useCosmosApi;
