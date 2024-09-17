{
    // 

    // asyncronous

  // Asynchronous function that returns a promise with a specific data structure
const createPromise = (): Promise<{ something: string }> => {
    return new Promise<{ something: string }>((resolve, reject) => {
        const data = { something: "data" }; // Example data
        if (data) {
            resolve(data); // Resolve the promise with data
        } else {
            reject("Failed to get the data");
        }
    });
};

const showData = async (): Promise<{ something: string }> => {
    try {
        const data = await createPromise();
        return data;
    } catch (error) {
        console.error(error);
        throw error; // Rethrow the error if you want the caller to handle it
    }
};

// Call the async function
showData().then(data => {
    console.log(data); // Logs the resolved data
}).catch(error => {
    console.error("Error:", error);
});

    // 
}