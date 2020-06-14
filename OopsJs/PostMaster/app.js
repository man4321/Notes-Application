//get data from client

let parametersBox = document.getElementById('parametersBox');
parametersBox.style.display='none';

let requestJsonBox = document.getElementById('requestJsonBox');
requestJsonBox.style.display='block';

let requestType = document.querySelector("input[name='requestType']:checked").value;
let contentType = document.querySelector("input[name='contentType']:checked").value;

let paramClick = document.getElementById('paramsRadio');
paramClick.addEventListener('click',()=>
{
    parametersBox.style.display='block';
    requestJsonBox.style.display='none';
})
let jsonRadio = document.getElementById('jsonRadio');
jsonRadio.addEventListener('click',()=>
{
    parametersBox.style.display='none';
    requestJsonBox.style.display='block';
})

let paramsKey =2;
let html = ``
let addParam = document.getElementById('addParam');
addParam.addEventListener('click',()=>{
html = `<div class="form-row" >
<label for="url" class="col-sm-2 col-form-label">Parameter ${paramsKey}</label>
<div class="col-md-4">
    <input type="text" class="form-control keys" id="parameterKey${paramsKey}" placeholder="Enter Parameter key ${paramsKey} ">
</div>
<div class="col-md-4">
    <input type="text" class="form-control values" id="parameterValue${paramsKey}" placeholder="Enter Parameter value ${paramsKey} ">
</div>
<button  class="btn btn-primary remove" >-</button>
</div>`
    let params = document.getElementById('params');
    params.innerHTML+=html;
    

//second way....(Also working....) only have to add this.id in parameters

// function removePara(id){
//     let removeParams =document.getElementById(`removeParams${id}`);
//     removeParams.remove();
//     paramsKey--;
// }

//Harry coding way.....
let rbuttons = document.getElementsByClassName('remove');
for( item of rbuttons){
item.addEventListener('click',(e)=>{
    e.target.parentElement.remove();
    paramsKey--;
})
}
paramsKey++;
});



//submit button.....
let submit = document.getElementById('submit');
submit.addEventListener('click',()=>{

let url = document.getElementById('url').value;
// let get = document.getElementById('get');
// let post = document.getElementById('post');
 let requestType = document.querySelector("input[name='requestType']:checked").value;
 let contentType = document.querySelector("input[name='contentType']:checked").value;

 if(contentType==='params'){
     data={};
     let key = document.getElementsByClassName('keys');
     let value = document.getElementsByClassName('values');
     Array.from(key).forEach(function(e,i){
         
        //  xyz={ e:value[i]};
        data[e.value]=value[i].value;
     })
     console.log(data);
    //  data=JSON.parse(data);
    }
 else{

    data = document.getElementById('requestJsonText').value;
    // console.log(data);

 }

//  console.log(url,requestType,contentType);

if(requestType==='GET'){
    fetch(url,{
        method: 'GET'
    })
    .then(response=> response.text())
    .then((text)=>{
        console.log(text)
        document.getElementById('responsePrism').innerHTML=text;
    });
    // }).catch((error)=>{
    //     document.getElementById('responsePrism').innerHTML="something went wrong"
    // });

}
else{
    fetch(url,{
        method: 'POST',
        body:data,
        headers:{
            "content-type":"application/json;charset=UTF-8"
        }
    })
    .then(response=> response.text())
    .then((json)=>{
        document.getElementById('responsePrism').innerHTML=json;
        

    }).catch((error)=>{
        document.getElementById('responsePrism').innerHTML="something went wrong"
    });


}

});


