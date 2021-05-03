let links=document.querySelectorAll('.pc-menu__ref');
let articles=document.querySelectorAll('.item');
let upButton = document.querySelector('.up-button');
let menu = document.querySelector('.pc-menu');
let label = document.querySelector('.mobile-menu__toggle'); 

for(let link of links){
    link.onclick=function(){
        if (document.querySelector('#nav-list a.pc-menu__ref_active') !== null) {
            document.querySelector('#nav-list a.pc-menu__ref_active').classList.remove('pc-menu__ref_active');
        }
          link.classList.add('pc-menu__ref_active');
        
        for (let article of articles){
            if ( article.dataset.category !== link.dataset.category && link.dataset.category !== 'all') {
                article.classList.add('item__envelope_hidden');
            } else{
                    article.classList.remove('item__envelope_hidden');
                   }
        }
    
    }
}

window.onscroll = function () {
  if (window.pageYOffset > 200) {
    upButton.classList.add('up-button_shown');
  } 
  else {
    upButton.classList.remove('up-button_shown');
    };
};

upButton.onclick = function () {
  window.scrollTo(0, 0);
};

label.onclick = function(){
  if(!menu.classList.contains('pc-menu_open')){
    menu.classList.add('pc-menu_open');
  }
  else{
    menu.classList.remove('pc-menu_open');
  }
}
menu.onmouseleave = function(){
  menu.classList.remove('pc-menu_open');
}
