// logic for this code
showNotes();
// markImp(0);
let addbtn = document.getElementById('addbtn');
addbtn.addEventListener('click', function () {
    let addText = document.getElementById('addText');
    let notes = localStorage.getItem('notes');
    let mark = localStorage.getItem('mark');
    if (mark == null) {
        markObj = [];
    }
    else {
        markObj = JSON.parse(mark);
    }
    if (notes == null) {
        markObj = [];
        // noetesobj =[];
    }
    else {
        noetesobj = JSON.parse(notes);
        // markObj=JSON.parse(mark);
    }
    markObj.push(0);
    noetesobj.push(addText.value);
    localStorage.setItem('notes', JSON.stringify(noetesobj));
    localStorage.setItem('mark', JSON.stringify(markObj));
    addText.value = "";

    showNotes();
})
function showNotes() {
    let notes = (localStorage.getItem("notes"));
    let mark = localStorage.getItem('mark');
    if (mark == null) {
        markObj = [];
    }
    else {
        markObj = JSON.parse(mark);
    }
    if (notes == null) {
        noetesobj = [];
    }
    else {
        noetesobj = JSON.parse(notes);
    }
    let html = "";
    noetesobj.forEach(function (element, index) {
        html += `
        <div class="card cards mx-2 my-2" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text">${element}</p>
            <button id="${index}" onclick='delNote(this.id)' class="btn btn-dark">Delete Note</button>
        </div>
        <button id="${index}" class="btn btn-outline-warning btn-sm " onclick="markImp(this.id)" >Mark Important </button>
    </div>`

        // console.log(markObj)

    });
    let notesElm = document.getElementById('notes');
    if (noetesobj.length != 0) {
        notesElm.innerHTML = html;
        // console.log(markObj)
        Array.from(markObj).forEach(function (element, index) {
            if (element == 1) {
                let cards = document.getElementsByClassName('cards');
                //  console.
                Array.from(cards).forEach(function (e) {
                    let target = e.getElementsByTagName('button')[1];
                    if (target.id == index) {
                        e.setAttribute('class', 'bg-info card cards mx-2 my-2');
                        target.innerText = "Marked";
                        // console.log(target);
                        target.setAttribute('class', 'btn btn-warning btn-sm');
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
    let mark = localStorage.getItem('mark');
    if (mark == null) {
        markObj = [];
    }
    else {
        markObj = JSON.parse(mark);
    }
    if (notes == null) {
        noetesobj = [];
    }
    else {
        noetesobj = JSON.parse(notes);
    };
    noetesobj.splice(index, 1);
    markObj.splice(index, 1);
    mark = JSON.stringify(markObj);
    localStorage.setItem('mark', mark);

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
    let mark = localStorage.getItem('mark');
    if (mark == null) {
        markObj = [];
    }
    else {
        markObj = JSON.parse(mark);
    }
    markObj[id] = 1;
    localStorage.setItem('mark', JSON.stringify(markObj));

    let cards = document.getElementsByClassName('cards');
    //  console.log(cards)
    // Array.from(cards).forEach(function (element) {
    //     if (element.getElementsByTagName('button')[1].id === id) {

    //         element.setAttribute('class', 'bg-info card cards mx-2 my-2');
    //         let target = element.getElementsByTagName('button')[1];
    //         target.innerText = "Unmark";
    //         console.log(target);
    //         target.setAttribute('class', 'btn btn-warning btn-sm');

    //     }
        Array.from(markObj).forEach(function (element, index) {
            if (element == 1) {
                Array.from(cards).forEach(function (e) {
                    let target = e.getElementsByTagName('button')[1];
                    if (index == target.id) {
                        e.setAttribute('class', 'bg-info card cards mx-2 my-2');
                        target.innerText = "Marked";
                        // console.log(target);
                        target.setAttribute('class', 'btn btn-warning btn-sm');
                        target.addEventListener('click', unmark(id));
                    }

                });
            };
        });
    
};


function unmark(id){
    // console.log('reachd')
    // let mark = localStorage.getItem('mark');
    // if (mark == null) {
    //     markObj = [];
    // }
    // else {
    //     markObj = JSON.parse(mark);
    // }
    // markObj[id] = 0;
    // localStorage.setItem('mark', JSON.stringify(markObj));
    // let cards = document.getElementsByClassName('cards');
    // Array.from(cards).forEach(function (e) {
    //     let target = e.getElementsByTagName('button')[1];
    //     if (id == target.id) {
    //         e.setAttribute('class', 'bg-info card cards mx-2 my-2');
    //         target.innerText = "Mark Important";
    //         // console.log(target);
    //         target.setAttribute('class', 'btn btn-outline-warning btn-sm');
    //         target.addEventListener('click', markImp(id));
    //     }

    // });
   
}
