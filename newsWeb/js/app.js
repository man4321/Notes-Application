console.log("news web app")
// 51b5096b251740a7849420b3261ece8a
let apiKey = '51b5096b251740a7849420b3261ece8a';
let source = '';
function setCategory(id){
    let cate=document.getElementById(id);
    source=cate.innerText;
    let xhr=new XMLHttpRequest();
    let newsHtml=``;
    xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=${source}&apiKey=${apiKey}`,true); 
    xhr.onload=function(){
        if(this.status===200){
            let json = JSON.parse(this.response);
            json = json.articles;
            console.log(json)
            let news = json[0].source.name;
            let img = json.urlToImage;
            let url = json.url;
            let title = json.title;
            let description = json.description;
            console.log(news);
            let hadding=document.getElementById('newsFrom');
            hadding.innerText=json[0].source.name;
            let html=``;
            json.forEach(element => {
                html=`<li class="media">
                 <img src="${element.urlToImage}" class="mr-3" alt="not found" height='150' width="200">
                <div class="media-body">
                    <h4 class="mt-0 mb-1">${element.title}</h4><hr>
                    ${element.description} <a href="${element.url}" target="_blank">Read more</a>
                    <br><br><br>
                </div>
            </li>`
            newsHtml+=html;
                
            });
            let appendNews = document.getElementById('newsList');
            appendNews.innerHTML=newsHtml;
    
        }
        else{
            console.log('some error occour')
        }
    }
    xhr.send();
}
// let loc = document.getElementById('addnews');
let newsHtml=``;

const xhr = new XMLHttpRequest();
xhr.open('GET',`https://newsapi.org/v2/top-headlines?country=in&category=${source}&apiKey=${apiKey}`,true);

xhr.onload=function(){
    if(this.status===200){
        let json = JSON.parse(this.response);
        json = json.articles;
        // console.log(json)
        let news = json[0].source.name;
        let img = json.urlToImage;
        let url = json.url;
        let title = json.title;
        let description = json.description;
        // console.log(news);
        let hadding=document.getElementById('newsFrom');
        hadding.innerText=json[0].source.name;
        let html=``;
        json.forEach(element => {
            html=`<li class="media">
             <img src="${element.urlToImage}" class="mr-3" alt="not found" height='150' width="200">
            <div class="media-body">
                <h4 class="mt-0 mb-1">${element.title}</h4><hr>
                ${element.description} <a href="${element.url}" target="_blank">Read more</a>
                <br><br><br>
            </div>
        </li>`
        newsHtml+=html;
            
        });
        let appendNews = document.getElementById('newsList');
        appendNews.innerHTML=newsHtml;

    }
    else{
        console.log('some error occour')
    }
}
xhr.send();
// search functionality....
let searchText = document.getElementById('searchText');
searchText.addEventListener('input',filterNews);
function filterNews(){
    let data = searchText.value;
    // console.log(data)
    let from = document.getElementsByTagName('li');
    // console.log(from);
    Array.from(from).forEach(element => {
        
        if((element.innerText).includes(data)){
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
        
    });


}
