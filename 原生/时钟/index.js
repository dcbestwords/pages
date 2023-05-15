const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.clock-container h2')
const dateprimaryEl = document.querySelector('.date .primary')
const dayEl = document.querySelector('.date .circle')
const btnEl = document.querySelector('.toggleMode')

function setDate() {
    const currentTime = new Date();
    const day = days[currentTime.getDay()];//星期几
    const date = String(currentTime.getDate());//几号
    const month = months[currentTime.getMonth()];//几月
    const hour = currentTime.getHours();//几点
    const hourFormat = (hour - 1) % 12 + 1;
    const minute = currentTime.getMinutes();//几分
    const second = currentTime.getSeconds();//几秒
    const ampm = hour < 12 ? 'AM' : 'PM';
    const hourDeg = scale(hourFormat, 0, 12, 0, 360);
    const minuteDeg = scale(minute, 0, 60, 0, 360);
    const secondDeg = scale(second, 0, 60, 0, 360);

    // 更新时间
    hourEl.style.transform = `translate(-50%, -100%) rotate(${hourDeg}deg)`
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteDeg}deg)`
    secondEl.style.transform = `translate(-50%, -100%) rotate(${secondDeg}deg)`
    timeEl.innerText = `${hourFormat}:${minute < 10 ? ('0' + minute) : minute} ${ampm}`;
    dateprimaryEl.innerText = `${day}，${month}`;
    dayEl.innerText = date;
}

/**
 * 
 * @returns 映射之后的值
 */
function scale(num, in_min, in_max, out_min, out_max) {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

btnEl.addEventListener('click', () => {
    const htmlEl = document.querySelector('html');
    if (htmlEl.classList.contains('dark')) {
        htmlEl.classList.remove('dark');
        btnEl.innerText = 'Dark mode';
    } else {
        htmlEl.classList.add('dark');
        btnEl.innerText = 'Light mode';
    }
})

setInterval(() => {
    setDate()
}, 1000)