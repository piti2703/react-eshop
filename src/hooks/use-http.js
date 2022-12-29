import { useEffect, useState } from "react"


const useHttp = (requestConfig, applyData) => {
    
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState(false)


    const sendRequest = async () => {
            const response = await fetch(
                requestConfig.url, {
                    method: requestConfig.method ? requestConfig.method : 'GET',
                    headers: requestConfig.headers ? requestConfig.headers : {},
                    body: requestConfig.body ? JSON.stringify(requestConfig.body) : null
                }
                )
    
            if(!response.ok) {
                throw new Error('Something went wrong. Check API!')
            }

            const data = await response.json();    

            applyData(data)
            setIsLoading(false)
        }

        useEffect(() => {
            sendRequest().catch((error) => {
                setIsLoading(false)
                setHttpError(error.message)
            })
        }, [])
    


    return {
        isLoading,
        httpError
    }

}

export default useHttp