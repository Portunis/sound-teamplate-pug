import { ClassesEnums } from '../../../../../../utils/enums/classesEnums'
import { EventEnums } from '../../../../../../utils/enums/eventEnums'

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
    }

    openFilter () {
      this.button.forEach((item) => {
        item.addEventListener(EventEnums.CLICK, () => {
          this.popup?.classList.add(ClassesEnums.OPEN)
        })
      })
    }

    closeFilter () {
      this.closeButton.forEach((item) => {
        item.addEventListener(EventEnums.CLICK, () => {
          this.popup?.classList.remove(ClassesEnums.OPEN)
        })
      })
    }
}
