// NIGHT SCENE :
// root.style.setProperty('--bodyMain', '#1A1A1A');
//         root.style.setProperty('--shadow-nav', 'rgba(0,0,0,.8)');
//         root.style.setProperty('--black', 'white');
//         root.style.setProperty('--grey', 'white');

// DAY SCENE :
// root.style.setProperty('--bodyMain', 'white');
// root.style.setProperty('--shadow-nav', '#E2E1E1');
// root.style.setProperty('--black', 'black');
// root.style.setProperty('--grey', 'rgb(105, 105, 105)');
var root = document.documentElement;
var checkbox = document.getElementById('checkbox');
var nightMode = false;
checkbox.addEventListener('click',function(){
    if(nightMode == false){
        root.style.setProperty('--bodyMain', '#1A1A1A');
        root.style.setProperty('--shadow-nav', 'rgba(0,0,0,.8)');
        root.style.setProperty('--black', 'white');
        root.style.setProperty('--grey', 'white');
        nightMode = true;
    }
    else{
        root.style.setProperty('--bodyMain', 'white');
        root.style.setProperty('--shadow-nav', '#E2E1E1');
        root.style.setProperty('--black', 'black');
        root.style.setProperty('--grey', 'rgb(105, 105, 105)');
        nightMode = false;
    }
})