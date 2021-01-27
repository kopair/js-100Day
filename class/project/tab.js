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
        // 更新全部的dom
        this.update()
        this.add.onclick = this.addTab;
        // 绑定各类事件
        this.lis.forEach((item, index) => {
            item.index = index
            item.onclick = this.toggleTab;
            this.close[index].onclick = this.removeTab;
            // console.log(item);
            this.spans[index].ondblclick = this.editTab;
            this.sections[index].ondblclick = this.editTab;
        })
        
    }
    update(){
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.close = this.main.querySelectorAll('.close')
        this.spans = this.main.querySelectorAll('.ulFirst li span:first-child')
    }
    // 1.切换功能
    toggleTab() {
        // console.log(this.index);
        that.clearClass()
        this.className = 'activeTab'
        that.sections[this.index].className = 'activeTabCard'
    }
    // 清除样式
    clearClass() {
        this.lis.forEach((item, index) => {
            item.className = ''
            this.sections[index].className = ''
        })
    }
    // 添加tab
    addTab() {
        // console.log(1);
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
        // 删除内容和tab
        that.lis[index].remove()
        that.sections[index].remove()
        // 让tab重新绑定事件
        that.init()
        // 当删除非激活状态的tab
        if(document.querySelector('.activeTab')) return 
        // 当删除激活状态的tab
        index--
        that.lis[index] && that.lis[index].click()
    }
    // 修改功能
    editTab() {
        console.log('执行');
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();

        let str = this.innerHTML;
        // console.log(1);
        this.innerHTML = `<input type="text" value=${str} />`
        this.children[0].select()
        this.children[0].onblur = function(){
            this.parentNode.innerHTML = this.value
        }
        this.children[0].onkeyup = function(ret){
            if(ret.keyCode === 13){
                this.blur()
            }
        }
    }
}
let tab = new Tab('#tab')