import { ClassesEnums } from '../../utils/enums/classesEnums'

export default class HeaderController {
  private buttonClose: NodeListOf<Element>;
  private mobileMenu: Element | null;
  private buttonBurger: Element | null;
  private loginButton: Element | null;
  private loginForm: Element | null;
  constructor (private container: HTMLSelectElement) {
    this.buttonClose = container.querySelectorAll('.j-close-menu')
    this.mobileMenu = container.querySelector('.header__navigation-mobile')
    this.buttonBurger = container.querySelector('.j-open-menu')
    this.loginButton = container.querySelector('.j-open')
    this.loginForm = container.querySelector('.j-login-block')
    this.init()
  }

  init () {
    this.scrollCheck()
    this.closeMenu()
    this.openMenu()
    this.openLogin()
    this.closeLogin()
  }

  scrollCheck () {
    document.addEventListener('scroll', () => {
      const scrollTop = window.scrollY
      const headerWrapper: Element | null = document.querySelector('.header')

      if (scrollTop >= 100) {
        headerWrapper?.classList.add(ClassesEnums.SCROLL)
      } else {
        headerWrapper?.classList.remove(ClassesEnums.SCROLL)
      }
    })
  }

  openMenu () {
    this.buttonBurger?.addEventListener('click', () => {
      this.mobileMenu?.classList.add(ClassesEnums.OPEN)
    })
  }

  closeMenu () {
    this.buttonClose.forEach((item) => {
      item.addEventListener('click', () => {
        this.mobileMenu?.classList.remove(ClassesEnums.OPEN)
      })
    })
  }

  closeLogin () {
    this.buttonClose.forEach((item) => {
      item.addEventListener('click', () => {
        this.loginForm?.classList.remove(ClassesEnums.OPEN)
      })
    })
  }

  openLogin () {
    this.loginButton?.addEventListener('click', () => {
      this.loginForm?.classList.add(ClassesEnums.OPEN)
    })
  }
}
