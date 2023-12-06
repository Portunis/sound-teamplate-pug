import ExampleItemController from './components/exampleItem/controller'

export default class MainExamplesController {
    private items: NodeListOf<HTMLElement>;
    constructor (private container: HTMLElement) {
      this.items = container.querySelectorAll('.j-example-item')
      this.init()
    }

    init () {
      this.items.forEach(item => new ExampleItemController(item))
    }
}
