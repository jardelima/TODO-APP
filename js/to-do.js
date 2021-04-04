export default function initAddTodo() {

    const containerTodo = document.getElementById("new-to-do");
    const inputTodo = document.getElementById("text-to-do");
    const btnAdd = document.getElementById("btn-add");
    const amount = document.getElementById("amount");

    const clearTodo = document.getElementById("clear-all");
    const modal = document.getElementById("myModal");

    const active = document.getElementById("active");
    const all = document.getElementById("all");
    const completed = document.getElementById("completed");

    let contCheckbox = 0;
    let contItems = 0;
    let completedActivitys = [];

    btnAdd.addEventListener("click", addTodo);
    containerTodo.addEventListener("change", removeTodo);
    completed.addEventListener("click", activesCompleted);

    function addTodo() {
        //ADD TO-DO
        if (inputTodo.value !== "") {

            const divContainer = document.createElement("div");
            const todo = inputTodo.value;

            contCheckbox++;

            contItems++;
            amount.innerText = contItems;

            divContainer.classList.add("all-to-do");

            divContainer.innerHTML =
                `<div class="task-to-do input-checkbox">
                    <input type="checkbox" id="checkbox${contCheckbox}">
                    <label for="checkbox${contCheckbox}"></label>
                    <span id="to-do">${todo}</span>
                </div>
                <div>
                    <img src="./images/icon-cross.svg" alt="Icon Remove" id="remove-task">
                </div>`;

            containerTodo.appendChild(divContainer);
            inputTodo.value = "";

            //MODAL
            clearTodo.addEventListener("click", () => {
                modal.style.display = "flex";
                const btnYes = document.getElementById("btn-yes");
                const btnNo = document.getElementById("btn-no");

                btnYes.addEventListener("click", () => {
                    divContainer.remove();
                    contItems = 0;
                    amount.innerText = contItems;
                    modal.style.display = "none";
                });

                btnNo.addEventListener("click", () => {
                    modal.style.display = "none";
                });
            });

            //OPTIONS FILTER
            active.addEventListener("click", () => {
                if (!divContainer.classList.contains("checked")) {
                    divContainer.style.display = "none";
                }
            });

            all.addEventListener("click", () => {
                divContainer.style.display = "flex";
            });

        } else {
            alert("Add a value in input new to do!");
        }
    }

    function removeTodo(event) {
        const check = event.path;
        check[2].classList.toggle("checked");

        const clickRemove = document.querySelectorAll("#remove-task");

        clickRemove.forEach((item) => {
            item.addEventListener("click", (event) => {
                if (check[2] === event.path[2] && check[2].classList.contains("checked")) {
                    completedActivitys.push(event.path[2].children[0].children[2]);
                    event.path[2].remove();
                    contItems--;
                    amount.innerText = contItems;
                }
            });
        });
    }

    function activesCompleted() {
        const html = document.documentElement;
        const containerModalActivitys = document.getElementById("myModal-activitys");
        const containerActivitys = document.getElementById("container-activitys");
        const closeModal = document.querySelector(".close-modal");

        containerModalActivitys.style.display = "flex";

        closeModal.addEventListener("click", () => {
            containerModalActivitys.style.display = "none";
        })

        html.addEventListener("click", (event) => {
            if (containerModalActivitys === event.target) {
                containerModalActivitys.style.display = "none";
            }
        })

        completedActivitys.forEach((activity) => {
            containerActivitys.appendChild(activity);
        });
    }
}
//event.path[2] de acordo com a quantidade de divs no innerHTML na function addTodo,
//caso altere a quantidade de divs, o índice também deve ser alterado.