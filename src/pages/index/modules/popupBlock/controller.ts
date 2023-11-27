import { EventEnums } from '../../../../utils/enums/eventEnums'

export class PopupBlockController {
    private readonly button: HTMLButtonElement | null;
    private readonly buttonTwo: HTMLButtonElement | null;
    private readonly popup: HTMLElement | null;
    private readonly popupTwo: HTMLElement | null;

    constructor (private container: HTMLSelectElement) {
      this.button = this.container.querySelector('.j-example-popup-button')
      this.buttonTwo = this.container.querySelector('.j-example-popup-two-button')
      this.popup = this.container.querySelector('.j-example-popup')
      this.popupTwo = this.container.querySelector('.j-example-popup-two')
      this.initButton()
    }

    initButton () {
      if (this.buttonTwo) {
        this.buttonTwo.onclick = () => {
          this.popupTwo?.dispatchEvent(new Event(EventEnums.OPEN))
        }
      }
      if (this.button) {
        this.button.onclick = () => {
          this.popup?.dispatchEvent(new Event(EventEnums.OPEN))
        }
      }
    }
}
