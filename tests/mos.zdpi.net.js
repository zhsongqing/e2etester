module.exports = {
  'Find the answer.': function (client) {
    const emailInput = '#email'
    const passwdInput = '#password'
    const loginBtn = '.ant-btn'
    const email = 'knight@chitwo.com'
    const password = '456183'
    // 启动浏览器并打开 
    client.url('http://mos.zdpi.net/').maximizeWindow()

    // 确保 "body" 和输入框可以使用.
//    client.expect.element('body').to.be.present
    client.expect.element(emailInput).to.be.visible
    client.expect.element(passwdInput).to.be.visible
    client.expect.element(loginBtn).to.be.visible
//    client.pause(1000)  // 稍等两秒.

    // 输入 "what is microsoft" 然后搜索.
    client.setValue(emailInput, email)
    client.setValue(passwdInput, password)
    client.click(loginBtn)
    client.pause(2000)

    // 截一张图然后保存到 "reports/answer.png". 
    client.expect.element('body').to.be.present
    client.saveScreenshot('reports/answers.png')
    client.end()
  }
}
