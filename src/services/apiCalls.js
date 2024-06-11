const apiUrl = "http://localhost:4000"

export const createTask = async ({ title, description, isCompleted }) => {
    try {
        const response = await fetch(
            `${apiUrl}/api/tasks`,
            {
                method: "Post",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ title, description, isCompleted })
            }
        )
        const data = await response.json()
        return data
    } catch (error) {
        return error
    }

}

export const getTasks = async() =>{
try {

    const response = await fetch(
        `${apiUrl}/api/tasks`,
        {
            method: "Get",
            headers: {
                "Content-Type": "application/json",

            },

        }
    )
    const data = await response.json()
    return data
} catch (error) {
    return error
}
}
