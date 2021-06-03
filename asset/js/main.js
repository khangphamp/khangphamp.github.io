var $=document.querySelector.bind(document);
var $$=document.querySelectorAll.bind(document);
// <fixed menu 
window.onscroll=()=>{
    if(window.scrollY>=116){
       $(".contenter_shop_categogy_warp_fixed").style.display="flex";
    }
    else{
        $(".contenter_shop_categogy_warp_fixed").style.display="none";
    }
}
//fixed menu  >
$(".shop_area_select").onclick=function(){
    $(".dropdown-menu_wrap_select").classList.toggle("show");   
}
var check_news_rules= $(".news_rules").querySelectorAll("i");
var input=$(".news_rules_check");
var shop=$(".shop");
input.onchange=() =>{
    if(input.checked==true){
        check_news_rules[0].classList.remove("hidden");
        check_news_rules[1].classList.add("hidden");
        $(".btn_register").style.backgroundColor="#71be0f";
        $(".btn_register").style.cursor="pointer";
    }
    else{
        check_news_rules[0].classList.add("hidden");
        check_news_rules[1].classList.remove("hidden");
        $(".btn_register").style.backgroundColor="#a3d564";
        $(".btn_register").style.cursor="no-drop";
        
    }
};
$(".shop_news").onclick=function(){
    $(".dropdown-menu_wrap_news").classList.toggle("show");
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
// chuyên trang header
var papes=$$(".header_contenner_product_item");
papechange=(data)=>{
    papes.forEach(item =>{
        item.classList.remove("active");
    });
    data.classList.add("active");
}


papechangenmain=(data)=>{
    var papesmain=data.parentElement.querySelectorAll(".product_main_name_list");
    papesmain.forEach(item =>{
        item.classList.remove("active");
    });
    data.classList.add("active");
}
// hover category

var hover_category=$$(".category_main_list_extra");
hover_category.forEach(item=>{
});
var hover_category_list= $(".category_main_list_hover")
onhover=(data)=>{
    data.querySelector(".category_main_list_hover").style.display="block";
}
offhover=(data)=>{
    data.querySelector(".category_main_list_hover").style.display="none";
}
// nav_mobi
$(".m_header_nav_icon").onclick=()=>{
    $(".m_header_nav").style.display="block";
    $(".overlay_nav").style.display="block";
    $(".nav_close").style.display="flex";
}
$(".nav_close").onclick=()=>{
    $(".m_header_nav").style.display="none";
    $(".overlay_nav").style.display="none";
    $(".nav_close").style.display="none";
}
// Carousel nav
let Slider=$('.menu_nav_2');
let innerSlider=$(".menu_nav_2_wrap");
let pressed=false;
let startx;
let x;
Slider.addEventListener('mousedown',e =>{
    pressed = true;
    startx =e.offsetX-innerSlider.offsetLeft;
    Slider.style.cursor="grabbing";
})
Slider.addEventListener('mouseenter',e =>{
    Slider.style.cursor="grab";
})
Slider.addEventListener('mouseleave',e =>{
    Slider.style.cursor="default";
})
Slider.addEventListener('mouseup',e =>{
    Slider.style.cursor="grab";
})
window.addEventListener('mouseup',e =>{
    pressed=false;
})
Slider.addEventListener("mousemove",(e)=>{
    if(!pressed) return;
    e.preventDefault();
    x=e.offsetX;
    innerSlider.style.left=`${x-startx}px`;
    checkboundary()
})
function checkboundary(){
    let outer=Slider.getBoundingClientRect();
    let inner=innerSlider.getBoundingClientRect();
    if(parseInt(innerSlider.style.left)>0){
        innerSlider.style.left="0px";
    }
    else if(inner.right<outer.right){
        innerSlider.style.left=`-${inner.width - outer.width}px`;
    }
}
// chuyển trang slide
var arr=[
    {
        id:"https://s3-hd.hotdeal.vn/original/2021/5/1/609cee1d1f2cf-des-la-vela-dimsum.jpg"
    },
    {
        id:"https://s3-hd.hotdeal.vn/original/2021/5/0/609115f772429-1180x450.jpg"
    },
   
    {
        id:"https://s3-hd.hotdeal.vn/original/2021/5/2/60af7c87120f2-1180x450.jpg"
    }
]
// pc
var cirles=$$(".advertise_pape_next li");
var image=$(".advertise_top_img");
$(".next_right").onclick=function(){
    let vt;
    let img=image.getAttribute('src');
    arr.forEach((i,index)=>{
        if(i.id==img){
            vt=index
        }
    });
    if(vt<arr.length-1){
        image.setAttribute('src',arr[vt+1].id);      
    }
    else{
        image.setAttribute('src',arr[0].id);
    }
    changeColor();
}

$(".next_left").onclick=function(){
    let vt;
    let img=image.getAttribute('src');
    arr.forEach((i,index)=>{
        if(i.id==img){
            vt=index;
           
        }
    })
    if(vt>0){
        image.setAttribute('src',arr[vt-1].id);
    }
    else{
        image.setAttribute('src',arr[arr.length-1].id);
    }
    changeColor();
}
// thay doi mau nut
function changeColor(){
    let img=image.getAttribute('src');
    arr.forEach((x,index1)=>{
        if(x.id==img){
            cirles.forEach((y,index2)=>{
                if(index1==index2){
                    y.style.backgroundColor="#71be11";
                }
                else{
                    y.style.backgroundColor="#cbcbcb";
                }
            })
           
          
        }
    })
}
changeImg=(data)=>{
    cirles.forEach((i,index)=>{
        if(i===data){
            image.setAttribute('src',arr[index].id);
        }
    })
    changeColor();
}
setInterval($(".next_right").onclick,3000);
//------------ mobi
var m_image=$(".m_advertise_top_img");
$(".m_next_right").onclick=function(){
    let vt;
    let img=m_image.getAttribute('src');
    arr.forEach((i,index)=>{
        if(i.id==img){
            vt=index
        }
    });
    if(vt<arr.length-1){
        m_image.setAttribute('src',arr[vt+1].id);      
    }
    else{
        m_image.setAttribute('src',arr[0].id);
    }
    changeColor();
}

$(".m_next_left").onclick=function(){
    let vt;
    let img=m_image.getAttribute('src');
    arr.forEach((i,index)=>{
        if(i.id==img){
            vt=index;
           
        }
    })
    if(vt>0){
        m_image.setAttribute('src',arr[vt-1].id);
    }
    else{
        m_image.setAttribute('src',arr[arr.length-1].id);
    }
    changeColor();
}
setInterval($(".m_next_right").onclick,3000);
// end chuyen trang