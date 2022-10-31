import React , {useState, useEffect} from "react";
import useAxios from "../hooks/useAxios";

const Temp = () => {
    const { response, loading, error } = useAxios({
        method: 'post',
        url: '/login',
        
        body: JSON.stringify({
            username: 9739164731,
            password: 123456,
          }),
    });
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(response)
        if (response !== null) {
            setData(response);
        }
    }, [response]);

    return (
        <div className='App'>
            <h1>Posts</h1>

            {loading ? (
                <p>loading...</p>
            ) : (
                <div>
                    {error && (
                        <div>
                            <p>{error.message}</p>
                        </div>
                    )}
                    
                    
                </div>
            )}
        </div>
    );
};

export default Temp;
