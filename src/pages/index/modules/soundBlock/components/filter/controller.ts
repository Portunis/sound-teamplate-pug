import { ClassesEnums } from '../../../../../../utils/enums/classesEnums'

export class FilterController {
    private readonly button: HTMLButtonElement | null;
    private readonly popup: HTMLElement | null;
    private readonly closeButton: HTMLElement | null;

    constructor (private container: HTMLSelectElement) {
      this.button = this.container.querySelector('.j-filter-button')
      this.popup = this.container.querySelector('.j-example-filter')
      this.closeButton = this.container.querySelector('.j-filter-close')
      this.init()
    }

    init () {
      this.initButton()
      this.closeFilter()
      this.container.onclick = this.handleContainerClose
    }

    initButton () {
      if (this.button) {
        this.button.onclick = () => {
          console.log('button click')
          this.popup?.classList.add(ClassesEnums.OPEN)
        }
      }
    }

    handleContainerClose = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target !== this.container) {
        this.closeFilter()
      }
    }

    closeFilter () {
      if (this.closeButton) {
        this.closeButton.onclick = () => {
          this.popup?.classList.remove(ClassesEnums.OPEN)
        }
      }
    }
}
