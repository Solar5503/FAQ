let links=document.querySelectorAll('.pc-menu__ref');
let articles=document.querySelectorAll('.item');

for(let link of links){
    link.onclick=function(){
        if (document.querySelector('#navList a.active') !== null) {
            document.querySelector('#navList a.active').classList.remove('active');
        }
          link.classList.add('active');
        
        for (let article of articles){
            if ( article.dataset.category !== link.dataset.category && link.dataset.category !== 'all') {
                article.classList.add('hidden');
            } else{
                    article.classList.remove('hidden');
                   }
        }
    
    }
}

