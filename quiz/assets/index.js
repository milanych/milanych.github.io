//Global variables
const questionList = document.querySelector('.quizBody')
const submitButton = document.querySelector("#nextButton");
const answers = document.querySelectorAll('.answer')
let category = document.querySelectorAll('.category')
let iterator = document.createElement('span');
let result = 0;
let i = 1;
let answerLetters = ['a', 'b', 'c', 'd'];
let indexOfCorrectAnswer;
let data = [];
let currentQuestion = 0;
let categoriesData = [];
let subCategories = '';
let categories = [];



//Random quantity of questions (3 to 10)
const randomNumber = () => {
  return Math.floor(Math.random() * (10 - 3) + 3)
}
const quantity = randomNumber()

//Get API categories
async function getCategories() {
  const response = await fetch('https://the-trivia-api.com/api/categories')
  const jsonData = await response.json();
  for (let x in jsonData) {
    let obj = {};
    obj[x] = jsonData[x]
    categoriesData.push(obj)
  }
  categoriesGenerator(categoriesData);
}
getCategories()

//API call
async function fetchTriviaQuestion() {
  const APIlink = `https://the-trivia-api.com/api/questions?limit=${quantity}&categories=${localStorage.getItem('subCategories')}`
  console.log(APIlink)
  const response = await fetch(APIlink)
  const jsonData = await response.json();
  jsonData.forEach(el => {
    data.push(el)
  });
  processData(data)
  document.getElementById('currentCategories').innerHTML += localStorage.getItem('categories');
  let chooseAnotherCategories = document.createElement('a');
  chooseAnotherCategories.id = 'chooseAnotherCategories';
  chooseAnotherCategories.innerHTML = '×';
  chooseAnotherCategories.href = '.';
  document.getElementById('categoriesContainer').append(chooseAnotherCategories)
  let chooseAnotherCategoriesButton = document.querySelector("#chooseAnotherCategories");
  chooseAnotherCategoriesButton.addEventListener('click', () => {
    console.log('hello')
    localStorage.clear()
  })
}

//Check if localStorage is not empty
if (localStorage.getItem('subCategories')) {
  document.querySelector("body > div.modal-background").style.display = 'none';
  document.querySelector("body > div.container").style.display = 'flex';
  fetchTriviaQuestion();
}

//Categories generator
function categoriesGenerator(category) {
  let i = 0;
  let catButtonSubmit = document.createElement('a');
  catButtonSubmit.id = 'catButtonSubmit';
  catButtonSubmit.innerHTML = 'Submit'
  document.querySelector("#modal-container").append(catButtonSubmit);
  category.map(el => {
    let cat = `<input type="checkbox" class="category" name="theme" id="cat-${i}"><label id="catLabel-${i}" for="cat-${i}"></label>`
    var htmlObject = document.createElement('li');
    htmlObject.innerHTML = cat;
    document.querySelector("#categoriesList").append(htmlObject);
    document.getElementById(`catLabel-${i}`).innerHTML = Object.keys(el);
    catButtonSubmit.addEventListener('click', chooseCategories)
    i++
  })
}



//Add categories after Submit 
const chooseCategories = () => {
  let tempCategoryHolder = [];
  document.querySelectorAll('.category').forEach(el => {
    if (el.checked) {
      let checkedCategory = (document.getElementById(`catLabel-${el.id.slice(-1)}`).innerHTML).replace(/&amp;/g, "&");
      categoriesData.forEach(el => {
        if (Object.keys(el)[0] === checkedCategory) {
          tempCategoryHolder.push(Object.values(el)[0][0]);
          categories.push(Object.keys(el))
        }
      })
    }
    document.querySelector(".modal-background").style.display = 'none';
    document.querySelector("body > div.container").style.display = 'flex';
  })
  subCategories = tempCategoryHolder.join(',');
  localStorage.setItem('categories', categories.join(', '));
  localStorage.setItem('subCategories', subCategories);
  fetchTriviaQuestion();
};
//Question generator
function processData(data) {
  document.querySelector("#questionDescription").innerHTML = data[currentQuestion].question;
  let answersList = [data[currentQuestion].incorrectAnswers[0], data[currentQuestion].incorrectAnswers[1], data[currentQuestion].incorrectAnswers[2], data[currentQuestion].correctAnswer];
  let shuffledAnswers = [];
  shuffle(answersList);

  while (answersList.length > 0) {
    let currentAnswer = answersList.shift();
    shuffledAnswers.push(currentAnswer);
  }

  indexOfCorrectAnswer = shuffledAnswers.indexOf(data[currentQuestion].correctAnswer);
  document.querySelector("#label_a").innerHTML = shuffledAnswers[0];
  document.querySelector("#label_b").innerHTML = shuffledAnswers[1];
  document.querySelector("#label_c").innerHTML = shuffledAnswers[2];
  document.querySelector("#label_d").innerHTML = shuffledAnswers[3];
  questionIterator();
}

function isSelected() {
  let answer = undefined;
  answers.forEach(el => {
    if (el.checked) {
      answer = el.id;
    }
  })
  return answer;
}

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function deselectAnswers() {
  answers.forEach(el => el.checked = false);
  document.getElementById('attention').innerHTML = ''
}

const createRepeatLink = () => {
  let repeatLink = document.createElement('a');
  repeatLink.href = '.';
  repeatLink.innerText = 'Repeat?'
  repeatLink.setAttribute('id', 'repeatButton');
  document.querySelector('.questionBody').after(repeatLink);
}

function questionIterator() {
  iterator.innerHTML = ` (${i}/${quantity})`
  document.querySelector(".questionHeading").appendChild(iterator)
  i++;
}

function getResult() {
  deselectAnswers();
  currentQuestion++;
  if (currentQuestion < quantity) {
    processData(data)
  } else {
    questionList.innerHTML = `Your result: <b>${result}/${quantity}</b> questions`;
    document.querySelector("#nextButton").remove();
    document.getElementById('attention').innerHTML = ''
    if (result <= quantity / 2 && result > 0) {
      resultText('Try harder!', '☹️')
    } else if (result === 0) {
      resultText('No comment...', '🤷‍♂️')
    } else if (result > quantity / 2 && result < quantity) {
      resultText('Very good!', '🙂')
    } else if (result === quantity) {
      resultText('Perfect!', '😎')
    }
    createRepeatLink()
  }
}

const resultText = (text, em) => {
  let emoji = document.createElement('p');
  emoji.classList.add('emoji');
  document.querySelector(".quizBody").append(emoji);
  emoji.innerHTML = em;
  document.querySelector(".questionHeading").innerHTML = text;
}

function answerChosen() {
  submitButton.addEventListener('click', () => {
    let selected = isSelected();
    if (selected) {
      if (selected === answerLetters[indexOfCorrectAnswer]) {
        result++;
      }
      getResult();
    } else {
      document.getElementById('attention').innerHTML = 'Choose the answer!'
    }
  })
}
answerChosen();