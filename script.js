const fetchButton = document.getElementById("fetchButton");
const coffeeList = document.getElementById("coffeeList");

//Asynchronous Function
function fetchCoffeeList() {
  coffeeList.innerHTML = "Loading...";
  fetch("https://api.sampleapis.com/coffee/hot")
    .then((response) => response.json())
    .then((data) => {
      coffeeList.innerHTML = "";
      for (let i = 0; i < 10; i++) {
        const coffeeName = data[i].title;
        const listItem = document.createElement("li");
        listItem.textContent = coffeeName;
        coffeeList.appendChild(listItem);
      }
      coffeeList.style.display = "block";
    })
    .catch((error) => {
      console.error("Error fetching data: " + error);
    });
}

fetchButton.addEventListener("click", fetchCoffeeList);
