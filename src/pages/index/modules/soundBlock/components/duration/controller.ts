import noUiSlider from 'nouislider'
import 'nouislider/dist/nouislider.css'
const useDuration = () => {
  const slider: Element | null = document.getElementById('j-duration')
  noUiSlider.create(slider as never, {
    start: [2, 100],
    connect: true,
    range: {
      min: 0,
      max: 100
    }
  })
  /**
   * Обновляем состояние значений у range NoUiSlider
   */
  const updateSliderValue = (slider: Element | null, handle: number | null | undefined) => {
    if (handle == null) {
      handle = 0
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const children = slider.getElementsByClassName('noUi-handle')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const values = slider.noUiSlider.get()
    let i = 0

    const results = []
    let val
    while (i < children.length) {
      if (children.length === 1) {
        val = parseInt(values)
      } else {
        const currentMinutes = Math.floor(values[i] / 60)
        const currentSeconds = Math.floor(values[i] % 60)
        val = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      children[i].dataset.value = val
      results.push(i++)
    }
    return results
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  slider.noUiSlider.on('update', function () {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return updateSliderValue(slider)
  })
}
export default useDuration
