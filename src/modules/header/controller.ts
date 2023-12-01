import { ClassesEnums } from '../../utils/enums/classesEnums'

const useHeaderController = () => {
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
export default useHeaderController
