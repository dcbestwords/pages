<template>
    <div class="container" :class="{ dark: isDark }">
        <button class="toggleMode" @click="toggle">{{ btnText }}</button>
        <div class="clock-container">
            <div class="clock">
                <div class="hour" :style="{ transform: `translate(-50%, -100%) rotate(${hourDeg}deg)` }"></div>
                <div class="minute" :style="{ transform: `translate(-50%, -100%) rotate(${minuteDeg}deg)` }"></div>
                <div class="second" :style="{ transform: `translate(-50%, -100%) rotate(${secondDeg}deg)` }"></div>
                <div class="center-point"></div>
            </div>
            <h2>{{ hourFormat }}:{{ minuteForat }}{{ ampm }}</h2>
            <div class="date">
                <span class="primary">{{ day }}，{{ month }}</span>
                <div class="circle">{{ date }}</div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, reactive, onMounted, toRefs} from 'vue'
export default {
    name: 'Clock',
    setup() {
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const btnText = ref('Dark mode')
        const isDark = ref(false)
        const time = reactive({
            day: '',
            date: '',
            month: '',
            hourFormat: '',
            minuteForat: '',
            second: '',
            ampm: ''
        })
        const deg = reactive({
            hourDeg: '',
            minuteDeg: '',
            secondDeg: ''
        })
        function toggle() {
            btnText.value = isDark.value ? 'Dark mode' : 'Light mode';
            isDark.value = !isDark.value;
        }
        function scale(num, in_min, in_max, out_min, out_max) {
            return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }
        function setDate() {
            const currentTime = new Date();
            const day = days[currentTime.getDay()];//星期几
            const date = String(currentTime.getDate());//几号
            const month = months[currentTime.getMonth()];//几月
            const hour = currentTime.getHours();//几点
            const hourFormat = (hour - 1) % 12 + 1;
            const minute = currentTime.getMinutes();//几分
            const minuteForat = minute < 10 ? ('0' + minute) : minute;
            const second = currentTime.getSeconds();//几秒
            const ampm = hour < 12 ? 'AM' : 'PM';
            const hourDeg = scale(hourFormat, 0, 12, 0, 360);
            const minuteDeg = scale(minute, 0, 60, 0, 360);
            const secondDeg = scale(second, 0, 60, 0, 360);

            Object.assign(time,{ day, date, month, hourFormat, minuteForat, second, ampm })
            Object.assign(deg,{ hourDeg, minuteDeg, secondDeg })
        }
        onMounted(() => {
            setInterval(() => {
                setDate()
            }, 1000);
        })
        return { btnText, isDark, toggle, time, ...toRefs(time), ...toRefs(deg) }
    }
}
</script>

<style lang="less" scoped>
@import url('https://fonts.googleapis.com/css?family=Heebo:300&display=swap');

.container {
    --primary-color: #000;
    --second-color: #fff;
    font-family: 'Heebo', sans-serif;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.5s ease-in;

    &.dark {
        --primary-color: #fff;
        --second-color: #333;

        background-color: #111;
        color: var(--primary-color);
    }

    .toggleMode {
        background-color: var(--primary-color);
        color: var(--second-color);
        font-size: 14px;
        cursor: pointer;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
        margin: 100px 0;
    }
}

.clock div:not(.center-point) {
    background-color: var(--primary-color);
    position: absolute;
    top: 50%;
    left: 50%;
    height: 65px;
    width: 3px;
    transform-origin: bottom center;
}

.clock-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    .clock {
        width: 200px;
        height: 200px;
        position: relative;

        .hour {
            transform: translate(-50%, -100%) rotate(0deg);
        }

        .minute {
            transform: translate(-50%, -100%) rotate(0deg);
            height: 100px;
        }

        .second {
            transform: translate(-50%, -100%) rotate(0deg);
            height: 100px;
            background-color: #e74c3c;
        }

        .center-point {
            position: absolute;
            width: 10px;
            height: 10px;
            background-color: #e74c3c;
            border-radius: 50%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);

            &::after {
                content: '';
                background-color: var(--primary-color);
                width: 5px;
                height: 5px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
            }
        }
    }

    /* 日期显示 */
    h2 {
        font-size: 60px;
    }

    .date {
        color: #aaa;
        font-size: 14px;
        letter-spacing: 0.3px;
        /* 大小写 */
        text-transform: uppercase;

        .circle {
            background-color: var(--primary-color);
            color: var(--second-color);
            display: inline-block;
            height: 18px;
            width: 18px;
            text-align: center;
            line-height: 18px;
            border-radius: 50%;
            font-size: 12px;
        }
    }
}
</style>