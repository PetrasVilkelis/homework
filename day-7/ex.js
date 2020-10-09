/*EXERCISE 1 
     Create a new welcome alert message when the page successfully loads
    */
// alert("Welcome!");
/* EXERCISE 2
      Write a function to change the Title of the page in something else (execute the function in browser console)
  */
const changeTitle = function (newTitle) {
  document.title = newTitle;
};
/* EXERCISE 3a
      Write a function to add a class to the page's h1 title in "red-color" (execute the function when title is hovered by mouse).
  */
const addClassToTitle = function () {
  const heading = document.querySelector("h1");
  heading.classList.add("red-color");
};
/* EXERCISE 3b
      Write a function to remove "red-color" class from previous h1 (execute the function when the mouse leaves the title).
  */
const removeClassFromTitle = function () {
  const heading = document.querySelector("h1");
  heading.classList.remove("red-color");
};
/* EXERCISE 4
      Add the following html snippet to your page:
          <h2 id="listTitle">Todo List</h2>
          <ul id="firstList">
              <li><p>1st</p></li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <ul id="secondList">
              <li>1st</li>
              <li>2nd</li>
              <li>3rd</li>
          </ul>
          <div>
              <p>This text is just for the exercise</p>
          </div>
  Write a function to change the text of only the p which are child of a div (execute the function by assigning it to a button's click event)
  */
const changePContent = function () {
  const p = document.querySelector("div>p");

  p.innerText = "Hello!";
};
/* EXERCISE 5
      Write a function to change the list title (you can use previous day's textarea as input or create a new text input field to grab the content)
  */
const changeListTitle = function () {
  const input = document.querySelector(
    "#titleInput"
  );
  const heading = document.querySelector(
    "#listTitle"
  );

  heading.innerText = input.value;
};
/* EXERCISE 6
       Write a function to add a new item ONLY to the second list (create an input field + add button)
  */
const addToTheSecond = function () {
  const secondList = document.querySelector(
    "#secondList"
  );
  const input = document.querySelector(
    ".todoForm>input"
  );

  if (!input.value) return;

  const el = document.createElement("li");

  el.innerHTML = input.value;

  secondList.append(el);

  input.value = "";
};
/* EXERCISE 7
      Write a function to make the first UL disappear (button)
  */
const firstUlDisappear = function () {
  document.querySelector("#firstList").remove();
};
/* EXERCISE 8
      Write a function to make the background of every UL green (button)
  */
const paintItGreen = function () {
  const uls = document.querySelectorAll(
    "#firstList,#secondList"
  );
  uls[0].style.backgroundColor = "green";
  uls[1].style.backgroundColor = "green";
};

/* EXERCISE 9
      Add a "magnifier function" to the table.
      When the user mouse goes on a table cell (not the image one) the font size must increase.
      HINT use mouseenter / mouseleave events
  */
const makeThemMagnifiable = function () {
  const tds = document.querySelectorAll(
    "td:not(:first-child)"
  );

  for (const td of tds) {
    td.addEventListener("mouseenter", () => {
      td.style.fontSize = "2rem";
    });
    td.addEventListener("mouseleave", () => {
      td.style.fontSize = "1rem";
    });
  }
};
/* EXERCISE 10
      Add a button to toggle all the product images (toggle => if visible, hide, if not visible, show)
  */
const toggleShowImages = function () {
  const imageParents = document.querySelectorAll(
    "td:first-child"
  );

  let opacity = "";

  if (imageParents[0].style.opacity === "0") {
    opacity = 1;
  } else {
    opacity = 0;
  }

  for (const imageParent of imageParents) {
    imageParent.style.opacity = opacity;
  }
};

//##### EXTRA

/* EXERCISE 11
      Make the heading of the page change color radomly every time the user clicks on it
      */
const makeItClickable = function () {
  const heading = document.querySelector("h1");
  console.log(heading);
  heading.style.backgroundColor =
    "#" +
    Math.floor(Math.random() * 16777215).toString(
      16
    );
};

/*EXERCISE 12
    Refactor your HTML code with HTML5 semantic tags such as header, section, footer, etc
*/
