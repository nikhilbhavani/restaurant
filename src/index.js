import './styles.css'
import home from './components/home/home.js'
import menu from './components/menu/menu.js'

const navbut=document.querySelectorAll('nav button');
navbut.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        navbut.forEach((button)=>button.classList.remove('active'));
        btn.classList.add('active');

        const contentDiv = document.getElementById('content');
        contentDiv.classList.remove('menu-active');

        switch(btn.id){
            case 'home':
                updateContent(home());
                break;
            case 'menu':
                contentDiv.classList.add('menu-active');
                updateContent(menu());
                break;
        }
    });
});

function updateContent(component){
    const contentDiv=document.getElementById('content');
    contentDiv.textContent='';
    contentDiv.appendChild(component);
}

updateContent(home());
