console.log("Alarm clock");
let time = document.getElementById('time');
let date = document.getElementById('date');
let update_loop= setInterval(liveTime,1000);

let alarmTime="Not set";
let setAlarm = document.getElementById('set');
let setButton = document.getElementById('alarmSet');



setButton.addEventListener('click',()=>{
    let Alarm = setAlarm.value;
    console.log(Alarm);
    alarmTime = Alarm;
    console.log(typeof alarmTime);
    setAlarm.innerText="";
})


    let audio = new Audio('http://www.noa-soft.com/DownLoadFiles/alarm_beep.wav');
    
  


function liveTime(){
    let today = new Date();
    date.innerHTML=`Date:-${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`
    let hours = today.getHours();
    let minutes = today.getMinutes();
    minutes = (minutes<10)? "0"+minutes: minutes;
    let seconds = today.getSeconds();
    seconds = (seconds<10)?"0"+seconds:seconds;
    time.innerHTML= `${hours} : ${minutes} : ${seconds}`;
    let match = `${hours}:${minutes}`;
    let alarmTimeDisplay = document.getElementById('alarmTimeDisplay');
    alarmTimeDisplay.innerText=`Alarm Time is at: ${alarmTime}`;
    if(match==alarmTime){
        // alert('alaram time');
        audio.play();
        let playPause=document.getElementById('main');
        let button = document.createElement('button');
        button.innerText='Stop alarm';
        button.setAttribute('class','btn btn-danger');
        button.addEventListener('click',()=> {
            let playPause=document.getElementById('main');
            audio.pause(); playPause.removeChild(button);});
        playPause.appendChild(button);
        alarmTime=`Not set`;

    }
    };

    let people = ['manohar ','kavith','prakash','prakas'];
    

    // traditonal for loop
    // for (let index = 0; index < people.length; index++) {
    //     const element = people[index];
    //     console.log(element);
        
    // }

    obj ={
        man:'kavitha',
        age:32,
        work: 'nothing'

    }
    //  for (let index = 0; index < Object.keys(obj).length; index++) {
    //     const element = obj[Object.keys(obj)[index]];
    //     console.log(element);
        
    // }
    // for in loop in objects
    for(let key in obj){
        console.log(obj[key]);
    }
    // we can use for in with stirng to loop through all the characters.
    
    
     let myString = "this is my stirng";
    // for(let index in myString){
    //     console.log(myString[index])
    // }

//---------------for of loop----------------
for(let name of myString){
    console.log(name);
}