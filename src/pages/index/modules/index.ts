import MainExamplesController from './mainExample/controller'
import { PopupBlockController } from './popupBlock/controller'
import { FilterController } from './soundBlock/components/filter/controller'
import { SoundController } from './soundBlock/controller'
import { CheckboxController } from '../../../components/simpleCheckbox/controller'
import HeaderController from '../../../modules/header/controller'
import ReviewsController from './ReviewsBlock/controller'
import useDuration from './soundBlock/components/duration/controller'
import { SelectController } from '../../../components/customSelect/controller';

(() => {
  useDuration()
  document.querySelectorAll('.j-swiper-block').forEach((block) => {
    new ReviewsController(block as HTMLSelectElement)
  })
  document.querySelectorAll('.j-header-block')
    .forEach((block) => {
      new HeaderController(block as HTMLSelectElement)
    })
  document.querySelectorAll('.j-main-example')
    .forEach(block => {
      new MainExamplesController(block as HTMLSelectElement)
    })
  document.querySelectorAll('.j-popup-block')
    .forEach(block => {
      new PopupBlockController(block as HTMLSelectElement)
    })
  document.querySelectorAll('.j-filter-block')
    .forEach(block => {
      new FilterController(block as HTMLSelectElement)
    })
  document.querySelectorAll('.j-sound-block')
    .forEach(block => {
      new SoundController(block as HTMLSelectElement)
    })
  document.querySelectorAll('.j-checkbox-block').forEach(block => {
    new CheckboxController(block as HTMLSelectElement)
  })
  document.querySelectorAll('.j-select-block').forEach(block => {
    new SelectController(block as HTMLSelectElement)
  })
})()
