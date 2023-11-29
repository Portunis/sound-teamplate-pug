class TrustedItemController {
    private container: HTMLElement | null;
    private picture: HTMLElement | null;
    constructor (private block: HTMLElement) {
      this.container = block
      this.picture = this.container.querySelector('.j-example-picture')
      this.init()
    }
    init () {}
}
export default TrustedItemController
