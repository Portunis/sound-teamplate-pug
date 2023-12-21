import { EventEnums } from '../../../../utils/enums/eventEnums'

export class PopupBlockController {
    private readonly button: HTMLButtonElement | null;
    private readonly popup: HTMLElement | null;

    constructor (private container: HTMLSelectElement) {
      this.button = this.container.querySelector('.j-example-popup-button')
      this.popup = this.container.querySelector('.j-example-popup')

      this.initButton()
    }

    initButton () {
      if (this.button) {
        this.button.onclick = () => {
          this.popup?.dispatchEvent(new Event(EventEnums.OPEN))
        }
      }
    }
}
