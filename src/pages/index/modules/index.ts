import MainExamplesController from './mainExample/controller'
import { PopupBlockController } from './popupBlock/controller'
import useReviewsController from './ReviewsBlock/controller'
import useDuration from './soundBlock/components/duration/controller'
import { FilterController } from './soundBlock/components/filter/controller'
import { SoundController } from './soundBlock/controller'
import useHeaderController from '../../../modules/header/controller'

(() => {
  useReviewsController()
  useDuration()
  useHeaderController()
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
})()
