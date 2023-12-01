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
  const updateSliderValue = (slider: Element | null, handle: number | null | undefined) => {
    let children, i, results, val, values
    if (handle == null) {
      handle = 0
    }
    // eslint-disable-next-line prefer-const,@typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prefer-const
    children = slider.getElementsByClassName('noUi-handle')
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    // eslint-disable-next-line prefer-const
    values = slider.noUiSlider.get()
    i = 0
    // eslint-disable-next-line prefer-const
    results = []
    while (i < children.length) {
      if (children.length === 1) {
        val = parseInt(values)
      } else {
        val = parseInt(values[i])
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
