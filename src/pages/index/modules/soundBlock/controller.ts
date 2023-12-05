import { ClassesEnums } from '../../../../utils/enums/classesEnums'
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
export class SoundController {
    private readonly buttons: NodeListOf<Element>;
    private readonly audioFile: NodeListOf<HTMLAudioElement>;
    private readonly playButton: NodeListOf<Element>;
    private readonly pauseButton: NodeListOf<Element>;
    private currentTimeDisplay: NodeListOf<Element>;
    private totalTimeDisplay:NodeListOf<Element>
    private timePlayElement: HTMLElement | null

    constructor (private container: HTMLSelectElement) {
      this.buttons = this.container.querySelectorAll('.j-control-button')
      this.audioFile = document.querySelectorAll('.sound__audio')
      this.playButton = this.container.querySelectorAll('.j-sound-play')
      this.pauseButton = this.container.querySelectorAll('.j-sound-pause')
      this.currentTimeDisplay = this.container.querySelectorAll('.sound__time')
      this.totalTimeDisplay = this.container.querySelectorAll('.j-sound-time')
      this.timePlayElement = this.container.querySelector('.sound__time-play')
      this.init()
    }

    init () {
      this.initButton()
      this.checkEndAudio()
      this.togglePlayAudio()
      this.sliderFilter()
      this.initAudio()
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

    initAudio () {
      this.audioFile?.forEach((audio) => {
        audio.addEventListener(
          'loadeddata',
          () => {
            this.getTimeAudio(audio)
          },
          false
        )
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
      this.audioFile?.forEach((audio) => {
        audio.addEventListener('ended', () => {
          this.playButton.forEach((item) => {
            item.classList.remove('pause-active')
          })
        })
      })
    }

    togglePlayAudio () {
      if (this.audioFile) {
        this.audioFile.forEach((audio) => {
          this.playButton.forEach((item) => {
            item.addEventListener('click', () => {
              if (item.classList.contains('pause-active')) {
                item.classList.remove('pause-active')
                audio.pause()
              } else {
                this.playButton.forEach((playButton) => {
                  playButton.classList.remove('pause-active')
                  audio.pause()
                })

                item.classList.add('pause-active')
                audio.play().then()
              }
            })
          })
        })
      }
    }

    getTimeAudio (audioFile: HTMLAudioElement) {
      audioFile?.addEventListener('timeupdate', () => {
        const currentTime = audioFile.currentTime
        const duration = audioFile.duration

        const currentMinutes = Math.floor(currentTime / 60)
        const currentSeconds = Math.floor(currentTime % 60)
        const totalMinutes = Math.floor(duration / 60)
        const totalSeconds = Math.floor(duration % 60)

        this.currentTimeDisplay.forEach((item) => {
          item.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`
        })
        this.totalTimeDisplay.forEach((item) => {
          item.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`
        })
      })
    }
}
