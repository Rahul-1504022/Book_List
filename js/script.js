//define UI
let form = document.querySelector('#book-form');










// book class

class book{
    constructor(title , author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}


//define function
function newBook(e){
    console.log('hello');
    e.preventDefault();
}



//add eventlistener
form.addEventListener('submit',newBook);