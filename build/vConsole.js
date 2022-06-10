class Vconsole {
    constructor(){
        this.console = {}
    }
    log(){
        let _this = this
        console.log().apply(console, arguments)
        window.console.log = function() {_this.printLog('log', arguments)}
    }
    printLog = (logType,logs) => {
        if (!logs.length) return
        var lines = ''
        for (let i = 0; i < logs.length; i++) {
            try {
                if (typeof logs[i] == 'function') {
                    lines += ' ' + logs[i].toString()
                }else if (typeof logs[i] == 'function') {
                    lines += ' ' + JSON.stringify(logs[i])
                } else {
                    lines += ' ' + logs[i]
                }
            } catch (e) {
                line +='['+( typeof logs[i])+']'
            }
            const element = array[i];
            
        }
        xesConsole[logType].apply(window.console, logs)
    }
}
let vConsole = new Vconsole()
export default vConsole