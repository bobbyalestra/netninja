const wmf = document.querySelector('#book-list li:nth-child(2).name');


let books = document.querySelector('#book-list li .name')

books = document.querySelectorAll('#book-list li .name');


Array.from(books).forEach(function(book){
    console.log(book)
});