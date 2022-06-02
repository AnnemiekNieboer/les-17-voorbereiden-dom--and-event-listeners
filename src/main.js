//DYnamisch injecten van content in de DOM

//Element aanmaken
const popularBookTitle = document.createElement("h3");

//Tekst toevoegen aan element
popularBookTitle.textContent = "The Great Gatsby";
//Een attribuut (zoals een class) toevoegen aan element
popularBookTitle.setAttribute("class", "pink-background");

//Een img element aanmaken
const imageElement = document.createElement("img");
//Een src element toevoegen aan img element
imageElement.setAttribute("src", "img/the-great-gatsby-bookcover.jpeg");
// imageElement.src = "./img/the-great-gatsby-bookcover.jpeg";

//Een alt element toevoegen aan img element
imageElement.setAttribute("alt", "the great gatsby book");

//Een attribuut verwijderen
popularBookTitle.removeAttribute("class")

//Toevoegen aan index
const popularBook = document.getElementById("popular-book");
popularBook.appendChild(popularBookTitle);


//Oefenen:
popularBook.appendChild(imageElement);

const popularBookAuthor = document.createElement("p");
popularBookAuthor.textContent = "Door F. Scott Fitzgerald";

popularBook.appendChild(popularBookAuthor);

//Event listeners
function getNames() {
    console.log("Hallo");
}

const buttonElement = document.createElement("button");
buttonElement.textContent = "Click here!";
const eventListenerArticle = document.getElementById("event-listeners");
eventListenerArticle.appendChild(buttonElement);

buttonElement.addEventListener("click", getNames);

//Event listeners met parameter

const userNameInputField = document.getElementById("username-field");
const passwordInput = document.getElementById("password-field");

function handleInputChange(e) {
    const currentValue = e.target.value;
    const currentInput = e.target.name;
    console.log(`The ${currentInput} is ${currentValue}`);

    console.log(e.keyCode);
}

userNameInputField.addEventListener("keyup", handleInputChange);
passwordInput.addEventListener("keyup", handleInputChange);


//Voorbeeld met meerdere parameters (anonieme functie gebruiken)

function calculateSum(a,b) {
    console.log(a + b)
}

const multipleParametersButton = document.getElementById("test-button-multiple-parameters")
multipleParametersButton.addEventListener("click", () => {
    calculateSum(2,4);
})

//Voorbeeld met form

const signInForm = document.getElementById("sign-in-form");

function handleSubmit(e) {
    e.preventDefault();
    console.log("Het formulier wordt verzonden");
}

signInForm.addEventListener("submit", handleSubmit);
