import PopupController from './popup/controller';

(() => {
  document.querySelectorAll('.j-popup').forEach(elem => {
    new PopupController(elem as HTMLButtonElement)
  })
})()
