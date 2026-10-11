const name_input = document.getElementById("in_list")
const name_button = document.getElementById("btnAdd")
const name_div = document.getElementById("divList")

let currentId = 0

function updateStorage() {
    let temp_storage = []

    divList.childNodes.forEach((element) => {
        temp_storage.push(element.childNodes.item(0).textContent)
    })

    localStorage.setItem("name", JSON.stringify(temp_storage))
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
    name_div.removeChild(document.getElementById("list-"+id))
    updateStorage()
}

name_button.addEventListener("click", ()=>{
    if (name_input.value.trim() == ""){
        alert("กรุณาใส่ชื่อ")
    } else{
        name_div.appendChild(createElement(name_input.value))
        name_input.value = ""
        updateStorage()
    }
})

window.onload = ()=> {
    JSON.parse(localStorage.getItem("name")).forEach((element) => {
        name_div.appendChild(createElement(element))
    })
}