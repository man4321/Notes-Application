console.log('this is for prctice   ')

let body = document.getElementsByTagName('body')[0];
// console.lob
let html=`<div id='div'>this is first div</div>`;
body.innerHTML=html;

// let div=document.getElementById('div');
// function getData(){
//     let url="https://api.github.com/users/man4321/repos"
//      fetch(url).then((response)=>{
//          return response.json();
//      }).then((data)=> console.log(data));
// }

// getData();


//   async function getData(){
//       let url = "https://api.github.com/users/man4321/repos";
//        const users=await fetch(url);
//        const data = await users.json();
//        return data;
      
// }
// let a=  getData();
// a.then((d)=> console.log(d));


// regular expressions
// let reg = /manohar/;
// let str="Manohar is a goood programmer and manohar is best";
// // 1
// let result = reg.exec(str);
// console.log(result);
// // 2
// let res = reg.source
// // 3
// res = reg.test(str)
// console.log(res)
// // 4
// res = str.search(reg);
// console.log(res);
// // 5
// res = str.match(reg);
// console.log(res);
// // 6
// res=str.replace(reg,'Kavitha');
// console.log(res)


//character set-[];

// let regex = /m[a-z]nohar/;
let regex = /manoha{0,3}r/
regex = /m[aty]nohar/; // can be an a,t or y
regex = /m[^aty]nohar/; //cannot be any of a,t or y
regex = /m[a-zA-Z]no[h0-9]ar[0-9]/; // we can have as many character set as we want

// Quantifiers - we use {}
regex = /\sn{3}\s/ // n can occour exactly 2 times
const str = "man nn ";
if(str.match(regex)){
    console.log(`${str} matched with ${regex}`)
    console.log(str.match(regex));
}
else{
    console.log(`${str} does not with ${regex}`);
    console.log(str.match(regex));

}
let data = "+7(903)-343+34";
alert(data.match(/\d/g));