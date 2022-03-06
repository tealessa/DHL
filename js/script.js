
//JS-ФУНКЦИЯ ОПРЕДЕЛЕНИЯ ПОДДЕРЖКИ WEBP
function testWebP(callback) {

var webP = new Image();
webP.onload = webP.onerror = function () {
callback(webP.height == 2);
};
webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

if (support == true) {
document.querySelector('body').classList.add('webp');
}else{
document.querySelector('body').classList.add('no-webp');
}
});


// adaptive menu
let burger = document.getElementById("adaptive-menu__burger");

burger.addEventListener('click', function(){
  let adaptiveMenuList = document.getElementById("adaptive-menu__list");
  adaptiveMenuList.classList.toggle("adaptive-menu__list_active");
});


// acardion in section "_about-company"
let acc = document.getElementsByClassName("about-company-spoilers__item");

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("about-company-spoilers__item_active");
    let panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }

  });
}


// swich for section "_about-company"
let swich1 = document.getElementById("swich1")
let swich2 = document.getElementById("swich2")
let spoilerPage1 = document.getElementById("spoiler-page-1")
let spoilerPage2 = document.getElementById("spoiler-page-2")

swich1.addEventListener("click", function() {
  if(!this.classList.contains("about-company-spoilers__swich_active")) {
       this.classList.add("about-company-spoilers__swich_active");
  }
  if(swich2.classList.contains("about-company-spoilers__swich_active")) {
      swich2.classList.remove("about-company-spoilers__swich_active");
  }
  spoilerPage1.style.display = "block"
  spoilerPage2.style.display = "none"
})

swich2.addEventListener("click", function() {
  if(!this.classList.contains("about-company-spoilers__swich_active")) {
      this.classList.add("about-company-spoilers__swich_active");
  }
  if(swich1.classList.contains("about-company-spoilers__swich_active")) {
      swich1.classList.remove("about-company-spoilers__swich_active");
  }
  spoilerPage1.style.display = "none"
  spoilerPage2.style.display = "block"
})




