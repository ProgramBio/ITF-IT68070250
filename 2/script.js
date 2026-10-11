const todo_input = document.getElementById("in_list")
const todo_button = document.getElementById("btnAdd")
const todo_div = document.getElementById("divList")

let currentId = 0

function updateStorage() {
    let temp_storage = []

    divList.childNodes.forEach((element) => {
        temp_storage.push(element.childNodes.item(0).textContent)
    })

    localStorage.setItem("todo", JSON.stringify(temp_storage))
}

function createElement(text){
    let divcreate = document.createElement("div")
    divcreate.classList.add("list")
    divcreate.id = "list-" + ++currentId

    let spanc = document.createElement("span")
    spanc.textContent = text

    let button = document.createElement("button")
    button.setAttribute("onclick", "deleteList(" + currentId + ")")
    button.textContent = "ลบ"

    divcreate.appendChild(spanc)
    divcreate.appendChild(button)

    return divcreate

}


function deleteList(id){
    todo_div.removeChild(document.getElementById("list-"+id))
    updateStorage()
}

todo_button.addEventListener("click", ()=>{
    if (todo_input.value.trim() == ""){
        alert("กรุณาใส่ข้อความ")
    } else{
        todo_div.appendChild(createElement(todo_input.value))
        todo_input.value = ""
        updateStorage()
    }
})

window.onload = ()=> {
    JSON.parse(localStorage.getItem("todo")).forEach((element) => {
        todo_div.appendChild(createElement(element))
    })
}