import { ICtx } from '@/interfaces'

export default function axios({ $axios }: ICtx) {
  $axios.onRequest(
    (config: { headers: { common: { Accept: string } }; url: string }) => {
      config.headers.common.Accept = 'application/json'

      if (process.env.MODE === 'development') {
        console.log(
          `%cMaking request to  ${config.url}`,
          'color: #0076FF; font-size: .8rem; font-family: Arial; font-weight: bolder'
        )
      }
    }
  )

  $axios.onResponse((res: { status: any }) => {
    if (process.env.MODE === 'development') {
      console.log(
        `%cOnResponse Status => ${res.status}`,
        'color: #28c76f; font-size: .8rem; font-family: Arial; font-weight: bolder'
      )
    }
    return res
  })

  $axios.onError(
    (error: { response: { status: any; data: { resource: any } } }) => {
      const code = parseInt(error.response && error.response.status)
      if (code === 401) {
        //
      }
    }
  )
}
