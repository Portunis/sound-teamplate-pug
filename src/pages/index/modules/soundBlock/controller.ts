import { ClassesEnums } from '../../../../utils/enums/classesEnums'

export class SoundController {
    private readonly buttons: NodeListOf<Element>;
    private readonly audioFile: NodeListOf<Element>;
    private readonly playButton: NodeListOf<Element>;
    private playlist: NodeListOf<Element>

    constructor (private container: HTMLSelectElement) {
      this.playlist = this.container.querySelectorAll('.j-sound-playlist')
      this.buttons = this.container.querySelectorAll('.j-control-button')
      this.audioFile = this.container.querySelectorAll('.j-sound-item')
      this.playButton = this.container.querySelectorAll('.j-sound-play')
      this.init()
    }

    /**
     * Инициализация всех функций
     */
    init () {
      this.initButton()
      this.togglePlayAudio()
      this.initAudio()
    }

    /**
     * Инициализируем аудио файлы
     */
    initAudio () {
      this.audioFile.forEach((audio) => {
        const audioTrack = audio.querySelector('.j-sound-file') as HTMLAudioElement
        const totalTimeTrack: Element | null = audio.querySelector('.j-sound-time-total')
        audioTrack.addEventListener(
          'loadeddata',
          () => {
            if (totalTimeTrack) {
              this.getTimeAudio(audioTrack, totalTimeTrack)
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
          const stop: HTMLAudioElement = item.querySelector('.j-sound-file') as HTMLAudioElement
          stop.pause()
        })
      })
    }

    /**
     * Воспроизведение и остановка аудио файла по кнопке play
     */
    togglePlayAudio () {
      this.audioFile.forEach((trackSound) => {
        const buttonPlay: Element | null = trackSound.querySelector('.j-sound-play')
        const timeUpdateTrack: Element | null = trackSound.querySelector('.j-sound-time')
        const totalTimeTrack: Element | null = trackSound.querySelector('.j-sound-time-total')
        buttonPlay?.addEventListener('click', () => { this.clickButtonPlay(buttonPlay, trackSound, timeUpdateTrack, totalTimeTrack) })
      })
    }

    clickButtonPlay (buttonPlay: Element, trackSound: Element, timeUpdateTrack: Element | null, totalTimeTrack: Element | null) {
      this.stopAllSound()
      const audio: HTMLAudioElement = trackSound.querySelector('.j-sound-file') as HTMLAudioElement
      this.checkEndAudio(audio)
      if (timeUpdateTrack && totalTimeTrack) {
        this.updateTimeAudio(audio, timeUpdateTrack, totalTimeTrack)
      }
      if (buttonPlay.classList.contains(ClassesEnums.PLAY_AUDIO)) {
        buttonPlay.classList.remove(ClassesEnums.PLAY_AUDIO)
        audio.pause()
      } else {
        this.playButton.forEach((playButton) => {
          playButton.classList.remove(ClassesEnums.PLAY_AUDIO)
          audio.pause()
        })

        buttonPlay.classList.add(ClassesEnums.PLAY_AUDIO)
        audio.play().then()
      }
    }

    /**
     * Отсчет времени аудиодорожки
     * @param audioFile
     * @param totalTimeTrack
     */
    getTimeAudio (audioFile: HTMLAudioElement, totalTimeTrack: Element) {
      const duration = audioFile.duration
      const oneMinuteInSeconds = 60

      const totalMinutes = Math.floor(duration / oneMinuteInSeconds)
      const totalSeconds = Math.floor(duration % oneMinuteInSeconds)

      totalTimeTrack.textContent = `${totalMinutes}:${totalSeconds < 10 ? '0' : ''}${totalSeconds}`
    }

    updateTimeAudio (audioFile: HTMLAudioElement, currentTimeTrack: Element, totalTimeTrack: Element) {
      audioFile?.addEventListener('timeupdate', () => {
        const currentTime = audioFile.currentTime
        const oneMinuteInSecond = 60

        const currentMinutes = Math.floor(currentTime / oneMinuteInSecond)
        const currentSeconds = Math.floor(currentTime % oneMinuteInSecond)
        totalTimeTrack.textContent = ''
        currentTimeTrack.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`
      })
    }
}
