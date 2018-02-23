// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");

var $searchBtn1 = document.querySelector("#search1");
var $searchBtn2 = document.querySelector("#search2");
var $searchBtn3 = document.querySelector("#search3");
var $searchBtn4 = document.querySelector("#search4");
var $searchBtn5 = document.querySelector("#search5");

// Add an event listener to the searchButton, call handleSearchButtonClick when clicked
$searchBtn1.addEventListener("click", handleSearchButtonClick1);
$searchBtn2.addEventListener("click", handleSearchButtonClick2);
$searchBtn3.addEventListener("click", handleSearchButtonClick3);
$searchBtn4.addEventListener("click", handleSearchButtonClick4);
$searchBtn5.addEventListener("click", handleSearchButtonClick5);


// Set filteredAddresses to data initially
var filteredData = dataSet;

// renderTable renders the filteredData to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    // Get get the current address object and its fields
    var address = filteredData[i];
    var fields = Object.keys(address);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = address[field];
    }
  }
}

function handleSearchButtonClick1() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDatetime = $dateInput.value.trim().toLowerCase();
  
  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(address) {
    var addressDatetime = address.datetime.toLowerCase();
    
           
        return addressDatetime === filterDatetime ;
               // addressCity === filterCity 

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    // return addressDatetime === filterDatetime;
     });
  renderTable();
}

function handleSearchButtonClick2() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterCity= $cityInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(address) {
    var addressCity = address.city.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressCity === filterCity;
  });
  renderTable();
}

function handleSearchButtonClick3() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterState = $stateInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(address) {
    var addressState = address.state.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressState === filterState;
  });
  renderTable();
}

function handleSearchButtonClick4() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterCountry = $countryInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(address) {
    var addressCountry = address.country.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressCountry === filterCountry;
  });
  renderTable();
}

function handleSearchButtonClick5() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterShape = $shapeInput.value.trim().toLowerCase();

  // Set filteredAddresses to an array of all addresses whose "state" matches the filter
  filteredData = dataSet.filter(function(address) {
    var addressShape = address.shape.toLowerCase();

    // If true, add the address to the filteredAddresses, otherwise don't add it to filteredAddresses
    return addressShape === filterShape;
  });
  renderTable();
}
// Render the table for the first time on page load
renderTable();
