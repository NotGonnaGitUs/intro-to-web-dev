const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const BREED_URL = "https://dog.ceo/api/breeds/list/all";

const doggos = document.querySelector(".doggos");

const dropdown = document.querySelector(".breeds-dropdown");

function populateBreeds() {
  const promise = fetch(BREED_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      // Super cool! Gets all the keys as an array which then can be used to loop
      all_breeds = Object.keys(processedResponse.message);
      console.log(all_breeds);
      all_breeds.forEach((element) => {
        var option = document.createElement("option");
        option.text = element;

        dropdown.add(option);
      });
    });
}

function addNewDoggo() {
  let API_URL;
  selectedBreed = dropdown.value;
  console.log(selectedBreed);
  if (selectedBreed === "random") {
    API_URL = DOG_URL;
  } else {
    API_URL = `https://dog.ceo/api/breed/${selectedBreed}/images/random`;
  }
  console.log(API_URL);
  const promise = fetch(API_URL);

  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.className = "doggo-img";
      img.src = processedResponse.message;
      img.alt = "Cutest Doggo!";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);

populateBreeds();
