let links=document.querySelectorAll('.pc-menu__ref');
let articles=document.querySelectorAll('.item');

for(let link of links){
    link.onclick=function(){
        if (document.querySelector('#nav-list a.pc-menu__ref_active') !== null) {
            document.querySelector('#nav-list a.pc-menu__ref_active').classList.remove('pc-menu__ref_active');
        }
          link.classList.add('pc-menu__ref_active');
        
        for (let article of articles){
            if ( article.dataset.category !== link.dataset.category && link.dataset.category !== 'all') {
                article.classList.add('hidden');
            } else{
                    article.classList.remove('hidden');
                   }
        }
    
    }
}

