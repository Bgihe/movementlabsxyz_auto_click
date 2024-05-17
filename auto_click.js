// 設置間隔時間為1000毫秒（1秒）
setInterval(function() {
    var button = document.querySelector('button.css-1006cla.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedPrimary');

    // 如果按鈕存在，則觸發點擊事件
    if (button) {
        button.click();
    } else {
        console.log('按鈕未找到');
    }
}, 1000);