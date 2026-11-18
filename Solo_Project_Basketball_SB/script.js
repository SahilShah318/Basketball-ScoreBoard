
let count_home = 0;
let count_guest = 0;
let home_sc = document.getElementById("h1hme");
let guest_sc = document.getElementById("h1gust");



function H_btn1 (){
count_home+=1;
home_sc.textContent=count_home;


}
function H_btn2 (){
count_home+=2;
home_sc.textContent=count_home;
}
function H_btn3 (){
count_home+=3;
home_sc.textContent=count_home;
}
function G_btn1 (){
count_home+=1;
guest_sc.textContent=count_home;
}
function G_btn2 (){
count_home+=2;
guest_sc.textContent=count_home;
}
function G_btn3(){
count_home+=3;
guest_sc.textContent=count_home;
}
