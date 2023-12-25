import { EventEnums } from '../../utils/enums/eventEnums'
import { ClassesEnums } from '../../utils/enums/classesEnums'
type ListItem = Element & {
    dataset: {
        value: string;
    };
};
type SelectButton = Element & {
    dataset: {
        value: string;
    };
};
export class SelectController {
    private readonly selectButton: SelectButton | null;
    private selectDropdown: HTMLElement | null;
    private selectedOptions: NodeListOf<ListItem> | null;
    constructor (private container: HTMLSelectElement) {
      this.selectButton = container.querySelector('.j-select-button')
      this.selectDropdown = container.querySelector('.j-select-dropdown')
      this.selectedOptions = container.querySelectorAll('.j-select-option')
      this.initSelect()
    }

    initSelect () {
      this.selectButton?.addEventListener(EventEnums.CLICK, () => this.openOption())
      this.selectedOptions?.forEach((item: ListItem) => {
        item.addEventListener(EventEnums.CLICK, () => this.selectOption(item))
      })
    }

    openOption () {
      this.selectDropdown?.classList.toggle(ClassesEnums.ACTIVE)
      this.selectButton?.classList.toggle(ClassesEnums.ACTIVE)
    }

    selectOption (item: ListItem) {
      const itemValue: string = item.dataset.value

      const buttonSpan = this.selectButton?.querySelector('span')
      if (buttonSpan) {
        buttonSpan.textContent = item.textContent
      }

      if (this.selectButton) {
        this.selectButton.dataset.value = itemValue
      }

      // Close the dropdown list
      this.selectDropdown?.classList.remove(ClassesEnums.ACTIVE)
      this.selectButton?.classList.remove(ClassesEnums.ACTIVE)
    }
}
