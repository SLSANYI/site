import { getUrl } from '../../utils'

interface Data {
  list: {
    name: string
    url: string
  }[]
}

declare const data: Data[]

export default {
  load() {
    return {
      list: [
        {
          name: 'tools 2',
          url: ''
        }
      ].map((v) => ({
        ...v,
        url: getUrl(v.url)
      }))
    }
  }
}

export { data }
