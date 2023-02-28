
let bar = document.querySelector('header div.brcontrols');
let respnav = document.querySelector('section.othernav');
respnav.style.display = 'none'
                    
bar.onclick = function(e){
    if(respnav.style.display === 'none'){
         e.currentTarget.style.border =  '2px solid black'
         respnav.style.display = 'block'
    } else{
        e.currentTarget.style.border =  '0px solid black'
        respnav.style.display = 'none'
    }
                        
}
