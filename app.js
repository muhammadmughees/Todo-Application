var mainlist = document.getElementById('mainlist')
var todoInput = document.getElementById('inp')
function addtodo(){
    var inputText = todoInput.value
    var text = document.createTextNode(inputText)
    var li = document.createElement('li')
    li.setAttribute('class','list')
    li.appendChild(text)
    console.log(li)
    mainlist.appendChild(li)
    todoInput.value = "";

    var btnDiv = document.createElement('div')
    //====Create Delete Button====
    var deletebtn = document.createElement('button')
    deletebtn.setAttribute('class','btn')
    deletebtn.setAttribute('onClick','deleteTodo(this)')
    var deletebtnText = 'Delete Todo'
    var deleteText = document.createTextNode(deletebtnText)
    deletebtn.appendChild(deleteText)
    btnDiv.appendChild(deletebtn)
    

    //====Create Edit Button====
    var editbtn = document.createElement('button')
    editbtn.setAttribute('class','btn')
    editbtn.setAttribute('onClick','editTodo(this)')
    var editText = document.createTextNode('Edit Todo')
    editbtn.appendChild(editText)
    btnDiv.appendChild(editbtn)

    li.appendChild(btnDiv)
}

function deleteTodo(e){
    e.parentNode.parentNode.remove()
}

function editTodo(e){
    var tmt =  prompt('Change your text whatever you want!')
    console.log(e.parentNode.parentNode.childNodes[0])
    var listText = e.parentNode.parentNode.firstChild
    listText.nodeValue = tmt
}

function deleteAll(){
    mainlist.innerHTML = '';

}