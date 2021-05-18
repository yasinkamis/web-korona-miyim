
$( document ).ready(function() {
  gsap.registerPlugin(ScrollTrigger);

    //LOADİNG PAGE
  $(".isin").css("height","0");
  $(".loading h1").css("transform","scale(3)");
  $(".loading").css("width","0");
  $(".loading h1").css("opacity","0");
  if($(window).scrollTop() > 0){
    $("body").css("overflow","visible");
    $(".loading-page").css("display","none");
  }
  else{
    setTimeout(() =>{
      $("body").css("overflow","visible");
      $(".loading-page").css("display","none");
    },2000)
    var tlheader = new TimelineLite();

    tlheader.from("nav", {
      y:-50,
      duration : 0.5,
      delay:1.3,
    });
  
    tlheader.from(".header-content",{
      x:-1000,
      opacity:0,
      duration : 1.1,
      delay:0.2,
    });
  }

  //navigation********************************************************************************
  var scrollStart = $(window).scrollTop();
  $(window).scroll(function(){
      var scroll = $(window).scrollTop();
    if (scroll > (0)) {
      $('nav').addClass('bg-scrolling');
      localStorage.setItem("scroll","true");
        $("body").css("overflow","visible");
    }

    else{
      $('nav').removeClass('bg-scrolling'); 	
      localStorage.setItem("scroll","false");
    }
  })

  if(scrollStart == 0){
    $('nav').removeClass('bg-scrolling'); 	
    localStorage.setItem("scroll","false");
  }
  
  if(localStorage.getItem("scroll") == "true"){
    $('nav').addClass('bg-scrolling');
  }
  else if(localStorage.getItem("scroll") == "false"){
    $('nav').removeClass('bg-scrolling'); 	
  }
  else{
    $('nav').removeClass('bg-scrolling'); 	
  }

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
  $(".k").click(function(){
    return localStorage.setItem("male","Kadın");
  });
  $(".e").click(function (){
    return localStorage.setItem("male","Erkek");
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

  let buton2 = document.querySelector(".guncelle");
  buton2.addEventListener("click",() =>{
    localStorage.removeItem("name");
    localStorage.removeItem("age");
    $(".info-form").css("opacity","1").css("z-index","5").css("position","relative");
    $(".temp-form").css("opacity","0").css("z-index","-3").css("position","absolute");
    $(".temp-form2").css("opacity","0").css("z-index","-3").css("position","absolute");
    $(".test-form").css("opacity","1").css("z-index","5").css("position","relative");
  $(".result").css("opacity","0").css("z-index","-2").css("position","absolute");
  });

  //range ++++

  $("#ran").change(function(){
    var ranValue =$(this).val();
    if(ranValue == "0"){
      $(".icon").css("color","green")
    }
    else if(ranValue == "1"){
      $(".icon").css("color","rgb(9, 173, 3)")
    }
    else if(ranValue == "2"){
      $(".icon").css("color","yellowgreen")
    }
    else if(ranValue == "3"){
      $(".icon").css("color","yellow")
    }
    else if(ranValue == "4"){
      $(".icon").css("color","orange")
    }
    else if(ranValue == "5"){
      $(".icon").css("color","red")
    }
  })

  //*******************************************************************************************

  // control***********************************************************************************
  if(localStorage.getItem("name") && localStorage.getItem("age") && localStorage.getItem("male")){
    control();
  }
  else{
    formContainer.style.opacity = 1;
  }

  function control(){
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

  var sayı = 0;
  var onayButon = document.querySelector(".onay");
  var geriButon = document.querySelector(".geri");
  var soruNumarası = 1;
  var barWidth = $(".bar").width();
  var lineBaslangıc = $(".line").width();
  var sorular = [
    "Ateşiniz 38 üstüne ne sıklıkla çıkıyor ?",
    "Ne düzeyde boğaz ağrınız var ?",
    "Ne düzeyde baş ağrınız var ?",
    "Ne düzeyde öksürüğünüz var ?",
    "Ne düzeyde nefes darlığınız var ?",
    "Ne düzeyde göğüs sıkışmanız var ?",
    "Ne düzeyde vücut ağrılarınız var ?",
    "Ne düzeyde halsizliğiniz var ?",
    "Ne düzeyde ishal, mide bulantınız veya kusma durumunuz var ?",
    "Ne düzeyde gözde kızarıklık, çapaklanma, sulanma var ?",
    "Uykunuz ne kadar düzensiz ?",
    "Beslenmeniz ne kadar düzensiz ?",
    "Son 1 ay içinde kalabalık ortamlarda bulunma durumunuz ?",
    "Son 2 hafta korona hastası ile yakından temas etme durumunuz ?",
    "Ne sıklıkla sigara kullanıyorsunuz ?",
    "Ne düzeyde kas ağrılarılarınız var ?",
    "Ne düzeyde konuşma veya hareket kaybılarınız var ?",
    "Ne düzeyde ciltte döküntüleriniz var ?",
    "Ne düzeyde el veya ayak parmaklarında renk değişimi var ?",
    "En son yaptırdığınız covid-19 testinin üstünden uzun bir süre geçti mi ?",
  ]
  var sıralamaArray = [];
  onayButon.addEventListener("click",() => {
    geriAlmaFonk();
    var rangeValue = Number($("#ran").val());
    sayı += rangeValue;
    localStorage.setItem("puan",sayı);
    $("#ran").val(0);
    $(".icon").css("color","green");
    $(".soruhavuzu").html(sorular[soruNumarası]);
    soruNumarası++;
    $(".soruNumarası").html(soruNumarası);
    lineBaslangıc = lineBaslangıc + (barWidth/20);
    $(".line").css("width", lineBaslangıc);
  });

  geriButon.addEventListener("click",() => {
    sayı -= Number(sıralamaArray[soruNumarası-2]);
    localStorage.setItem("puan",sayı);
    soruNumarası-= 2;
    $("#ran").val(Number(sıralamaArray[soruNumarası]));
    $(".soruhavuzu").html(sorular[soruNumarası]);
    soruNumarası++;
    $(".soruNumarası").html(soruNumarası);
    lineBaslangıc = lineBaslangıc - (barWidth/20);
    $(".line").css("width", lineBaslangıc);
    setTimeout(function(){ 
      var ranBack =$("#ran").val();
      if(ranBack == "0"){
        $(".icon").css("color","green")
      }
      else if(ranBack == "1"){
        $(".icon").css("color","rgb(9, 173, 3)")
      }
      else if(ranBack == "2"){
        $(".icon").css("color","yellowgreen")
      }
      else if(ranBack == "3"){
        $(".icon").css("color","yellow")
      }
      else if(ranBack == "4"){
        $(".icon").css("color","orange")
      }
      else if(ranBack == "5"){
        $(".icon").css("color","red")
      }
     }, 100);
  });

  var geriAlmaFonk = () =>{
    var rangeEleman = $("#ran").val();
    sıralamaArray[soruNumarası-1] = rangeEleman;
  }

  function butonControl(){
    if(soruNumarası== 1){
      geriButon.style.display = "none";
      $(".back-line").css("justify-content","flex-end");
    }
    $(".onay,.geri").click(function(){
      if(soruNumarası== 1){
        geriButon.style.display = "none";
        $(".back-line").css("justify-content","flex-end");
        $(".bittir").css("display","none");
      }
      else if(soruNumarası > 1 && soruNumarası < 20){
        geriButon.style.display = "inline-block";
        onayButon.style.display = "inline-block";
        $(".back-line").css("justify-content","space-between");
        $(".bittir").css("display","none");
      }
      else if(soruNumarası== 20){
        onayButon.style.display = "none";
        $(".back-line").css("justify-content","space-between");
        $(".bittir").css("display","inline-block");
      }
    });
  }
butonControl();

var sonucArray = [
  "Verdiğiniz cevaplara göre Covid-19'a yakalanma şansınız çok düşük. Belirtiler devam ederse Alo 184'ü veya Sağlık Bakanlığı Korona Danışma Hattı'nı arayıp detaylı bilgi alınız.",
  "Verdiğiniz cevaplara göre Covid-19'a yakalanma şansınız düşük. Alo 184'ü veya Sağlık Bakanlığı Korona Danışma Hattı'nı arayıp detaylı bilgi alınız.",
  "Verdiğiniz cevaplara göre Covid-19'a yakalanma şansınız yüksek. Alo 184'ü veya Sağlık Bakanlığı Korona Danışma Hattı'nı arayıp detaylı bilgi alınız.",
  "Verdiğiniz cevaplara göre Covid-19'a yakalanma şansınız çok yüksek. En yakın zamanda Alo 184'ü veya Sağlık Bakanlığı Korona Danışma Hattı'nı arayıp detaylı bilgi alınız.",
]
$(".bittir").click(function(){
  var rangeValue = Number($("#ran").val());
  sayı += rangeValue;
  localStorage.setItem("puan",sayı);
  $(".result").css("opacity","1").css("z-index","6").css("position","relative");
  $(".temp-form2").css("opacity","0").css("z-index","-2").css("position","absolute");
  var sonuc =localStorage.getItem("puan");
  if(sonuc <= 25 && sonuc >= 0){
    $(".sonuc").css("color","rgb(9, 173, 3)")
    $(".sonuc").text(sonucArray[0]);
  }
  else if(sonuc <= 50 && sonuc > 25){
    $(".sonuc").css("color","yellowgreen")
    $(".sonuc").text(sonucArray[1]);
  }
  else if(sonuc <= 75 && sonuc > 50){
    $(".sonuc").css("color","orange")
    $(".sonuc").text(sonucArray[2]);
  }
  else if(sonuc <= 100 && sonuc > 75){
    $(".sonuc").css("color","red")
    $(".sonuc").text(sonucArray[3]);
  }

}); 


$(".tekrar").click(function(){
  localStorage.removeItem("puan");
  $(".result").css("opacity","0").css("z-index","-2").css("position","absolute");
  $(".temp-form2").css("opacity","1").css("z-index","6").css("position","relative");
  window.location.reload();
}); 

  //particles.js

  particlesJS("particles-js", {"particles":{"number":{"value":80,"density":{"enable":true,"value_area":800}}
  ,"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
  "polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
  "opacity":{"value":0.5,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
  "size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
  "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
  "move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out"
  ,"bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas",
  "events":{"onhover":{"enable":false,"mode":"grab"},"onclick":{"enable":false,"mode":"push"},"resize":false},
  "modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,
  "opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},
  "remove":{"particles_nb":2}}},"retina_detect":true});

  
  // animation


  if(localStorage.getItem("puan")){
    gsap.from(".test-box",{
      y:300,
      opacity:0,
      duration : 1.2,
      delay:0.5,
      scrollTrigger: {
        trigger: ".text-box",
      }
    });
  }
  localStorage.setItem("puan","0")

  gsap.from(".section2 .table .card",{
    scale:0.1,
    opacity:0,
    duration : 0.8,
    stagger:0.5,
    scrollTrigger: {
      trigger: ".section2 .table .card",
    }
  });

  gsap.from(".section3 .sectionEleman",{
    x: -400,
    opacity:0,
    duration : 0.8,
    delay:0.2,
    stagger:0.8,
    scrollTrigger: {
      trigger: ".section3 .sectionEleman",
    }
  });

  gsap.from(".section4 .up",{
    y: 200,
    opacity:0,
    duration : 0.8,
    delay:0.2,
    scrollTrigger: {
      trigger: ".section4 .card",
    }
  });

  gsap.from(".section4 .down",{
    y: -200,
    opacity:0,
    duration : 0.8,
    delay:0.2,
    scrollTrigger: {
      trigger: ".section4 .card",
    }
  });

  gsap.from(".section5 .author1",{
    x: -200,
    opacity:0,
    duration : 0.8,
    delay:0.2,
    scrollTrigger: {
      trigger: ".section5 .content",
    }
  });

  gsap.from(".section5 .author2",{
    x: 200,
    opacity:0,
    duration : 0.8,
    delay:0.2,
    scrollTrigger: {
      trigger: ".section5 .content",
    }
  });








});