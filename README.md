# Проект Место
Страница, аналог приложения Instagram, где пользователь может добавлять карточки со своими любимыми местами на страничку, а также оценивать чужие фотографии.

## Демо #
https://ares909.github.io/react-mesto-auth

# Технологии #

* Семантичная верстка
* Адаптивная верстка под разрешения 320, 768, 1024, 1280 и выше, которая также корректно отображается между указанными брейкпоинтами
* React
* Webpack
* API

# Доступный функционал # 
* авторизация и регистрация, хранение данных о пользователе
* редактирование профиля
* добавление карточек
* удаление карточки
* лайки
* открытие фотографий на весь экран

# Планы по доработке #
* валидация форм с использованием библиотеки reakt-hook-form
* использовать деструктуризацию пропсов
* вынести логику закрытия попапа внутрь базового компонента Popup.
* location.pathname вынести в отдельный компонент

# Установка #

Перед началом работы необходимо проверить наличие установленного node.js и npm

Скопируйте проект на компьютер:

```
git clone https://github.com/ares909/react-mesto-auth/
```

Установите зависимости:

```
npm install
```

# Работа #

Для локальной разработки с поднятием сервера используйте:

```
npm start
```

Для сборки версии в продакшен:

```
npm run build
```
