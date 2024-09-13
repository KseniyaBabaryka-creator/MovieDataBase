'use strict';

document.addEventListener('DOMContentLoaded', () => {
	const movieDB = {
		movies: [
			 "Логан",
			 "Лига справедливости",
			 "Ла-ла лэнд",
			 "Одержимость",
			 "Скотт Пилигрим против..."
		]
  };
  
  const adv = document.querySelectorAll('.promo__adv img'),
		  poster = document.querySelector('.promo__bg'),
		  genre = poster.querySelector('.promo__genre'),
		  movieList = document.querySelector('.promo__interactive-list'),
		  addForm = document.querySelector('.add'),
		  addInput = addForm.querySelector('.adding__input'),
		  checkbox = addForm.querySelector('[type="checkbox"]');
  
  const deleteAdv = (arr) => {
		arr.forEach( item => {
			item.remove();
		}); 
  };

  deleteAdv(adv);
  

  const makeChanges = () => {
		genre.textContent = 'драма';
		poster.style.backgroundImage = 'url("img/bg.jpg")';

  };

  makeChanges();

  const sortArr = (arr) => {
	arr.sort();
  }

  
  

  function createMovieList(films, parent) {
		parent.innerHTML = '';
		sortArr(films);

		films.forEach((film, i) => {
			parent.innerHTML += `
				<li class="promo__interactive-item">${i + 1}. ${film}
						<div class="delete"></div>
				</li>
			`;
		});

		document.querySelectorAll('.delete').forEach((btn, i) => {
			
			btn.addEventListener('click', () => {
				btn.parentElement.remove();
				movieDB.movies.splice(i, 1);

				createMovieList(films, parent);
			});
		});



  };

  createMovieList(movieDB.movies, movieList);
  
  addForm.addEventListener('submit', e => {
		e.preventDefault();
	
		let newFilm = addInput.value.trim();
		const favorite = checkbox.checked;

		if(newFilm) {

			if(newFilm.length > 21){
				newFilm = newFilm.slice(0, 21) + '...';
			};

			if(favorite){
				console.log('Добавляем любимый фильм');
			}

			movieDB.movies.push(newFilm);
			sortArr(movieDB.movies);
		
			createMovieList(movieDB.movies, movieList);
		} else alert('Введите корректное название фильма');
		
		

		addForm.reset();
		
	});

	
});



