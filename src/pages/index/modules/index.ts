import MainExamplesController from './mainExample/controller'
import { PopupBlockController } from './popupBlock/controller';

(() => {
  document.querySelectorAll('.j-main-example')
    .forEach(block => {
      new MainExamplesController(block as HTMLSelectElement)
    })
  document.querySelectorAll('.j-popup-block')
    .forEach(block => {
      new PopupBlockController(block as HTMLSelectElement)
    })
})()
