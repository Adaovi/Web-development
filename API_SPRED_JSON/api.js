async function fetchData() {

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
        console.log("hey, it is reading the data using API")
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)

        }
        const data = await response.json(); //json is the text std for data transfer
        //json() function converts the data fetched into JSON format
        displaydata(data);        

    } //will check for any runtime errors
    catch (error) {  //take care of the error
        console.log(error.message);
    }
    console.log('this is some other statemen')
}
fetchData()

function displaydata(data) {
    const resultDiv = document.getElementById('result')
    const resultString = `
        <h2>Data Fetched Set 1</h2>
        <p>User ID: <span>${data.userId}</span></p> 
        <p>Title: <span>${data.title}</span></p>
        <p>Body: <span>${data.body}</span></p>
    `; //we use the ${} for embedding the data
    resultDiv.innerHTML = resultString;

}
