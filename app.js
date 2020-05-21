const list = document.querySelector('#book-list ul');

//delete button
list.addEventListener('click', function(e){
if(e.target.className == 'delete'){
    const li =e.target.parentElement;
    list.removeChild(li);
}
})

// add button

const addForm = document.forms['add-book'];

addForm.addEventListener('Submit', function(e){
    e.preventDefault();
    const value = document.querySelector('input[type = "text"]').value
   
})


// create element

const li = document.createElement('li')
const bookName = document.createElement('span')
const btn = document.createElement('span')

//add text
deleteBtn.textContent = 'delete'
bookName.textContent = value;


    // append to DOM

    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)
    