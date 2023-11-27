import { StyleEnums } from '../utils/enums/styleEnums'

export class BodyOverflow {
  static block (target: HTMLElement) {
    target.dataset.bodyBlock = StyleEnums.HIDDEN
    document.body.style.overflowY = StyleEnums.HIDDEN
  }

  static unBlock (target: HTMLElement) {
    target.removeAttribute('data-body-block')
    const blockedItem = document.querySelector(`[data-body-block=${StyleEnums.HIDDEN}]`)
    if (!blockedItem) document.body.style.overflowY = StyleEnums.SCROLL
  }
}
