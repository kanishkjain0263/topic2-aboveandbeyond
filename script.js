// Get the color picker elements
var colorPickers = document.querySelectorAll("input[type='color']");

// Add an event listener to each color picker
colorPickers.forEach(function (colorPicker) {
    colorPicker.addEventListener("input", function () {
        // Get the selected light
        var light = document.getElementById("light-select").value;

        // Get the selected color
        var color = colorPicker.value;

        // Update the appropriate light with the new color
        updateLightColor(light, color);

        // Display the color of the light
        displayLightColor(light, color);
    });
});

// Function to update the color of a light
function updateLightColor(light, color) {
    // Update the color of the light using your preferred method
    console.log("Updating color of " + light + " to " + color);
}

// Function to display the color of a light
function displayLightColor(light, color) {
    // Get the light element
    var lightElement = document.getElementById(light);

    // Update the background color of the light element
    lightElement.style.backgroundColor = color;
}
