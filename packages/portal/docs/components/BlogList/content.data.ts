import { createContentLoader } from 'vitepress'
import readingTime from 'reading-time'
import { Data } from './types'
import { getUrl } from '../../utils'

export default createContentLoader(['blogs/2024/**/*.md'], {
  includeSrc: true,
  transform(data: Data[]) {
    data.forEach((fileIfno) => {
      if (fileIfno.src) {
        fileIfno.readTime = `${Math.ceil(readingTime(fileIfno.src).minutes)}min`
      }
      fileIfno.url = getUrl(fileIfno.url)
    })
    return data
  }
})

declare const data: Data[]
export { data }
