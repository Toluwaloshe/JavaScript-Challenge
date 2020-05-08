//STEP 1: CREATING THE TABLE

// from data.js
var tableData = data;

var tbody = d3.select("tbody");

//Loop through the data and console.log each UFO sighting object
tableData.forEach((sighting) => {
    console.log(sighting);

//Use d3 to append one table row `tr` for each UFO sighting object and console.log each sighting    
    var row = tbody.append("tr");

    Object.entries(sighting).forEach(([key, value]) => {
        console.log(key, value);
   
//Then append a cell to the row for each value. This creates the framework for each cell of data
    var cell = row.append("td");

//Then update each cell's text with the UFO sighting values
    cell.text(value);

     });

});

//STEP 2: FILTERING BASED ON INPUT

//Create a variable for the id associated with the button
var button = d3.select("#filter-btn");

//Add a listener
button.on("click", () => {
    // alert("hello world")

    d3.select("tbody").html("");

    //Prevent the default action from happening (page refreshing)
    d3.event.preventDefault();

    //Select the datetime id
    var inputValue = d3.select("#datetime").property("value");
    console.log(inputValue);

    //Look throufh each row of the table and identify a sighting date that equals the user's input
    var filteredData = tableData.filter(sighting=> sighting.datetime === inputValue);
    console.log(filteredData)

    //Filter data and return data the matches the user's date input
    filteredData.forEach(sighting => {
        console.log(sighting);

        var row = tbody.append("tr");

        Object.entries(sighting).forEach(([key, value]) => {
            console.log(key, value);
            var cell = row.append("td");

            cell.text(value);

        });

    });
});