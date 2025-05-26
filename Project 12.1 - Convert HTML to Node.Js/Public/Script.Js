const button = document.querySelector("#image-fetch");
const breedSelector = document.querySelector("#breed-selector");
const img = document.querySelector("#dog-image");

fetch("https://dog.ceo/api/breeds/list/all")
  .then((response) => response.json())
  .then((data) => {
    const breeds = data.message;
    for (const breed in breeds) {
      const breedOption = document.createElement("option");
      breedOption.value = breed;
      breedOption.textContent = breed;
      breedSelector.appendChild(breedOption);

      if (breeds[breed].length >= 1) {
        breeds[breed].forEach((subBreed) => {
          const subBreedOption = document.createElement("option");
          subBreedOption.value = `${breed}/${subBreed}`;
          subBreedOption.textContent = `${breed}: ${subBreed}`;
          breedSelector.appendChild(subBreedOption);
        });
      }
    }
  })
  .catch((error) => {
    console.error("Error fetching the data!", error);
    alert("Failed to load breeds. Please refresh the page.");
  });

button.addEventListener("click", () => {
  const selectedBreed = breedSelector.value;
  if (selectedBreed) {
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
      .then((response) => response.json())
      .then((data) => {
        displayImage(data.message);
      })
      .catch((error) => {
        console.error("Error Fetching the Data!", error);
        displayImage(null);
      });
  } else {
    alert("Please select a breed!");
  }
});

function displayImage(imageUrl) {
  if (imageUrl) {
    img.src = imageUrl;
    img.alt = "Dog image";
  } else {
    img.alt = "Failed to load image. Try again.";
  }
}
