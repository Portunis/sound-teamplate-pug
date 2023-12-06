import { ClassesEnums } from '../../utils/enums/classesEnums'
import { BodyOverflow } from '../../helpers/bodyOverflow'

export default class HeaderController {
  private buttonClose: NodeListOf<Element>;
  private mobileMenu: Element | null;
  private buttonBurger: Element | null;
  private loginButton: Element | null;
  private loginForm: Element | null;
  private backgroundDisplay: Element | null;
  private readonly scrollHeight: number;
  constructor (private container: HTMLSelectElement) {
    this.buttonClose = container.querySelectorAll('.j-close-menu')
    this.mobileMenu = container.querySelector('.header__navigation-mobile')
    this.buttonBurger = container.querySelector('.j-open-menu')
    this.loginButton = container.querySelector('.j-open')
    this.loginForm = container.querySelector('.j-login-block')
    this.backgroundDisplay = container.querySelector('.header__navigation-mobile-background')
    this.scrollHeight = 20
    this.init()
  }

  init () {
    this.scrollCheck()
    this.closeMenu()
    this.openMenu()
    this.openLogin()
    this.closeLogin()
  }

  /**
   * Проверка скролла шапки
   */
  scrollCheck () {
    document.addEventListener('scroll', () => {
      const scrollTop = window.scrollY
      const headerWrapper: Element | null = document.querySelector('.header')

      if (scrollTop >= this.scrollHeight) {
        headerWrapper?.classList.add(ClassesEnums.SCROLL)
      } else {
        headerWrapper?.classList.remove(ClassesEnums.SCROLL)
      }
    })
  }

  /**
   * Окрытие меню шапки
   */
  openMenu () {
    this.buttonBurger?.addEventListener('click', () => {
      this.mobileMenu?.classList.add(ClassesEnums.OPEN)
      this.backgroundDisplay?.classList.add(ClassesEnums.SHOW)
      BodyOverflow.block(this.container)
    })
  }

  /**
   * Закрытие меню шапки
   */
  closeMenu () {
    this.buttonClose.forEach((item) => {
      item.addEventListener('click', () => {
        this.mobileMenu?.classList.remove(ClassesEnums.OPEN)
        this.backgroundDisplay?.classList.remove(ClassesEnums.SHOW)
        BodyOverflow.unBlock(this.container)
      })
    })
  }

  /**
   * Закрытие окна авторизации
   */
  closeLogin () {
    this.buttonClose.forEach((item) => {
      item.addEventListener('click', () => {
        this.loginForm?.classList.remove(ClassesEnums.OPEN)
      })
    })
  }

  /**
   * Открытие окна авторизации
   */
  openLogin () {
    this.loginButton?.addEventListener('click', () => {
      this.loginForm?.classList.add(ClassesEnums.OPEN)
    })
  }
}
