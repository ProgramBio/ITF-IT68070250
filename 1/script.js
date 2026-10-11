const btnAdd = document.getElementById("btnAdd")
const divList = document.getElementById("divList")
const in_list = document.getElementById("in_list")
let currentId = 1

function createList(text) {
    let div = document.createElement("div")
    div.classList.add("list")
    div.id = "list-" + ++currentId

    let span = document.createElement("span")
    span.textContent = text

    let button = document.createElement("button")
    button.setAttribute("onclick", `deleteList(${currentId})`)
    button.type = "button"
    button.textContent = "ลบ"

    div.appendChild(span)
    div.appendChild(button)

    return div
}

function updateStorage() {
    let temp_storage = []

    divList.childNodes.forEach((element) => {
        temp_storage.push(element.childNodes.item(0).textContent)
    })

    localStorage.setItem("todo", JSON.stringify(temp_storage))
}

btnAdd.addEventListener("click", () => {
    if (in_list.value.trim() != "") {
        divList.appendChild(createList(in_list.value.trim()))
        in_list.value = ""

        updateStorage()
    } else {
        alert("กรุณาใส่ข้อความก่อน!")
    }
})

function deleteList(id) {
    divList.removeChild(document.getElementById(`list-${id}`))
    updateStorage()
}

window.onload = () => {
    JSON.parse(localStorage.getItem("todo")).forEach(element => {
        divList.appendChild(createList(element))
    });
}