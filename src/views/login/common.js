function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
export function refreshCode(refs) {
    const canvas = refs;
    const context = canvas.getContext('2d');
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let code = '';

    // 只清空验证码区域
    context.clearRect(0, 0, canvas.width, canvas.height);

    // 绘制干扰线
    for (let i = 0; i < 6; i++) {
        context.strokeStyle = getRandomColor();
        context.beginPath();
        context.moveTo(getRandomNumber(0, canvas.width), getRandomNumber(0, canvas.height));
        context.lineTo(getRandomNumber(0, canvas.width), getRandomNumber(0, canvas.height));
        context.stroke();
    }

    // 随机生成验证码字符
    for (let i = 0; i < 4; i++) {
        const char = characters.charAt(Math.floor(Math.random() * characters.length));
        code += char;

         // 计算字符的 x 和 y 坐标位置
    const x = (canvas.width / 5) * i + (canvas.width / 20); // 水平间距为画布宽度的 1/20
    const y = canvas.height / 1.5; // 垂直位置为画布高度的一半

    // 在画布上绘制验证码字符
    context.font = '100px Arial';
    context.fillStyle = getRandomColor();
    context.fillText(char, x, y);
    }
    // 返回正确的验证码
    return code;
}
