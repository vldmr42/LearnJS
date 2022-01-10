/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

document.addEventListener('DOMContentLoaded', () =>{
    
    const addForm = document.querySelector('form.add'),
    addInput = addForm.querySelector('.adding__input'),
    checkbox = addForm.querySelector('[type="checkbox"]'),
    movieList = document.querySelector('.promo__interactive-list'),
    adv = document.querySelectorAll('.promo__adv img');
    
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    
    const deleteAdv = (arr) => {
        arr.forEach(item=>{
            item.remove();
        });
    };
    
    const MakeChanges = () => {
        document.querySelector('.promo__genre').textContent = 'драма';
        document.querySelector('.promo__bg').style.backgroundImage = 'url("img/bg.jpg")';
        
        movieList.innerHTML = '';
    };
    
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();
        let newFilm = addInput.value;
        const favorite = checkbox.checked;
        
        if (newFilm){

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Favorite film added');
            }
            
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
            createMovieList(movieDB.movies, movieList);
        }
        
        event.target.reset();
    });
    
    const sortArr = (arr)=>{
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        
        films.forEach((film, i) => {
            movieList.innerHTML += `
            <li class="promo__interactive-item">${i+1}: ${film}
            <div class="delete"></div>
            </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', ()=>{
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }
    
    deleteAdv(adv);
    MakeChanges();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);    
    
});

