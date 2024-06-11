const apiUrl= "http://localhost:4000"

export const createTask = async(bodyDataTask) =>{
    try {
        const response = await fetch(
            `${apiUrl}/api/appointments`,
            {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",
                    
                },
                body: JSON.stringify(bodyDataTask)
            }
        )
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }

}