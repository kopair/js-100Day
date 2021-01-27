var that;
class Tab {
    constructor(id) {
        that = this
        this.main = document.querySelector(id)
        console.log(this.main);
        
        this.add = this.main.querySelector('.tabadd')
        this.ulFirst = this.main.querySelector('.ulFirst')
        this.ulContent = this.main.querySelector('.ulContent')
        this.init()
    }
    init() {
        this.update()
        this.add.onclick = this.addTab;
        this.lis.forEach((item, index) => {
            item.index = index
            item.onclick = this.toggleTab;
            this.close[index].onclick = this.removeTab;
            console.log(item);
        })
        
    }
    update(){
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.close = this.main.querySelectorAll('.close')

    }
    // 1.切换功能
    toggleTab() {
        console.log(this.index);
        that.clearClass()
        this.className = 'activeTab'
        that.sections[this.index].className = 'activeTabCard'
    }
    clearClass() {
        this.lis.forEach((item, index) => {
            item.className = ''
            this.sections[index].className = ''
        })
    }
    // 添加tab
    addTab() {
        console.log(1);
        // 创建li元素和setion元素
        that.clearClass()
        let appendTab = `<li class="activeTab"><span>初始化内容</span><span  class="close">x</span></li>`
        that.ulFirst.insertAdjacentHTML('beforeend',appendTab)
        let appendContent = `<section class="activeTabCard">新增内容</section>`
        that.ulContent.insertAdjacentHTML('beforeend', appendContent)
        that.init()
    }
    // 删除功能
    removeTab(e) {
        e.stopPropagation()
        let index = this.parentNode.index
        console.log(index);
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        index--
        that.lis[index].click()
    }
    // 修改功能
    editTab() {

    }
}
let tab = new Tab('#tab')