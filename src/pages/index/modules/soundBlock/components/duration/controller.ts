import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'
const useDuration = () => {
  const slider: Element | null = document.getElementById('j-duration')
  noUiSlider.create(slider as never, {
    start: [0, 12],
    connect: true,
    range: {
      min: 0,
      max: 12
    }
  })
}
export default useDuration
