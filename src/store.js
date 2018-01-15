// test demo
// 用于储存的模块
const STORAGE_KEY = 'todos-vuejs'

export default {
    fetch () {
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]')
    },
    save (items) {  //save:function(items){}
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    }
}