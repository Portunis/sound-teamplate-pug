
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/scss'
import 'swiper/scss/pagination'
import { Pagination } from 'swiper/modules'
export default class ReviewsController {
  private readonly swiper: Element | null;
  constructor (private container: HTMLSelectElement) {
    this.swiper = container.querySelector('.j-swiper')
    this.init()
  }

  init () {
    this.swiperInit()
  }

  /**
   * Инициализируем слайдер
   * Проверяем разрешение для показа определнного количества слайдов
   */
  swiperInit () {
    new Swiper(this.swiper as HTMLElement, {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      },
      spaceBetween: 30,
      breakpoints: {
        1244: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 2
        },
        640: {
          slidesPerView: 1
        }
      }
    })
  }
}
