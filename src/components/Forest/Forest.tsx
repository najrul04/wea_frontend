import React, { useEffect, useState } from 'react'
import { fetchForestData } from '../../services/api'
const Forest: React.FC = () => {
    const [forestData, setForestData] = useState<{ country: string; forestAreaPercentage: number; deforestationRate: number }[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const data = await fetchForestData();
                setForestData(data);
                setLoading(false);
            }
            catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError("An unexpected error occurred");
                }
                setLoading(false);  
            }
        }
        getData();
    }, []);

    if (loading) return <p>Loading....</p>
    if (error) return <p>Error: {error}</p>

  return (
    <div>
        <h1>Forest Data</h1>
        <ul>
            {forestData?.map((data, index) => (
                <li key={index}>
                    <p>Countries: {data.country}</p>
                    <p>Forest Area Percentage: {data.forestAreaPercentage}%</p>
                    <p>Deforestation Rate: {data.deforestationRate}%</p>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Forest