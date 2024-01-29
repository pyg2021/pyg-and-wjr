new TypeIt("#pygwjr", {
        loop: true,
        cursorSpeed: 1000,
        speed: 100
    })
    .type("PYG ❤ WJR")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("这是我们一起走过的第一年")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("时间过得真的很快")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .type("有你的陪伴是我的幸运")
    .pause(2000)
    .delete(null, {
        delay: 500
    })
    .go()
new TypeIt('#talkToWJR', {
    lifeLike: true,
    cursorSpeed: 1000,
    waitUntilVisible: true,
    speed: 100
}).go();