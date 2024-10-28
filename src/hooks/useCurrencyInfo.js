import { useEffect, useState } from "react"

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    let url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    useEffect(()=>{
        fetch(url)
        .then((response) => response.json())
        .then((response)=> setData(response[currency]))
        .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [currency])
    return data;
}
