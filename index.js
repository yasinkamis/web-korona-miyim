$( document ).ready(function() {
    
    //navigation********************************************************************************

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
      if (scroll > ($(window).height()-82)) {
        $('nav').addClass('bg-scrolling');
      }

      else{
        $('nav').removeClass('bg-scrolling'); 	
      }
    })

    //*******************************************************************************************

    //form **************************************************************************************

    let buton = document.querySelector(".uygula");
    let isim = document.querySelector(".isim");
    let dogumYılı = document.querySelector(".doğumYılı");
    var zaman = new Date();
    var yıl = zaman.getFullYear();
    let formContainer = document.querySelector(".info-form");
  
    buton.addEventListener("mousedown",() =>{
      var isimDeger = isim.value;
      var dogumDeger = parseInt(dogumYılı.value);
      var yas = yıl - dogumDeger;
      localStorage.setItem("name",isimDeger);
      localStorage.setItem("age",yas);
    });
    buton.addEventListener("mouseup",() =>{
      (localStorage.getItem("name") && localStorage.getItem("age") && localStorage.getItem("male")) ? formGizleGöster(): formContainer.style.opacity = 1;
    });


    var formGizleGöster = () =>{
      var lName = localStorage.getItem("name").toUpperCase();
      var lAge = localStorage.getItem("age");
      var lMale = localStorage.getItem("male").toUpperCase();
      $(".info-form").css("opacity","0").css("z-index","-3").css("position","absolute");
      $(".temp-form").css("opacity","1").css("z-index","5").css("position","relative");
      $(".temp-form2").css("opacity","1").css("z-index","5").css("position","relative");
      $(".test-form").css("opacity","0").css("z-index","-3").css("position","absolute");
      $(".l-name").html(lName);
      $(".l-age").html(lAge);
      $(".l-male").html(lMale);
    };


    //checked ++++



    $(".k").click(function(){
      localStorage.setItem("male","Kadın");
    });
    $(".e").click(function(){
      localStorage.setItem("male","Erkek");
    });
    //*******************************************************************************************



    //particles.js

    particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}}
    ,"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
    "polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
    "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
    "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
    "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
    "move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out"
    ,"bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas",
    "events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},
    "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,
    "opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
    "remove":{"particles_nb":2}}},"retina_detect":true});
    




























});