import { ClassesEnums } from '../../utils/enums/classesEnums'

const useHeaderController = () => {
  const buttonClose: Element | null = document.querySelector('.j-close-menu')
  const mobileMenu: Element | null = document.querySelector('.header__navigation-mobile')
  const buttonBurger: Element | null = document.querySelector('.j-open-menu')
  document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY
    const headerWrapper: Element | null = document.querySelector('.header')

    if (scrollTop >= 100) {
      headerWrapper?.classList.add(ClassesEnums.SCROLL)
    } else {
      headerWrapper?.classList.remove(ClassesEnums.SCROLL)
    }
  })
  buttonBurger?.addEventListener('click', () => {
    mobileMenu?.classList.add(ClassesEnums.OPEN)
  })
  buttonClose?.addEventListener('click', () => {
    mobileMenu?.classList.remove(ClassesEnums.OPEN)
  })
}
export default useHeaderController
