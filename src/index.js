import dishCardTpl from './template/dish-card.hbs'
import dish from './menu.json'
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwithToggleEl = document.querySelector('#theme-switch-toggle')
const bodyEl = document.querySelector('body')
const dishMenu = document.querySelector('.js-menu')
const cardsMarkup = createDishCardMarkup(dish);

dishMenu.insertAdjacentHTML('beforeend', cardsMarkup)

themeSwithToggleEl.addEventListener('change', onThemeChange)

populateThemeBody()

function onThemeChange(e) {
    if (e.target.checked) {   
       bodyEl.classList.remove(`${Theme.LIGHT}`)
        bodyEl.classList.add(`${Theme.DARK}`)
        localStorage.setItem('theme', `${Theme.DARK}`)
    } else {
        bodyEl.classList.replace(`${Theme.DARK}`, `${Theme.LIGHT}`)
        localStorage.setItem('theme', `${Theme.LIGHT}`)
    }
}

function populateThemeBody() {
    const saveThemeBody = localStorage.getItem('theme')
    console.log(saveThemeBody)
    if (saveThemeBody) {
        bodyEl.classList.add(`${saveThemeBody}`)
        if (saveThemeBody === Theme.DARK) {
            themeSwithToggleEl.checked = true
        }
}
}

function createDishCardMarkup(dish) {
    return dish.map(dishCardTpl).join('')
}
