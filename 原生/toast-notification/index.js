const toast = document.getElementsByClassName('toast')[0];
const addbtn = document.getElementsByClassName('btn')[0];
const typeList = ['info','success','error'];

function addNotification(msg=null,type=null) {
    const divNode = document.createElement('div');
    divNode.classList.add('notification');
    const messageType = type||typeList[Math.floor(Math.random()*typeList.length)]
    divNode.classList.add(messageType);
    divNode.innerText = msg||('Message:' + messageType);
    toast.appendChild(divNode)
    setTimeout(()=>{
        divNode.remove()
    },3000)
}

addbtn.addEventListener('click',()=>{
    addNotification()
})