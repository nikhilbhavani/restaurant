import './contact.css'

export default function contact(){
    const container=document.createElement('div');
    container.className='contact-content';
    const title=document.createElement('h1');
    title.className='contact-title';
    const para1=document.createElement('p');
    para1.className='contact-para1';
    const para2=document.createElement('p');
    para2.className='contact-para2';
    title.textContent='Contact us';
    para1.innerHTML='1064, 48th street,<br>APT 25,<br>Norfolk, VA 23508';
    para2.textContent='+1 854-921-5441';
    const descrpt=document.createElement('div');
    descrpt.className='contact-description';
    descrpt.append(para1,para2);
    container.append(title,descrpt);
    return container;
}