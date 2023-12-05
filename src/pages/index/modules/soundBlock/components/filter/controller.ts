import { ClassesEnums } from '../../../../../../utils/enums/classesEnums'

export class FilterController {
    private readonly button: NodeListOf<Element>;
    private readonly popup: HTMLElement | null;
    private readonly closeButton: NodeListOf<Element>;

    constructor (private container: HTMLSelectElement) {
      this.button = this.container.querySelectorAll('.j-filter-button')
      this.popup = this.container.querySelector('.j-example-filter')
      this.closeButton = this.container.querySelectorAll('.j-filter-close')
      this.init()
    }

    init () {
      this.openFilter()
      this.closeFilter()
      this.container.onclick = this.handleContainerClose
    }

    openFilter () {
      if (this.button) {
        this.button.forEach((item) => {
          item.addEventListener('click', () => {
            this.popup?.classList.add(ClassesEnums.OPEN)
          })
        })
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
        this.closeButton.forEach((item) => {
          item.addEventListener('click', () => {
            this.popup?.classList.remove(ClassesEnums.OPEN)
          })
        })
      }
    }
}
