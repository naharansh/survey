//for dark mode switch
let x=document.querySelector("#dark");
let y=document.querySelector("body")
let z=document.querySelector("h2");
let a=document.querySelectorAll(".t");
let i=document.querySelector("#fname")
let e=document.querySelector("#err");
let l=document.querySelector("#lname")
let r=document.querySelector("#er")
let m=document.querySelector("#mobe")
let n=document.querySelector("#mob")
let q=document.querySelector("#mail")
let t=document.querySelector("#mat")
let j=document.querySelector("#add");
let o=document.querySelector("#ter")
let question1=document.querySelectorAll("#text input");
let astrinck1=document.querySelector("#astrick");
let question2=document.querySelectorAll("#text1 input");
let astrinck2=document.querySelector("#astrick1");
let question3=document.querySelectorAll("#text2 input");
let astrinck3=document.querySelector("#astrick2");
let question4=document.querySelectorAll("#text3 input");
let astrinck4=document.querySelector("#astrick3");
let question5=document.querySelectorAll("#text4 input");
let astrinck5=document.querySelector("#astrick4");
let lab=document.querySelectorAll(" #para label");
let para=document.querySelectorAll("#para p");
//console.log(question1);
console.log(astrinck2)
let swit="light";
x.addEventListener("click",()=>{
    if(swit=="light")
    {
        swit="dark";
        let d=document.querySelector("header nav")
        d.classList.add("toggle")
        y.classList.add("bod")
        let h=document.querySelector("header h1").style.color="white"
        z.classList.add("ter");
        white();
        col();
        blurt();
    }
    else
    {
        swit="light"
        let d=document.querySelector("header nav")
        d.classList.remove("toggle")
        y.classList.remove("bod")
        z.classList.remove("ter");
        let h=document.querySelector("header h1").style.color="black"
        blac();
        hel();
        row();
    }
})
const white=()=>{
    const arr=Array.from(a)
    for(let x in arr)
    {
        let g=arr[x];
        g.style.color="white";
    }
}
const blac=()=>{
    const arr=Array.from(a)
    for(let x in arr)
    {
        let g=arr[x];
        g.style.color=" indigo";
    }
}
const col=()=>{
    const ree=Array.from(lab)
    for(let f in ree)
    {
        let g=ree[f];
        g.style.color="#F8F8FF";
    } 
}
const blurt=()=>{
    const car=Array.from(para)
    for(let k in car)
    {
        let g=car[k]
        g.style.color="#F0FFF0"
    }
}
const hel=()=>{
    const car1=Array.from(lab)
    for(let k in car1)
    {
        let g=car1[k]
        g.style.color="#0F52BA";
    }
}
const row=()=>{
    const car2=Array.from(para)
    for(let k in car2)
    {
        let g=car2[k]
        g.style.color="#696969";
    }
}
//form validation
let b=document.querySelector("#button").addEventListener("click",()=>{
 
    if(checkname()== true)
    {
        e.innerHTML="";
        i.classList.remove("err")
        //console.log("lnmae is called")
        if(lcheck()==true)
        {
            r.innerHTML="";
            l.classList.remove("err")     
            if(mobile()==true)
            {
                n.innerHTML="";
                m.classList.remove("err")
                if(check()==true)
                {
                    t.innerHTML=""
                    q.classList.remove("err")
                  if(address()==true)
                  {
                    o.innerHTML=""
                    j.classList.remove("err")
                    if(solution1()==true)
                    {
                        astrinck1.innerText="";
                        astrinck1.classList.remove("ast")
                       if(solution2()==true)
                        {
                            astrinck2.innerHTML="";
                            astrinck2.classList.remove("ast") 
                            if(solution3()==true)
                            {
                                astrinck3.innerHTML="";
                                astrinck3.classList.remove("ast")
                                if(solution4()==true)
                                {
                                    astrinck4.innerHTML="";
                                    astrinck4.classList.remove("ast")
                                    if(sol5()==true)
                                    {
                                        astrinck5.innerHTML="";
                                        astrinck5.classList.remove("ast")
                                        alert("Thank You for the feedback the form is submitted");
                                    }
                                    
                                }
                            }
                        }
                       
                    }
                    
                  
                  }
                }
            }
        }
    }
    else
    {
        alert("name is empty");
    }
})
const checkname=function(){
    if(i.value == "" )
    {
        e.innerHTML="name is required";
        i.classList.add("err")
        return false;
           
    }
  /*  if(!i.value.match("\b[A-Z][a-z]+(?:[-'][A-Za-z]+)*(?:\s[A-Z][a-z]+(?:[-'][A-Za-z]+)*)*"
))
    {
        e.innerHTML="proper name is required";
        i.classList.add("err")
        return false;
    }*/
    return true;
    
    
}
const lcheck =function()
{
    if(l.value.length==0)
    {
        r.innerHTML="Last name is required";
       l.classList.add("err");
        return false;
    }
    /*  if(!i.value.match("\b[A-Z][a-z]+(?:[-'][A-Za-z]+)*(?:\s[A-Z][a-z]+(?:[-'][A-Za-z]+)*)*"
))
    {
        e.innerHTML="proper name is required";
        i.classList.add("err")
        return false;
    }*/
    return true;
}
const mobile =function(){
    if(m.value=="")
    {
        n.innerHTML="mobile number is required"
        m.classList.add("err")
        return false;
    }
    if(m.value.length>10 || m.value.length<10)
    { 
        n.innerHTML="number should be 10 digit"
        m.classList.add("err")
        return false;
    } 
    return true;
}
const check=function()
{
    if(q.value.length == 0)
    {
        t.innerHTML="e-mail is  not valid"
        q.classList.add("err")
        return false;
    }
    if(!q.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
))
{
    t.innerHTML="proper e-mail should be enter"
    q.classList.add("err")
    return false;
}
    return true;
}
const address=function(){
    if(j.value.length == 0)
    {
        o.innerHTML="Address should be enter"
       j.classList.add("err")
        return false;
    }
 /*  if(!i.value.match("\b[A-Z][a-z]+(?:[-'][A-Za-z]+)*(?:\s[A-Z][a-z]+(?:[-'][A-Za-z]+)*)*"
))
    {
        e.innerHTML="proper name is required";
        i.classList.add("err")
        return false;
    }*/
    return true;
}
const solution1=()=>{
    const arw=Array.from(question1)
    console.log(arw);
    if(arw[0].checked == false && arw[1].checked == false && arw[2].checked == false && arw[3].checked == false)
    {
        astrinck1.innerText="*";
        astrinck1.ClassList.add("ast")
        return false;
    }
    /*else
    {
        astrinck1.innerText="";
        astrinck1.ClassList.remove("ast");
        alert("return true")
        return true;

    }*/
    return true
}
const solution2=()=>{
    const arq=Array.from(question2)
    console.log(arq)
    if(arq[0].checked == false && arq[1].checked == false && arq[2].checked == false &&arq[3].checked == false)
    {
        // console
        astrinck2.innerText="*";
        astrinck2.classList.add("ast");
        return false;
    }

    return true;
}
const solution3=()=>{
    const kar=Array.from(question3)
    if(kar[0].checked==false && kar[1].checked==false && kar[2].checked==false&& kar[3].checked==false)
    {
        astrinck3.innerHTML="*";
        astrinck3.classList.add("ast")   
        return false;
    }
    return true;
}
const solution4=()=>{
    const aar=Array.from(question4)
    if(aar[0].checked==false && aar[1].checked==false)
    {
        astrinck4.innerHTML="*";
        astrinck4.classList.add("ast")   
        return false;
    }
    return true;
}
const sol5=()=>{
    const ar=Array.from(question5)
    if(ar[0].checked==false && ar[1].checked==false)
    {
        astrinck5.innerHTML="*";
        astrinck5.classList.add("ast")   
        return false;
    }
    return true;

}