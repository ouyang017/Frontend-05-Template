学习笔记
### JS 处理帧
## 方式
16毫秒（1000/60）
1、 setTnterval(() => {},16)
2、 let tick = () => {
    setTimeout(tick,16)
}
3、let tick = () => {
    requestAnimationFrame(tick)
}

## 动画
属性动画、帧动画