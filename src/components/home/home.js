import './home.css';

export default function home(){
    const containter=document.createElement('div');
    containter.className='home-content';
    const title=document.createElement('h1');
    title.className='home-title';
    const subtitle=document.createElement('p');
    subtitle.className='home-subtitle';
    const para1=document.createElement('p');
    para1.className='home-para1';
    const para2=document.createElement('p');
    para2.className='home-para2';
    const para3=document.createElement('p');
    para3.className='home-para3';
    title.textContent='Welcome to The Rocket League';
    subtitle.textContent='A Taste Worth Exploring';
    para1.textContent='Step into a world of culinary delights at [Your Restaurant Name], where every meal is a journey of taste and creativity. From our signature dishes crafted with the freshest ingredients to indulgent desserts that satisfy your sweet tooth, we’ve curated a menu that has something for everyone. Let your appetite guide you and explore the possibilities of what we have to offer.';
    para2.textContent='Whether you’re planning a cozy dinner for two, a family gathering, or a quick bite on the go, our restaurant is designed to cater to your every need. With easy online reservations, a detailed menu, and exclusive deals, our website is the gateway to a seamless dining experience. Discover your next favorite meal with just a few clicks.';
    para3.textContent='Explore our website to check out our menu. Hungry now? Order online and bring the magic of [Your Restaurant Name] straight to your table.';
}