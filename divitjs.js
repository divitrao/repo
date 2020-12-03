

function calculator(){

    var q = document.getElementById('age').value ;
    // console.log(q)
    var e = parseInt(q)
    // console.log(q)
    // console.log(e)
    // var q = prompt('what is your age??')
    let w  = e*365;
    var h1 = document.createElement('h1');
    
    var textanswer = document.createTextNode('your are ' +w+ ' old');
    h1.appendChild(textanswer);
    h1.setAttribute('id','calc')
    document.getElementById('answer').appendChild(h1);
    console.log(w);
}   

function reset(){
document.getElementById('calc').remove();

}

function generatecat(){

var img = document.createElement('img');
img.setAttribute('id','newcatimage')
var div = document.getElementById('flex-container');
img.src = ' http://thecatapi.com/api/images/get?format=src&type=gif&size=small';
div.appendChild(img);
}

function removecat(){

    document.getElementById('newcatimage').remove();
}

function game(yourchoice)
{   
    console.log(yourchoice);
    console.log(yourchoice.src);
    console.log(yourchoice.id);
    var humanchoice = yourchoice.id;
    var computerchoices =  element(rands());
    console.log('human chosed ', humanchoice);
    console.log('bot chosed ', computerchoices);
    var chickendinner = winner(humanchoice,computerchoices);
    console.log(chickendinner);

    // yourchoice vs computerchoice
    // disply
     messages = messageboxs(chickendinner);
    console.log(messages);
    
     display(yourchoice.id,computerchoices,messages);
    

}

function rands(){
   var floor = Math.random()*3;
   var intnumber = Math.floor(floor);
//    console.log(intnumber)
   return  intnumber;
}

function element(intnumber){

    return ['stone','paper','scissor'][intnumber]
}
    
function winner(humanchoice,computerchoices){

  var data = {
    'stone': {'stone':0.5, 'paper':0, 'scissor':1 },
    'paper': {'stone':1, 'paper':0.5, 'scissor':0 },
    'scissor': {'stone':0, 'paper':1, 'scissor':0.5 }

  }
  var human = data[humanchoice][computerchoices];
  var bot = data[computerchoices][humanchoice];
//   return [bot,human];
  return [human,bot];


}

function messageboxs([human,bot]){

    if (human==0 && bot==1)  {

        return  {'message': 'you lost','color':'red'};
    } 

    else if (human==0.5 && bot==0.5){

        return {'message':'you tied','color':'yellow'};
    }

    else {

        return {'message':'you won','color':'green'}
    }
}
   
    

 function display(humanImageChoice,botImageChoice,message){

   var imagedata = {

        'stone': document.getElementById('stone').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src
    }
    // a = getElementById('stone').src
    // console.log(a);

    
     document.getElementById('stone').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissor').remove();

    var humachoiceimage = document.createElement('div');
    var botchoiceimage = document.createElement('div');
    var messagedisplay = document.createElement('div');
    var buttonplayagain = document.createElement('BUTTON')

     humachoiceimage.innerHTML = "<img src='" + imagedata[humanImageChoice] + "'height=200 width=300 style='box-shadow: 0px 10px 50px rgba(37,50,233,1);'  >"
     messagedisplay.innerHTML = "<h1 style='color: " +message['color'] +"; font-size: 60px; padding: 30px; '>" + message['message'] + "</h1>"
     botchoiceimage.innerHTML = "<img src='" + imagedata[botImageChoice] + "'height=200 width=300 style='box-shadow: 0px 10px 50px rgba(235, 58, 14,1);'>"
     buttonplayagain.innerHTML = 'PLAY AGAIN';
    //  document.getElementById('flex-box-div').style.padding = "50px 10px 20px 30px";
     document.getElementById('flex-box-div').appendChild(humachoiceimage);
     document.getElementById('flex-box-div').appendChild(messagedisplay);
     document.getElementById('flex-box-div').appendChild(botchoiceimage);
    //  document.getElementById('flex-box-div').appendChild(messagedisplay);
     document.getElementById('playagainbutton').appendChild(buttonplayagain).style.background="oranage"



 }

 function playagain(){



    window.location.reload();
 }

 let all_buttons = document.getElementsByTagName('button')
 console.log(all_buttons)

 let copycolor=[];

for(i=0;i<=all_buttons.length;i++){

    copycolor.push(all_buttons[i].classList[1]);
}

// copycolor.li

// console.log(copycolor)

 function changecolor(colorselected){

    
    if(colorselected.value==='red'){

        redcolor();
    }
    else if(colorselected.value==='green'){

        greencolor();
    }
    else if(colorselected.value==='reset'){

        resetvalue();
    }

    else{

        randomcolor();
    }

    function redcolor(){

        // alert('red');
        for(let i=0;i<=all_buttons.length;i++){

            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add('red');
        }

    }
    function greencolor(){

        // alert('green');
        for(let i=0;i<=all_buttons.length;i++)
        {all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('green');}
    }
    function resetvalue(){

        // alert('reset');
        for(let i=0;i<=all_buttons.length;i++){
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(copycolor[i]);
        }

    }
    function randomcolor(){

        // alert('random');

        for(let i=0;i<=all_buttons.length;i++){

            let rando = Math.floor(Math.random()*4);
            let colors = ['red','green','generator','button1']
            all_buttons[i].classList.remove(all_buttons[i].classList[1]);
            all_buttons[i].classList.add(colors[rando]);
        }


    }
 }

 document.getElementById("HITS").addEventListener("click",hit);

 function hit(){

    alert('you pressed hit');
 }


