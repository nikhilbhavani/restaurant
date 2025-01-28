import './menu.css'

export default function menu(){
    const container=document.createElement('div');
    container.className='menu-content';
    const courses=document.createElement('div');
    courses.className='menu-courses';
    const title=document.createElement('h1');
    title.className='menu-title';
    title.textContent='Menu'

    const breakfast=document.createElement('div');
    breakfast.className='menu-breakfast';
    const lunch=document.createElement('div');
    lunch.className='menu-lunch';
    const dinner= document.createElement('div');
    dinner.className='menu-dinner';

    const bftitle=document.createElement('h1');
    bftitle.className='course-title';
    const bfimg=document.createElement('div');
    bfimg.className='image';
    bfimg.id='breakfast-image';
    const bfcred=document.createElement('p');
    bfcred.className='credit';
    const bfdes=document.createElement('p');
    bfdes.className='description';
    const bfpri=document.createElement('h2');
    bfpri.className='price';

    bftitle.textContent='Breakfast';
    bfcred.innerHTML='Picture by <em>Chris Ralston</em> on <em>Unsplash</em>';
    bfdes.textContent='Start your day with a variety of wholesome and flavorful breakfast dishes, made with the freshest ingredients to give you the perfect morning boost.'
    bfpri.textContent='$15'

    breakfast.append(bftitle,bfimg,bfcred,bfdes,bfpri);


    const lutitle=document.createElement('h1');
    lutitle.className='course-title';
    const luimg=document.createElement('div');
    luimg.className='image';
    luimg.id='lunch-image';
    const lucred=document.createElement('p');
    lucred.className='credit';
    const ludes=document.createElement('p');
    ludes.className='description';
    const lupri=document.createElement('h2');
    lupri.className='price';

    lutitle.textContent='Lunch';
    lucred.innerHTML='Picture by <em>Mariana Medvedeva</em> on <em>Unsplash</em>';
    ludes.textContent='Enjoy a satisfying lunch with a diverse selection of delicious dishes, crafted to fuel your day with fresh ingredients and bold flavors.';
    lupri.textContent='$20';

    lunch.append(lutitle,luimg,lucred,ludes,lupri);


    const dititle=document.createElement('h1');
    dititle.className='course-title';
    const diimg=document.createElement('div');
    diimg.id='dinner-image';
    diimg.className='image';
    const dicred=document.createElement('p');
    dicred.className='credit';
    const dides=document.createElement('p');
    dides.className='description';
    const dipri=document.createElement('h2');
    dipri.className='price';

    dititle.textContent='Dinner';
    dicred.innerHTML='Picture by <em>Hanxiao Xu</em> on <em>Unsplash</em>';
    dides.textContent='Savor a memorable dinner with an array of flavorful dishes, thoughtfully prepared to delight your taste buds and make every evening special.'
    dipri.textContent='$30';

    dinner.append(dititle,diimg,dicred,dides,dipri);

    courses.append(breakfast,lunch,dinner);
    container.append(title,courses)

    return container;
}