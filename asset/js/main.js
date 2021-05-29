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
$(".shop_right_group_login").onclick=function(){
    $(".dropdown-menu_wrap_login").classList.toggle("show");
}
// open dropdown when click 

openClick=function(data){
    console.log(data);
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
