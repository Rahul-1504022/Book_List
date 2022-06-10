//define UI
let form = document.querySelector('#book-form');
let bookList = document.querySelector('#book-list');









// book class

class Book{
    constructor(title , author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

//UI class
class UI{

    static addToBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href = "#" class = "delete">X</a></td>`

        list.appendChild(row);
    }
    static clearFields(book){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';

    }
    static showAlert(message,classname){
        let div = document.createElement('div');
        div.className = `alert ${classname}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');
        container.insertBefore(div,form);

        setTimeout(function(){
            document.querySelector('.alert').remove();
        },3000); //timeout function clear div after 3000 ms


    }

    static deleteFromBook(target){
        if(target.hasAttribute('href')){
            let bookName = target.parentElement.parentElement;
            bookName.remove();
        }
    }
}


//define function
//add new book
function newBook(e){
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;
    
    if(title === '' || author === '' || isbn === ''){
        UI.showAlert("Please fill all the fields","error");
    }
    else{
    //book object created
    let book = new Book(title , author , isbn);
    
    UI.addToBookList(book);//add book font end
    UI.showAlert("Book added successfully!","success");
    UI.clearFields(book);//clear the current value after book added
    }


    e.preventDefault();
}

//remove book from front end
function removeBook(e){
    UI.deleteFromBook(e.target);
    if(e.target.hasAttribute('href')){
        UI.showAlert("Book removed successfully!",'success');
    }
    
    e.preventDefault();
}




//add eventlistener
form.addEventListener('submit',newBook);
bookList.addEventListener('click',removeBook);