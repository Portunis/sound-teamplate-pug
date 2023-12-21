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
    this.mobileMenu = container.querySelector('.j-mobile-menu')
    this.buttonBurger = container.querySelector('.j-open-menu')
    this.loginButton = container.querySelector('.j-open')
    this.loginForm = container.querySelector('.j-login-block')
    this.backgroundDisplay = container.querySelector('.j-mobile-navigation-background')
    this.scrollHeight = 20
    this.init()
  }

  init () {
    this.scrollCheck()
    this.closeMenu()
    this.openMenu()
    this.openLogin()
    this.closeLogin()
    this.widthCheck()
  }

  /**
   * Проверка скролла шапки
   */
  scrollCheck () {
    let lastScroll = 0
    const defaultOffset = 40
    const header = document.querySelector('.j-header-block')

    const scrollPosition = () => window.scrollY || document.documentElement.scrollTop
    const containHide = () => header?.classList.contains('hide')

    window.addEventListener('scroll', () => {
      if (window.scrollY < defaultOffset) {
        header?.classList.remove('_scroll')
        header?.classList.remove('hide')
        return
      }
      if (scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
        // scroll down
        header?.classList.add('hide')
        header?.classList.remove('_scroll')
      } else if (scrollPosition() < lastScroll && containHide()) {
        header?.classList.add('_scroll')
        header?.classList.remove('hide')
      }

      lastScroll = scrollPosition()
    })
  }

  widthCheck () {
    window.addEventListener('resize', () => {
      const widthWindow = window.innerWidth
      const width = 768
      if (widthWindow > width) {
        this.mobileMenu?.classList.remove(ClassesEnums.OPEN)
        this.backgroundDisplay?.classList.remove(ClassesEnums.SHOW)
        BodyOverflow.unBlock(this.container)
        this.loginForm?.classList.remove(ClassesEnums.OPEN)
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
