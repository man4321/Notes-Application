// logic for this code
showNotes();
// markImp(0);
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function () {
    let addText = document.getElementById('addText');
    let addTitle = document.getElementById('title');

    let notes = localStorage.getItem('notes');
    
    if (notes == null) {
        notesObj = [];
        
    }
    else {
        noetesobj = JSON.parse(notes);
    
    }
    let data={
        tite:addTitle.value,
        text:addText.value,
        mark:0
    }
    // markObj.push(0);
    noetesobj.push(data);
    localStorage.setItem('notes', JSON.stringify(noetesobj));
    // localStorage.setItem('mark', JSON.stringify(markObj));
    addText.value = "";
    addTitle.value="";

    showNotes();
})
function showNotes() {
    let notes = (localStorage.getItem("notes"));
    
    if (notes == null) {
        noetesobj = [];
    }
    else {
        noetesobj = JSON.parse(notes);
    }
    let html = "";
    // let titleHadding = "";
    
    noetesobj.forEach(function (element, index) {
        html += `
        <div class="card cards mx-2 my-2" style="width: 18rem; background-color: #fcd5ce">
        <div class="card-body">
            <h5 class="card-title">${element.tite}</h5>
            <p class="card-text">${element.text}</p>
            <button id="${index}" onclick='delNote(this.id)' class="btn btn-dark">Delete Note</button>
        </div>
        <button id="${index}" class="btn btn-outline-danger btn-sm"  onclick="markImp(this.id)" >Mark Important </button>
    </div>`

        // console.log(markObj)

    });
    let notesElm = document.getElementById('notes');
    if (noetesobj.length != 0) {
        notesElm.innerHTML = html;
        // console.log(markObj)
        Array.from(noetesobj).forEach(function (element, index) {
            if (element.mark == 1) {
                let cards = document.getElementsByClassName('cards');
                //  console.
                Array.from(cards).forEach(function (e) {
                    let target = e.getElementsByTagName('button')[1];
                    if (target.id == index) {
                        e.setAttribute('class', 'bg-info card cards mx-2 my-2');
                        target.innerText = "Marked";
                        // console.log(target);
                        target.setAttribute('class', 'btn btn-primary btn-sm');
                    };

                });

                // console.log('reached')
            }
        })
    }
    else {
        notesElm.innerHTML = `Nothing to show! use above function to add notes `;
    }
}

//function to delete a note
function delNote(index) {
    console.log('del note is called')
    let notes = localStorage.getItem('notes');
   
    if (notes == null) {
        noetesobj = [];
    }
    else {
        noetesobj = JSON.parse(notes);
    };
    noetesobj.splice(index, 1);
    

    notes = JSON.stringify(noetesobj);
    localStorage.setItem('notes', notes);
    showNotes();


}
let searchTxt = document.getElementById('searchtxt');
searchTxt.addEventListener('input', function () {
    let inputVal = searchTxt.value.toLowerCase();
    let cards = document.getElementsByClassName('cards');
    Array.from(cards).forEach(function (element) {
        let data = element.getElementsByTagName('p')[0].innerText;
        if (data.includes(inputVal)) {
            element.style.display = 'block'
        }
        else {
            element.style.display = 'none';
        }

    })
    // console.log(inputVal)

})
function markImp(id) {
    // console.log('clicked',id);
    let note = localStorage.getItem('notes');
    if (note == null) {
        noteObj = [];
    }
    else {
        noteObj = JSON.parse(note);
    }
    noteObj[id].mark = 1;
    localStorage.setItem('notes', JSON.stringify(noteObj));

    let cards = document.getElementsByClassName('cards');
  
    console.log(noteObj)
        Array.from(noteObj).forEach(function (element, index) {
            if (element.mark == 1) {
                Array.from(cards).forEach(function (e) {
                    let target = e.getElementsByTagName('button')[1];
                    if (index == target.id) {
                        e.setAttribute('class', 'bg-info card cards mx-2 my-2');
                        target.innerText = "Marked";
                        // console.log(target);
                        target.setAttribute('class', 'btn btn-primary btn-sm');
                        // target.addEventListener('click', unmark(id));
                    }

                });
            };
        });
    
};


