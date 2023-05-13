<template>
    <div class="container">
        <div class="toast">
            <div v-for="(notification, index) in msgList" 
            :key="index"
            class="notification"
            :class="notification.type"
            >{{ notification.msg }}</div>
        </div>
        <button class="btn" @click="handleClick">Show Notification</button>
    </div>
</template>

<script>
    export default {
        name:'ToastNotification',
        data() {
            return {
                msgList:[],
            }
        },
        methods: {
            handleClick(){
                this.addNotification()
            },
            addNotification(msg=null,type=null){
                const typeList = ['info','success','error']
                const index = Math.floor(Math.random()*typeList.length)
                this.msgList.push({
                    type: type || typeList[index],
                    msg: msg || 'default message'
                })
                setTimeout(() => {
                    this.msgList.shift()
                }, 3000);
            }
        },
    }
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap');

.container{
    font-family: 'Poppins',sans-serif;
    height: 100vh;   
    background-color: rebeccapurple;
    display: flex;
    justify-content: center;
    align-items: center;
    .toast{
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        position: fixed;
        bottom: 10px;
        right: 10px;
        .notification{
            max-width: 300px;
            background-color: #fff;
            padding: 15px;
            margin: 10px;
            border-radius: 7px;
            &.info{
                color:rebeccapurple
            }
            &.success{
                color:green
            }
            &.error{
                color:red
            }
        }
    }
    .btn{
        font-size: 15px;
        font-family: inherit;
        padding: 15px;
        color: rebeccapurple;
        font-weight: bold;
        border: none;
        border-radius: 7px;
        cursor: pointer;
        &:active{
            transform: scale(0.98);
        }
    }
}
</style>