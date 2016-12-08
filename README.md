# Google Polymer

Google Polymer(폴리머) 사이트로 실습하는 반응형, 모바일, 고정형 사이트

### View Site

1. [Polymer - Fixed(고정형) Web](http://www.herop.me/polymer/)

1. [Polymer - Mobile(모바일) Web](http://www.herop.me/polymer/mobile)

1. [Polymer - Responsive(반응형) Web](http://www.herop.me/polymer/responsive)

### text

```text
Get Started
Guides & Resources
Element Catalog
Blog

Production ready

Polymer 1.0 has been rebuilt from the ground up for speed and efficiency.
The new, leaner core library makes it easier than ever to make fast, beautiful, and interoperable web components.
If you haven't used Polymer before, it's time to try it out.
If you haven't tried it recently, time to take another look.
```

### Code

#### main.js

```js
$(function () {

    var $menuCopy = $('.menu_copy');

    $('.menu_btn').on('click', function () {
        $menuCopy.toggleClass('on');
    });
    
    $(window).on('resize', function () {
        if ($(this).width() > 850) {
            $menuCopy.removeClass('on');
        }
    });

});
```

#### index.html(Mobile Web)

```html
<a class="desktop_mode" href="http://herop.me/polymer?desktopMode">DESKTOP MODE</a>
```

#### mobile.css

```css
/*Desktop Mode Btn*/
.desktop_mode {
    height: 40px;
    margin: 20px 10px;
    border-radius: 4px;
    color: white;
    font-weight: 400;
    background-color: #595F80;
    line-height: 40px;
    text-align: center;
    display: block;
}
```

#### index.html(Fixed Web)

```js
// DESKTOP MODE 로 접속하지 않았을 경우에만...
if (!location.href.match(/desktopMode/i)) {
    // 모바일 환경에서 접속했는지 체크...
    if (navigator.userAgent.match(/Android/i)
        || navigator.userAgent.match(/webOS/i)
        || navigator.userAgent.match(/iPhone/i)
        || navigator.userAgent.match(/iPad/i)
        || navigator.userAgent.match(/iPod/i)
        || navigator.userAgent.match(/BlackBerry/i)
        || navigator.userAgent.match(/Windows Phone/i)
    ) {
        // 모바일 환경에서 접속했다면 모바일 페이지로 링크
        location.href = "http://herop.me/polymer/mobile"
    }
}
```
