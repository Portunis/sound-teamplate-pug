import { ClassesEnums } from '../../utils/enums/classesEnums'
import { EventEnums } from '../../utils/enums/eventEnums'
import { BodyOverflow } from '../../helpers/bodyOverflow'

export default class PopupController {
  private closeBtn: HTMLButtonElement | null;
  constructor (private container: HTMLElement) {
    this.closeBtn = container.querySelector('.j-popup-close')
    this.init()
  }

  init () {
    this.container.onclick = this.handleContainerClose
    if (this.closeBtn) {
      this.closeBtn.onclick = this.closePopup
    }
    this.addListener()
  }

    addListener = () => {
      this.container.addEventListener(EventEnums.OPEN, this.openHandler)
    }

    openHandler = () => {
      BodyOverflow.block(this.container)
      this.container.removeEventListener(EventEnums.OPEN, this.openHandler)
      this.container.remove()
      document.body.appendChild(this.container)
      setTimeout(() => {
        this.container.classList.add(ClassesEnums.OPEN)
      })
    }

    handleContainerClose = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target === this.container) {
        this.closePopup()
      }
    }

    closePopup = () => {
      this.container.classList.remove(ClassesEnums.OPEN)
      BodyOverflow.unBlock(this.container)
      this.addListener()
    }
}
