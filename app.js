let inp=document.querySelector('input');
let btns=document.querySelectorAll('button');

for(let i=0;i<btns.length;++i){
    btns[i].addEventListener('click',()=>{
        let val=btns[i].innerText;
        if(val=='1'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='2'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='3'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='4'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='5'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='6'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='7'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='8'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='9'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='+'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='-'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='X'){
            inp.value=`${inp.value}*`;
        }
        else if(val=='/'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='.'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='0'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='AC'){
            inp.value="";
        }
        else if(val=="del"){
            if(inp.value.length){
                inp.value=inp.value.slice(0,inp.value.length-1);
            }
        }
        else if(val=='+/-'){
            console.log(inp[0]);
            if(inp.value[0]!='-'){
                inp.value=`-${inp.value}`;
            }
            else{
                if(inp.value[0]=='-'){
                    inp.value=inp.value.slice(1,inp.value.length);
                }
            }
        }
        else if(val=='%'){
            inp.value=`${inp.value}${val}`;
        }
        else if(val=='='){
            let equ=inp.value;
            try{
                inp.value=eval(equ);
            } 
            catch(err){
                console.log(err);
                inp.placeholder="enter valid input";
                inp.value="";
            }         
        }
    })
}

ScrollReveal({
    reset : true,
    distance: '80px',
    duration: 3000,
    delay: 200,
});

ScrollReveal().reveal('.body',{origin:'top'})
ScrollReveal().reveal('.values button',{origin:'bottom'});
ScrollReveal().reveal('h1',{origin:'left'})
ScrollReveal().reveal('.container',{origin:'right'})
