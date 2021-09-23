                    // console.log(3.1 Все элементы с классом test)
$('.test').css({color: "red"});

                    // console.log(3.2 Все <h2> с классом test.)
$('h2.test').css({color: "red"});

                    // console.log(3.3 Все абзацы которые следуют сразу за абзацами)
$('p + p').css({color: "red"});

                    // console.log(3.4 Все <li>, которые следуют сразу за <li> с классом www.)
$('li.www + li').css({color: "red"});

                    // console.log(3.5 Все <i> внутри <h2>)
$('h2 i').css({color: 'red'});

                    // console.log(3.6 все <i> непосредственно внутри <h2>.)
$('h2 > i').css({color: 'red'});

                    // console.log(4.1 Все <h2> НЕ с классом test.)
$('h2:not(.test)').css({color: 'red'});

                    // console.log(4.2 Все заголовки НЕ с классом test.)
$(':header:not(.test)').css({color: 'red'});

                    // console.log(4.3 Все заголовки, которые следуют сразу за заголовками)
$(':header + :header').css({color: 'red'});

                    // console.log(4.4 Все заголовки с классом test, которые следуют сразу за заголовками с классом test.)
$(':header.test + :header.test').css({color: 'red'});