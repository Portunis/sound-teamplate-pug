
export default class CheckboxController {
    private check: NodeListOf<Element>;
    constructor (private container: HTMLSelectElement) {
      this.check = container.querySelectorAll('.j-checkbox')
      this.clickCheckBox()
    }

    clickCheckBox () {
      console.log('qwe')
    }
}
