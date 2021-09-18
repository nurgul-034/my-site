$(".foods-list").hide();
$("#burger").show();
$(".foods-nav a").on("click", function (event){
    event.preventDefault();
    let FoodButton = $(this).attr("href");
    $(".foods-content").hide;
    $(".foods-list").hide();
    $(FoodButton).show();
    $(".foods-nav a").removeClass("active");
    $(this).addClass("active");

});
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:false,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        items:3,
        0:{
            items:1
        },
        600:{
            items:2
        }
    })
});