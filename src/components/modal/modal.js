require('./common.css')
const MODAL_WRAP_CLASS = 'gome-modal-wrap'
const MODAL_NODE_CLASS = 'gome-modal-node'
const CONTENT_CLASS = 'gome-content'
const TITLE_CONTENT_CLASS = 'gome-title-content'
const MSG_CLASS = 'gome-content-msg'
const BUTTON_GROUP_CLASS = 'gome-btn-group'
const BUTTON_CLASS = 'gome-btn'
const BTNGROUP={'cancelTitle':'gome-cancel-btn','okTitle':'gome-ok-btn'}
class Modal{
    constructor(){
       this.wrap=document.querySelector(MODAL_WRAP_CLASS); 
       this.node=document.querySelector(MODAL_NODE_CLASS);       
       if(!this.wrap){
           this.createWrap();
       }
       if(!this.node){
           this.createNode();
       } 
    }
    show(){
        const that=this
        setTimeout(function(){
            document.body.appendChild(that.wrap)
            document.body.appendChild(that.node)        
        },0)
    }
    destroy(){
        document.body.removeChild(this.wrap)
        document.body.removeChild(this.node)
        this.wrap=null
        this.node=null        
    }
    createWrap(){
        this.wrap=document.createElement('div')
        this.wrap.className=MODAL_WRAP_CLASS
    }
    createNode(){
        this.node=document.createElement('div')
        this.node.className=MODAL_NODE_CLASS
    }
}
class Alert extends Modal{
     constructor(config){
         super()
         this.titleMsg=config.title
         this.msg=config.message
         this.ok=config.ok
         this.cancel=config.cancel
         this.callback=config.callback
         this.okCallback=config.okCallback
         this.cancelCallback=config.cancelCallback
         this.okTitle=config.okTitle
         this.cancelTitle=config.cancelTitle         
         this.flag=config.flag
        //  this.objBtn={'cancel':config.cancel,'ok':config.ok}
         this.getBtn()
         this.createNodeContent()   
         this.bindEvents()
     }
     getBtn(){
         this.objBtn={};
         if(this.okTitle==''){
             this.objBtn={'cancelTitle':this.cancelTitle}
         }else if(this.cancelTitle==''){
             this.objBtn={'okTitle':this.okTitle}
         }else if(this.okTitle&&this.cancelTitle){
             this.objBtn={'cancelTitle':this.cancelTitle,'okTitle':this.okTitle}
         }
     }
     createNodeContent(){
         if(this.titleMsg){
            let titlecontent = document.createElement('h3')
            titlecontent.classList.add(TITLE_CONTENT_CLASS)
            titlecontent.appendChild(document.createTextNode(this.titleMsg))         
            this.node.appendChild(titlecontent)
         }

         let content = document.createElement('div')
         content.classList.add(CONTENT_CLASS)
         this.node.appendChild(content)

         let msg=document.createElement('div')
         msg.classList.add(MSG_CLASS)
         msg.appendChild(document.createTextNode(this.msg))
         content.appendChild(msg)

         let buttonGroup = document.createElement('div')
         buttonGroup.classList.add(BUTTON_GROUP_CLASS)
         this.node.appendChild(buttonGroup)
            if(this.objBtn.okTitle&&this.objBtn.cancelTitle){
                for(let value in this.objBtn){
                    let button = document.createElement('div')
                    button.className=BTNGROUP[value]
                    button.appendChild(document.createTextNode(this.objBtn[value]))
                    buttonGroup.appendChild(button)
                }
            }else if(this.objBtn.okTitle){
                let button = document.createElement('div')
                button.className=BTNGROUP['okTitle']
                button.style.width='100%';
                button.appendChild(document.createTextNode(this.objBtn['okTitle']))
                buttonGroup.appendChild(button)
            }else if(this.objBtn.cancelTitle){
                let button = document.createElement('div')
                button.className=BTNGROUP['cancelTitle']
                button.style.width='100%';
                button.style.border=0;
                button.appendChild(document.createTextNode(this.objBtn['cancelTitle']))
                buttonGroup.appendChild(button)
            }
     }
     bindEvents(){
         let cancelbutton =this.node.querySelector('.gome-cancel-btn')
         let okbutton =this.node.querySelector('.gome-ok-btn')         
         let that=this
         if(okbutton){
            okbutton.addEventListener('click',function(){
                that.destroy()
                that.okCallback&&that.okCallback()
            })
         }
         if(cancelbutton){
            cancelbutton.addEventListener('click',function(){
                that.destroy()
                that.cancelCallback&&that.cancelCallback()
            })
         }
         if(this.flag){
            this.wrap.addEventListener('click', function (e) {
                e.preventDefault()
                e.stopPropagation()
                that.destroy()
              })
         }
         this.wrap.addEventListener('touchmove', function (e) {
            e.preventDefault()
         })
     }
}

export default Alert