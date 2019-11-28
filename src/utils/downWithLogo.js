import vm from '../main'

export const downFile = (url, interval) => {
  // vm.$message.info('请稍等,数据准备中.......')
  if (window.navigator.msSaveBlob) {
    window.open(url)
  } else {
    var dialog = document.createElement('div')
    dialog.id = 'dialogMask'
    document.body.appendChild(dialog)
    var iNotice = document.createElement('div')
    // document.body.position = 'relative'
    iNotice.id = 'dialog-notice'
    var wait = new Image()
    wait.src = `/static/img/loading.6b03985.gif`
    iNotice.style.backgroundColor = '#fff'
    iNotice.innerHTML = "<div>请稍等,数据准备中.......<br><button id='close'>关闭</button></div>"
    iNotice.prepend(wait)
    dialog.appendChild(iNotice)
    window.setTimeout(function() {
      dialog.removeChild(iNotice)
      document.body.removeChild(dialog)
    }, interval)
    document.getElementById('close').onclick = function() {
      dialog.removeChild(iNotice)
      document.body.removeChild(dialog)
    }
    let a = document.createElement('a')
    a.href = url
    a.download = true
    a.click()
  }
}
export const downWithLogo = (selector, name) => {
  vm.$html2canvas(document.querySelector(selector)).then(res => {
    let nowTime = new Date()
      .toLocaleString()
      .split(' ')[0]
      .replace(/\//g, '-')
    let cHeight = res.height
    let cWidth = res.width
    const ctx = res.getContext('2d')
    let image = new Image()
    image.src =
      'data:image/png;base64,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'
    image.onload = function() {
      ctx.drawImage(image, 10, 20, 50, 50)
      ctx.font = '30px Microsoft YaHei'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)'
      ctx.fillText('iVane', 60, 70)

      ctx.font = '16px Microsoft YaHei'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)'
      ctx.fillText('Data source: iVane', cWidth - 150, cHeight / 2)

      if (window.navigator.msSaveBlob) {
        //IE9+浏览器
        var blob = res.msToBlob()
        let filename = name + nowTime + '.png'
        window.navigator.msSaveBlob(blob, filename)
      } else {
        let imgUrl = res.toDataURL({
          type: 'png',
          backgroundColor: 'white'
        })
        let link = document.createElement('a')
        link.setAttribute('href', imgUrl)
        link.setAttribute('download', name + nowTime)
        link.click()
      }
    }
  })
}
// export default downWithLogo
