import TrustedItemController from './components/imageItem/controller'

export default class TrustedController {
    private items: NodeListOf<HTMLElement>;
    constructor (private container: HTMLElement) {
      this.items = container.querySelectorAll('.j-example-item')
      this.init()
    }

    init () {
      this.items.forEach(item => new TrustedItemController(item))
    }
}
