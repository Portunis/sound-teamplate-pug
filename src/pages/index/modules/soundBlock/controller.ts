import { ClassesEnums } from '../../../../utils/enums/classesEnums'
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
export class SoundController {
    private readonly buttons: NodeListOf<Element>;
    private readonly audioFile: HTMLAudioElement;
    private readonly playButton: NodeListOf<Element>;
    private readonly pauseButton: NodeListOf<Element>;

    constructor (private container: HTMLSelectElement) {
      this.buttons = this.container.querySelectorAll('.j-control-button')
      this.audioFile = document.getElementById('sound__audio') as HTMLMediaElement
      this.playButton = this.container.querySelectorAll('.j-sound-play')
      this.pauseButton = this.container.querySelectorAll('.j-sound-pause')
      this.init()
    }

    init () {
      this.initButton()
      this.checkEndAudio()
      this.togglePlayAudio()
      this.sliderFilter()
    }

    sliderFilter () {
      new Swiper('.sound-block__filter-swiper', {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        }
      })
    }

    initButton () {
      this.buttons.forEach(function (item) {
        item.addEventListener('click', () => {
          if (item.classList.contains(ClassesEnums.SELECTED)) {
            item.classList.remove(ClassesEnums.SELECTED)
          } else {
            item.classList.add(ClassesEnums.SELECTED)
          }
        })
      })
    }

    checkEndAudio () {
      this.audioFile.addEventListener('ended', () => {
        this.playButton.forEach((item) => {
          item.classList.remove('pause-active')
        })
      })
    }

    togglePlayAudio () {
      if (this.audioFile) {
        this.playButton.forEach((item) => {
          item.addEventListener('click', () => {
            if (item.classList.contains('pause-active')) {
              item.classList.remove('pause-active')
              this.audioFile.pause()
            } else {
              this.playButton.forEach((playButton) => {
                playButton.classList.remove('pause-active')
                this.audioFile.pause()
              })

              item.classList.add('pause-active')
              this.audioFile.play().then()
            }
          })
        })
      }
    }
}
