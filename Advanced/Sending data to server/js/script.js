"use strict";

window.addEventListener('DOMContentLoaded', ()=>{
    
    // TABS
    const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items');
    
    function hideTabContent(){
        tabsContent.forEach(item=>{
            item.style.display = 'none';
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });
        
        tabs.forEach(item=>{
            item.classList.remove('tabheader__item_active');
        });
    }
    
    function showTabContent(i=0){
        tabsContent[i].style.display = 'block';
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    
    hideTabContent();
    showTabContent();
    
    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;
        
        if (target, target.classList.contains('tabheader__item')){
            tabs.forEach((item, i)=>{
                if (target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    
    // TIMER
    const deadLine = '2022-05-11';
    
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - new Date(),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor((t / (1000 * 60 * 60) % 24)),
        minutes = Math.floor((t / 1000 / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);
        
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    
    function getZero(num){
        if (num >= 0 && num < 10){
            return `0${num}`;
        }else{
            return num;
        }
    }
    
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateClock, 1000);
        
        updateClock();
        
        function updateClock(){
            const t = getTimeRemaining(endtime);
            
            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);
            
            if (t.total <= 0){
                clearInterval(timeInterval);
            }
        }
        
    }
    
    setClock('.timer', deadLine);
    
    // MODAL
    
    // const modalTrigger = document.querySelectorAll('[data-modal]'),
    // modal = document.querySelector('.modal'),
    // modalCloseBtn = document.querySelector('[data-close]');
    
    // function openModal(){
    //     modal.classList.add('show');
    //     modal.classList.remove('hide');
    //     document.body.style.overflow = 'hidden';
    //     clearInterval(modalTimerId);
    // }
    
    // function closeModal(){
    //     modal.classList.add('hide');
    //     modal.classList.remove('show');
    //     document.body.style.overflow = '';
    // }
    
    // modalTrigger.forEach(btn=>{
    //     btn.addEventListener('click', openModal);
    // });
    
    // modalCloseBtn.addEventListener('click', closeModal);
    
    // modal.addEventListener('click', (e)=>{
    //     if (e.target === modal){
    //         closeModal();
    //     }
    // });
    
    // document.addEventListener('keydown', (e)=>{
    //     if(e.code === 'Escape' && modal.classList.contains('show')){
    //         closeModal();
    //     }
    // });

    // function showModalByScroll(){
    //     if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
    //         openModal();
    //         window.removeEventListener('scroll', showModalByScroll);
    //     }
    // }

    // const modalTimerId = setTimeout(openModal, 5000);
    // window.addEventListener('scroll', showModalByScroll);

    // CLASSES FOR CARDS

    class MenuCard{
        constructor(src, alt, title, descr, price, parentSelector){
            this.src = src;
            this.alt = alt;
            this.title = title;
            this.descr = descr;
            this.price = price;
            this.parent = document.querySelector(parentSelector);
            this.transfer = 27;
            this.changeToUAH();
        }

        changeToUAH(){
            this.price = this.price * this.transfer;
        }

        render(){
            const element = document.createElement('div');
            element.innerHTML = `
            <div class="menu__item">
                <img src=${this.src} alt=${this.alt}>
                <h3 class="menu__item-subtitle">${this.title}</h3>
                <div class="menu__item-descr">${this.descr}</div>
                <div class="menu__item-divider"></div>
                <div class="menu__item-price">
                    <div class="menu__item-cost">Цена:</div>
                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
                </div>
            </div>
            `;
            this.parent.append(element);
        }
    }

    new MenuCard(
        "img/tabs/vegy.jpg",
        "vegy",
        'Меню "Фитнес"',
        'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!',
        9,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/elite.jpg",
        "elite",
        'Меню “Премиум”',
        'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!',
        14,
        '.menu .container'
    ).render();

    new MenuCard(
        "img/tabs/post.jpg",
        "post",
        'Меню "Постное"',
        'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.',
        21,
        '.menu .container'
    ).render();

    // FORMS

    const forms = document.querySelectorAll('form');

    const message = {
        loading: 'Loading',
        success: 'Thanks! We contact with you soon.',
        failure: 'Something went wrong...'
    };

    forms.forEach(item=>{
        postData(item);
    });

    function postData(form){
        form.addEventListener('submit', (e)=>{
            e.preventDefault();

            const statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            statusMessage.textContent = message.loading;
            form.append(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', 'server.php');

            request.setRequestHeader('Content-type', 'multipart/form-data');
            const formData = new FormData(form);

            request.send(formData);
            request.addEventListener('load', ()=>{
                if(request.status === 200){
                    console.log(request.response);
                }else{
                    statusMessage.textContent = message.failure;
                }
            });
        });
    }
});

