console.log('I am here')
class Books {
      constructor(name,author,type){
        this.name=name;
        this.author=author;
        this.type=type;
    };
};
class Display{
    add(book){
        console.log("addding to ui");
        let addTable=document.getElementById('tableBody');
        let html=`<tr>
            <td>${book.name}</td>
            <td>${book.author}</td>
            <td>${book.type}</td>
             </tr>`;
        addTable.innerHTML+=html;
    
    
    }
    clear(){
        let form=document.getElementById('libraryForm');
        form.reset();
    
    }
    validate(book){
        if(book.name.length<=2 || book.author.length<=2){
           return false;
        }
        else{
             return true;
        }
    
    }
    show(type,message){
        let mess = document.getElementById('message');
        mess.innerHTML=`<div class="alert alert-${type} alert-dismissible fade show" role="alert">
        <strong>Messge:</strong> ${message}
        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">×</span>
        </button>
    </div>`;
    setTimeout(function(){
        mess.innerHTML="";
    },5000);
    
    }
    
};


//constructor
// function 
//Display constructor

let submitForm=document.getElementById('libraryForm');
submitForm.addEventListener('submit',submitLibraryForm);
function submitLibraryForm(e){
    e.preventDefault();
    // console.log('library form submited');
    let name=document.getElementById('bookName').value;
    let author = document.getElementById('author').value;
    let type;
     let fiction =document.getElementById('fiction');
     let programming =document.getElementById('programming');
     let cooking =document.getElementById('cooking');
     if(fiction.checked){
         type=fiction.value;
     }
     else if(programming.checked){
         type=programming.value;
     }
     else{
         type=cooking.value;
     }
     let book = new Books(name,author,type);
     console.log(book)
     let display = new Display();
     let message = "book added successfully..."

     if(display.validate(book)){
         display.add(book);
         display.show('success',message);
         display.clear();

     }
     else{
         
         display.show('danger','sorry you can not add this book');
     }
    
   


}