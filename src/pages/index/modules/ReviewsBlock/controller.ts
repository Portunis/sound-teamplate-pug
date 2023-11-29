
// import Swiper JS
import Swiper from 'swiper'
// import Swiper styles
import 'swiper/css'

const useReviewsController = () => {
  new Swiper('.reviews-block__my-swiper', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets'
    }
  })
}
export default useReviewsController
