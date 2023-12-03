
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
import { WidthEnums } from '../../../../utils/enums/widthEnums'
export default class ReviewsController {
  private readonly swiper: Element | null;
  private readonly mobileWidth: number;
  private readonly tabletWidth: number;
  private readonly desktopWidth: number;
  private slidePerView: number;
  constructor (private container: HTMLSelectElement) {
    this.swiper = container.querySelector('.j-swiper')
    this.mobileWidth = WidthEnums.MOBILE
    this.tabletWidth = WidthEnums.TABLET
    this.desktopWidth = WidthEnums.DESKTOP
    this.slidePerView = 1
    this.init()
  }

  init () {
    this.swiperInit(window.innerWidth)
  }

  swiperInit (widthWindow: number) {
    console.log('width', widthWindow >= this.tabletWidth)
    if (widthWindow >= this.desktopWidth) {
      this.slidePerView = 3
    } else if (widthWindow >= this.tabletWidth) {
      this.slidePerView = 2
    } else {
      this.slidePerView = 1
    }
    new Swiper(this.swiper as HTMLElement, {
      slidesPerView: this.slidePerView,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets'
      }
    })
  }
}
