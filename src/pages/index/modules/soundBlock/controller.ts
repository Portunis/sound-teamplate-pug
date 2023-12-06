import { ClassesEnums } from '../../../../utils/enums/classesEnums'
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'
export class SoundController {
    private readonly buttons: NodeListOf<Element>;
    private readonly audioFile: NodeListOf<Element>;
    private readonly playButton: NodeListOf<Element>;
    private currentTimeDisplay: NodeListOf<Element>;
    private totalTimeDisplay:NodeListOf<Element>
    private playlist: NodeListOf<Element>

    constructor (private container: HTMLSelectElement) {
      this.playlist = this.container.querySelectorAll('.j-sound-playlist')
      this.buttons = this.container.querySelectorAll('.j-control-button')
      this.audioFile = this.container.querySelectorAll('.j-sound-item')
      this.playButton = this.container.querySelectorAll('.j-sound-play')
      this.currentTimeDisplay = this.container.querySelectorAll('.sound__time')
      this.totalTimeDisplay = this.container.querySelectorAll('.j-sound-time')
      this.init()
    }

    /**
     * Инициализация всех функций
     */
    init () {
      this.initButton()
      this.togglePlayAudio()
      this.sliderFilter()
      this.initAudio()
    }

    /**
     * Слайдер для категорий аудио
     */
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

    /**
     * Инициализируем аудио файлы
     */
    initAudio () {
      this.audioFile.forEach((audio) => {
        const audioTrack = audio.querySelector('.sound__audio') as HTMLAudioElement
        const totalTimeTrack: Element | null = audio.querySelector('.sound__time')
        const currentTimeTrack:Element | null = audio.querySelector('.j-sound-time')
        audioTrack.addEventListener(
          'loadeddata',
          () => {
            if (totalTimeTrack && currentTimeTrack) {
              this.getTimeAudio(audioTrack, totalTimeTrack, currentTimeTrack)
            }
          },
          false
        )
      })
    }

    /**
     * клик по кнопке лайк
     */
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

    /**
     * Проверка когда закончится дорожка аудио
     */
    checkEndAudio (audio: HTMLAudioElement) {
      audio.addEventListener('ended', () => {
        this.playButton.forEach((item) => {
          item.classList.remove(ClassesEnums.PLAY_AUDIO)
        })
      })
    }

    /**
     * Остановка всех ауидофайлов
     */
    stopAllSound () {
      this.playlist.forEach((item) => {
        const audioStop = item.querySelectorAll('.j-sound-item')
        audioStop.forEach((item) => {
          const stop: HTMLAudioElement = item.querySelector('.sound__audio') as HTMLAudioElement
          stop.pause()
        })
      })
    }

    /**
     * Воспроизведение и остановка аудио файла по кнопке play
     */
    togglePlayAudio () {
      if (this.audioFile) {
        this.playButton.forEach((item) => {
          item.addEventListener('click', () => {
            this.stopAllSound()
            const audio: HTMLAudioElement = item.querySelector('.sound__audio') as HTMLAudioElement
            this.checkEndAudio(audio)
            if (item.classList.contains(ClassesEnums.PLAY_AUDIO)) {
              item.classList.remove(ClassesEnums.PLAY_AUDIO)
              audio.pause()
            } else {
              this.playButton.forEach((playButton) => {
                playButton.classList.remove(ClassesEnums.PLAY_AUDIO)
                audio.pause()
              })

              item.classList.add(ClassesEnums.PLAY_AUDIO)
              audio.play().then()
            }
          })
        })
      }
    }

    /**
     * Отсчет времени аудиодорожки
     * @param audioFile
     * @param totalTimeTrack
     * @param currentTimeTrack
     */
    getTimeAudio (audioFile: HTMLAudioElement, totalTimeTrack: Element, currentTimeTrack: Element) {
      const duration = audioFile.duration

      const totalMinutes = Math.floor(duration / 60)
      const totalSeconds = Math.floor(duration % 60)

      totalTimeTrack.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`

      audioFile?.addEventListener('timeupdate', () => {
        const currentTime = audioFile.currentTime

        const currentMinutes = Math.floor(currentTime / 60)
        const currentSeconds = Math.floor(currentTime % 60)

        currentTimeTrack.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`

        currentTimeTrack.textContent = ''
      })
    }
}
