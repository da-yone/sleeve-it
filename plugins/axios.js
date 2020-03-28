export default function ({ $axios }) {
  $axios.onRequest((config) => {
    // 接続先の設定
    if (process.env.NODE_ENV === 'development') {
      config.url = process.env.API_URL_DEV + config.url
    } else {
      config.url = process.env.API_URL_PROD + config.url + '?code=' + process.env.API_FUNCTION_CODE
    }
  })

  $axios.onError(() => {
    alert('server request error.')
  })
}
