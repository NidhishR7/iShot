// Replace YOUR_API_KEY with your own API key from NASA
const apiKey = "qJRqAKngNr1fVa7KFZqlLNlpfrwIoDaRIT8WNGCB";

// Example endpoint for NASA's Astronomy Picture of the Day API
const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;

// Use fetch to call the API and handle the response
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    // Do something with the returned data
    const image = data.url;
    document.getElementById("apod-image").src = image;
    document.getElementById('explanation').textContent = data.explanation
   
  })
  .catch(error => {
    // Handle any errors that occurred during the fetch request
    console.error(error);
  });