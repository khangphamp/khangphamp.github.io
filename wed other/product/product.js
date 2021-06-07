var A=document.querySelector.bind(document);
var AA=document.querySelectorAll.bind(document);
// <fixed menu 
window.onscroll=()=>{
    if(window.scrollY>=116){
       A(".contenter_shop_categogy_warp_fixed").style.display="flex";
    }
    else{
        A(".contenter_shop_categogy_warp_fixed").style.display="none";
    }
}
//fixed menu  >
A(".shop_area_select").onclick=function(){
    A(".dropdown-menu_wrap_select").classList.toggle("show");   
}
var check_news_rules= A(".news_rules").querySelectorAll("i");
var input=A(".news_rules_check");
var shop=A(".shop");
input.onchange=() =>{
    if(input.checked==true){
        check_news_rules[0].classList.remove("hidden");
        check_news_rules[1].classList.add("hidden");
        A(".btn_register").style.backgroundColor="#71be0f";
        A(".btn_register").style.cursor="pointer";
    }
    else{
        check_news_rules[0].classList.add("hidden");
        check_news_rules[1].classList.remove("hidden");
        A(".btn_register").style.backgroundColor="#a3d564";
        A(".btn_register").style.cursor="no-drop";
        
    }
};
A(".shop_news").onclick=function(){
    A(".dropdown-menu_wrap_news").classList.toggle("show");
}
// open dropdown when click 

openClick=function(data){
   data.parentElement.querySelector(".dropdown-menu").classList.toggle("show");
}
window.onclick = function(event){
    let lists=(document.querySelectorAll('.dropdown-menu'));
    for(var i=0;i<lists.length;i++){
         if(lists[i].getAttribute("class").indexOf("show")!==-1){
            if(!lists[i].contains(event.target) && !lists[i].parentElement.contains(event.target)){
                lists[i].classList.remove("show");
            }
                
            }
        }
};
// nav_mobi
A(".m_header_nav_icon").onclick=()=>{
    A(".m_header_nav").style.display="block";
    A(".overlay_nav").style.display="block";
    A(".nav_close").style.display="flex";
}
A(".nav_close").onclick=()=>{
    A(".m_header_nav").style.display="none";
    A(".overlay_nav").style.display="none";
    A(".nav_close").style.display="none";
}
            // Carousel  pointer-events: none; tren pc cho chay muot;touch-action: none; tren mobi cho chay muot
// let Carousel=A('.Carousel');
// let innerCarousel=A(".innerCarousel");
// let pressed=false;
// let startx;
// let x;
// let down;
// let up;
// let move;
// if(window.PointerEvent){
//     down='pointerdown';
//     up='pointerup';
//     move='pointermove';

// }else{
//     down='mousedown';
//     up='mouseup';
//     move='mousemove';
// }

// Carousel.addEventListener(down,e =>{
//     changeview=(data)=>{
//         console.log(data);
//         data.style.border="2px solid #71be11";
      
//     }

//     pressed = true;
//     startx =e.offsetX-innerCarousel.offsetLeft;
//     // A(".innerCarousel").style.pointerEvents="";
   

// })
// // Carousel.addEventListener('offhover',e =>{
// //     pressed = false;
// // })
// // Carousel.addEventListener('mouseenter',e =>{
// //     Carousel.style.cursor="grab";
// // })
// // Carousel.addEventListener('mouseleave',e =>{
// //     // count=0;
// // })
// // Carousel.addEventListener('mouseup',e =>{
// //     Carousel.style.cursor="grab";
// // })
// window.addEventListener(up,e =>{
//     A(".innerCarousel").style.pointerEvents="auto";
//     pressed=false;
// })
// Carousel.addEventListener(move,(e)=>{
   
//     if(!pressed) return;
//     A(".innerCarousel").style.pointerEvents="none";
//         e.preventDefault();
//         x=e.offsetX;
//         innerCarousel.style.left=`A{x-startx}px`;
//         checkboundary();
// });
// function checkboundary(){
//     let outer=Carousel.getBoundingClientRect();
//     let inner=innerCarousel.getBoundingClientRect();
//     if(parseInt(innerCarousel.style.left)>0){
//         innerCarousel.style.left="0px";
//     }
//     else if(inner.right<outer.right){
//         innerCarousel.style.left=`-A{inner.width - outer.width}px`;
//     }
// }
// // phan anh click
// // A(".innerCarousel_img").addEventListener("click",()=>{
    
// // });

// onlick xem them
openviewAll=(data)=>{
    if(data.querySelector("span").innerText=="Xem thêm"){
    document.querySelector(".box_info_other_wrap").style.height="auto";
    data.innerHTML="<span>Thu gọn</span><i class=\"fas fa-sort-up\"></i> ";
    }
    else{
        document.querySelector(".box_info_other_wrap").style.height="300px";
        data.innerHTML="<span>Xem thêm</span> <i class=\"fas fa-sort-down\"></i> ";

    }
}

