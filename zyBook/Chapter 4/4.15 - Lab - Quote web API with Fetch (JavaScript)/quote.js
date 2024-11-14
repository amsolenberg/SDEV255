// Wait for the DOM to fully load before running the code inside this function
window.addEventListener('DOMContentLoaded', function () {
    // Add a click event listener to the "Fetch Quotes" button
    document.querySelector('#fetchQuotesBtn').addEventListener('click', function () {
        // Get the selected topic from the topic drop-down menu
        const topicDropdown = document.querySelector('#topicSelection');
        const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;

        // Get the selected count of quotes from the count drop-down menu
        const countDropdown = document.querySelector('#countSelection');
        const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

        // Call the fetchQuotes function with the selected topic and count
        fetchQuotes(selectedTopic, selectedCount);
    });
});

// Function to fetch quotes from the API based on the selected topic and count
function fetchQuotes(topic, count) {
    const endpoint = 'https://wp.zybooks.com/quotes.php'; // API endpoint
    const queryString = `topic=${topic}&count=${count}`; // Query parameters for the request
    const url = `${endpoint}?${queryString}`; // Full URL for the request

    // Use the Fetch API to send a GET request to the API
    fetch(url)
        .then((response) => {
            // Check if the response status is OK (status code 200-299)
            if (!response.ok) {
                // If not, throw an error with the status code
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response body
            return response.json();
        })
        .then((data) => {
            // Check if the API response contains an error
            if (data.error) {
                // Display the error message on the page
                document.querySelector('#quotes').innerHTML = `${data.error}`;
            } else {
                // If no error, call displayQuotes to render the quotes on the page
                displayQuotes(data);
            }
        })
        .catch((error) => {
            // Handle any errors that occur during the fetch or JSON parsing
            document.querySelector('#quotes').innerHTML = `${error.message}`;
        });
}

// Function to display quotes on the page
function displayQuotes(data) {
    let html = '<ol>'; // Start an ordered list for the quotes
    // Loop through each quote object in the data array
    data.forEach((quoteObj) => {
        // Add each quote and its source as a list item
        html += `<li>${quoteObj.quote} - ${quoteObj.source}</li>`;
    });
    html += '</ol>'; // Close the ordered list

    // Insert the generated HTML into the #quotes element on the page
    document.querySelector('#quotes').innerHTML = html;
}
