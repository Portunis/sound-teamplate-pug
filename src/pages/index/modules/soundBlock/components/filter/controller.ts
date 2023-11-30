import { ClassesEnums } from '../../../../../../utils/enums/classesEnums'

export class FilterController {
    private readonly button: HTMLButtonElement | null;
    private readonly popup: HTMLElement | null;
    private readonly closeButton: HTMLElement | null;

    constructor (private container: HTMLSelectElement) {
      this.button = this.container.querySelector('.j-filter-button')
      this.popup = this.container.querySelector('.j-example-filter')
      this.closeButton = this.container.querySelector('.j-filter-close')
      this.initButton()
    }

    initButton () {
      if (this.button) {
        this.button.onclick = () => {
          console.log('button click')
          this.popup?.classList.add(ClassesEnums.OPEN)
        }
      }
      if (this.closeButton) {
        this.closeButton.onclick = () => {
          this.popup?.classList.remove(ClassesEnums.OPEN)
        }
      }
    }
}
