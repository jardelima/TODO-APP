export default function initChangeColor() {

    const changeColor = document.querySelector(".theme");

    changeColor.addEventListener("click", () => {
        const backgroundFirst = document.querySelector(".first-bg");
        const containerTodo = document.querySelector(".add-to-do");
        const bodyColor = document.querySelector("body");

        const todo = document.querySelector(".new-to-do");
        const resumeTodo = document.querySelector(".resume-to-do");
        const optionsTodo = document.querySelector(".options-to-do");

        backgroundFirst.classList.toggle("container-light");
        containerTodo.classList.toggle("add-to-do-light");
        changeColor.classList.toggle("theme-light");
        bodyColor.classList.toggle("body-light");

        todo.classList.toggle("new-to-do-light");
        resumeTodo.classList.toggle("resume-to-do-light");
        optionsTodo.classList.toggle("options-to-do-light");

    });
}


