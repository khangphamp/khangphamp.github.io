var $=document.querySelector.bind(document);
var $$=document.querySelectorAll.bind(document);


var changeicon=$$(".facebook_header_part_2__item");
changeicon.forEach(function(index){
   index.onclick=function(){
    $('.facebook_header_part_2__item.part_2_wrap_item_active').classList.remove('part_2_wrap_item_active');
    index.classList.add("part_2_wrap_item_active");
   }
});
var changeshow=$$(".facebook_contenner_item_show");
changeshow.forEach(function(list){
    list.onclick=function(){
        list.classList.add("hidden_item");
        list.parentElement.querySelector(".facebook_contenner_item_hidden").classList.remove("hidden_item");
        var toggle_item=$$(".facebook_contenner_item_toggle");
        toggle_item.forEach(function(index){
            index.classList.remove("hidden_item")
        });
    }
});
var changehidden=$$(".facebook_contenner_item_hidden");
changehidden.forEach(function(list){
    list.onclick=function(){
        list.parentElement.querySelector(".facebook_contenner_item_show").classList.remove("hidden_item");
        list.classList.add("hidden_item");
        var toggle_item=$$(".facebook_contenner_item_toggle");
        toggle_item.forEach(function(index){
            index.classList.add("hidden_item")
        });
    }
});
$(".change_paper_right").onclick=function(){
    $(".facebook_contenner_center_create_room").parentElement.classList.add("facebook_change_paper_hidden");
    $(".change_paper_left").style.display="flex";
    $(".change_paper_right").style.display="none";
};
$(".change_paper_left").onclick=function(){
    $(".facebook_contenner_center_create_room").parentElement.classList.remove("facebook_change_paper_hidden");
    $(".change_paper_left").style.display="none";
    $(".change_paper_right").style.display="flex";
};
$(".facebook_contenner_center_posts_title_like").onclick=function(){
    $(".facebook_contenner_center_posts_title_like").classList.toggle("like_active");
    };
var func_post=$$(".facebook_contenner_center_posts_function")
func_post.forEach(function(item){
    item.onclick=function(){
        item.querySelector(".contenner_center_posts_function_list").classList.toggle("show_item");
    }
});



