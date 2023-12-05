import { ClassesEnums } from '../../../../utils/enums/classesEnums'
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
export class SoundController {
    private readonly buttons: NodeListOf<Element>;
    private readonly audioFile: HTMLAudioElement;
    private readonly playButton: NodeListOf<Element>;
    private currentTimeDisplay: NodeListOf<Element>;
    private totalTimeDisplay:NodeListOf<Element>

    constructor (private container: HTMLSelectElement) {
      this.buttons = this.container.querySelectorAll('.j-control-button')
      this.audioFile = this.container.querySelector('.sound__audio') as HTMLMediaElement
      this.playButton = this.container.querySelectorAll('.j-sound-play')
      this.currentTimeDisplay = this.container.querySelectorAll('.sound__time')
      this.totalTimeDisplay = this.container.querySelectorAll('.j-sound-time')
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
      this.audioFile?.addEventListener(
        'loadeddata',
        () => {
          this.getTimeAudio(this.audioFile)
        },
        false
      )
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
          item.classList.remove(ClassesEnums.PLAY_AUDIO)
        })
      })
    }

    togglePlayAudio () {
      if (this.audioFile) {
        this.playButton.forEach((item) => {
          item.addEventListener('click', () => {
            if (item.classList.contains(ClassesEnums.PLAY_AUDIO)) {
              item.classList.remove(ClassesEnums.PLAY_AUDIO)
              this.audioFile.pause()
            } else {
              this.playButton.forEach((playButton) => {
                playButton.classList.remove(ClassesEnums.PLAY_AUDIO)
                this.audioFile.pause()
              })

              item.classList.add(ClassesEnums.PLAY_AUDIO)
              this.audioFile.play().then()
            }
          })
        })
      }
    }

    getTimeAudio (audioFile: HTMLAudioElement) {
      const duration = audioFile.duration

      const totalMinutes = Math.floor(duration / 60)
      const totalSeconds = Math.floor(duration % 60)

      this.totalTimeDisplay.forEach((item) => {
        item.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`
      })
      audioFile?.addEventListener('timeupdate', () => {
        const currentTime = audioFile.currentTime

        const currentMinutes = Math.floor(currentTime / 60)
        const currentSeconds = Math.floor(currentTime % 60)
        this.currentTimeDisplay.forEach((item) => {
          item.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`
        })
        this.totalTimeDisplay.forEach((item) => {
          item.textContent = ''
        })
      })
    }
}
