console.log('we checked')
let btn = document.getElementById('gobtn');
btn.addEventListener('click', searchWord);

function searchWord() {
    let word = document.getElementById('word');

    let xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.txt', true);
    
    xhr.onload = function () {
        if (this.status === 200) {
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let definations = obj.results;
            console.log(definations)
            let div = document.getElementById('info');
            let html = `<h2>${obj.word}</h2>`;
            definations.forEach(function (element) {
                html += `<div>${element.definition}</div>`;
            })
            div.innerHTML = html;

        }
        else {
            console.log('some error occured');
        }
    }
    xhr.send();
    console.log('we are done');
}