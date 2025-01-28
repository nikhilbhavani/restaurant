import './about.css'

export default function about(){
    const container=document.createElement('div');
    container.className='about-content';
    const title=document.createElement('h1');
    title.className='about-title';
    const para1=document.createElement('p');
    para1.className='about-para1';
    const para2=document.createElement('p');
    para2.className='about-para2';
    const para3=document.createElement('p');
    para3.className='about-para3';
    title.textContent=`Welcome to The Rocket League`;
    para1.textContent=`Nestled in the heart of Konoha, The Rocket League is a culinary haven where delicious food, warm ambiance, and exceptional service come together to create unforgettable dining experiences. Whether you're craving a hearty meal, a light bite, or something indulgent, our menu is crafted with love and features a fusion of timeless recipes and innovative flavors. At The Rocket League, every dish tells a story, and every guest becomes a part of our family.`;
    para2.textContent=`At The Rocket League, we believe in the power of fresh, locally sourced ingredients and traditional cooking techniques that bring out the best in every bite. Our chefs pour passion into each dish, ensuring a perfect balance of taste, quality, and presentation. Whether you're celebrating a special occasion or simply treating yourself to a delightful meal, we’re here to make every visit memorable with our attention to detail and commitment to excellence.`;
    para3.textContent=`We’re more than a restaurant; we’re a community hub where friends gather, families celebrate, and strangers become friends. From our welcoming decor to our friendly staff, we aim to create an inviting atmosphere where everyone feels at home. Explore our carefully curated menu, savor the essence of our signature dishes, and experience the joy of dining at The Rocket League. We look forward to serving you soon!`;
    const descrpt=document.createElement('div');
    descrpt.className='about-description';
    descrpt.append(para1,para2,para3);
    container.append(title,descrpt);
    return container;
}