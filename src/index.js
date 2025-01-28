import './styles.css'
import home from './components/home/home.js'

const navbut=document.querySelectorAll('nav-button');
navbut.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        navbut.forEach((button)=>button.classList.remove('active'));
        btn.classList.add('active');
        switch(btn.id){
            case 'home':
                updateContent(home());
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
