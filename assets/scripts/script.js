document.getElementById("btn").addEventListener("click", function () {
    let button = document.getElementById("btn")
    let menu = document.getElementById("menuMobile")
    if(button.classList.contains("active")) {
        button.classList.add("not-active");
        button.classList.remove("active")
        fadeOut(menu)
    } else {
        button.classList.add("active");
        button.classList.remove("not-active")
        fadeIn(menu)
    }
})

window.addEventListener('resize', function () {
    let menu = document.getElementById("menuMobile")
    let button = document.getElementById("btn")
    if(window.innerWidth > 630) {
        menu.style.display = "none"
        button.classList.add("not-active");
        button.classList.remove("active")
    }
});

function fadeIn(el) {
    el.style.opacity = 0;
    el.style.display = "flex"
    let last = +new Date();
    let tick = function() {
        el.style.opacity = +el.style.opacity + (new Date() - last) / 100;
        last = +new Date();

        if (+el.style.opacity < 1) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 1);
        }
    };

    tick();
}

function fadeOut(el) {
    el.style.opacity = 1;

    let last = +new Date();
    let tick = function() {
        el.style.opacity = +el.style.opacity - (new Date() - last) / 100;
        last = +new Date();

        if (+el.style.opacity > 0) {
            (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 1);
        }

        if (el.style.opacity < 0){
            setTimeout(() => { el.style.display = "none" }, 401)
        }

    };
    tick();
}

document.querySelectorAll("span").forEach((span) => {
    let tekst = span.innerHTML;
    tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;"); //jednoznakowe
    tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;"); //dwuznakowe
    span.innerHTML = tekst ;
});

document.querySelectorAll("h2").forEach((span) => {
    let tekst = span.innerHTML;
    tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;"); //jednoznakowe
    tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;"); //dwuznakowe
    span.innerHTML = tekst ;
});


document.querySelectorAll("p").forEach((span) => {
    let tekst = span.innerHTML;
    tekst = tekst.replace(/(\s)([\S])[\s]+/g,"$1$2&nbsp;"); //jednoznakowe
    tekst = tekst.replace(/(\s)([^<][\S]{1})[\s]+/g,"$1$2&nbsp;"); //dwuznakowe
    span.innerHTML = tekst ;
});

function addSlideUp (buttonClass) {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.getElementsByClassName(buttonClass)
        Array.from(buttons).forEach(function (button) {
            let container = button.parentElement.children[1]
            moreSlideDown(button, container)
        })
    })
}

function moreSlideDown (button, container) {
    button.addEventListener('click', () => {
        if( button.classList.contains("active")) {
            button.classList.remove("active")
        } else {
            button.classList.add("active")
        }

        /** Slide down. */
        button.style.display = "none";
        if(!container.classList.contains('active')) {
            container.classList.add('active')
            container.style.height = "auto"

            let height = container.clientHeight + "px"

            container.style.height = "0px"

            setTimeout(() => {
                container.style.height = height
            }, 0)
            /** Slide up. */
        }
    })
}

function addSlideDownAndUp (buttonClass) {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.getElementsByClassName(buttonClass)
        Array.from(buttons).forEach(function (button) {
            let container = button.parentElement.children[1]
            buttonEventOnOffers(button,container)
        })
    })
}

window.addEventListener('resize', function () {
    const buttons = document.getElementsByClassName("pointRow")
    Array.from(buttons).forEach(function (button) {
        let container = button.parentElement.children[1]

        if(container.classList.contains('active')) {
            container.style.height = "auto"

            container.style.height = container.clientHeight + "px"
        }
    })
});

function buttonEventOnOffers (button, container) {
    button.addEventListener('click', () => {
        if( button.classList.contains("active")) {
            button.classList.remove("active")
            button.children[1].classList.remove("active")
        } else {
            button.classList.add("active")
            button.children[1].classList.add("active")
        }

        /** Slide down. */
        if(!container.classList.contains('active')) {
            container.classList.add('active')
            container.style.height = "auto"

            container.parentElement.classList.add('active')

            let height = container.clientHeight + "px"

            container.style.height = "0px"

            setTimeout(() => {
                container.style.height = height
            }, 0)
            /** Slide up. */
        } else {
            container.style.height = container.clientHeight + "px"
            container.style.height = "0px"

            container.addEventListener('transitionend', () => {
                container.classList.remove('active')
                container.parentElement.classList.remove('active')
            }, {once: true})
        }
    })
}

function modalButtons () {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.querySelectorAll('[data-modal]');

        Array.from(buttons).forEach(function (button) {
            button.addEventListener("click",() => {
                document.getElementById("modalBackground").classList.remove("modalBackgroundHidden")
                document.getElementById(button.dataset.modal).classList.remove("modalWrapperHidden")
            })

        })
    })
}

function closeModal () {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.getElementsByClassName("close")
        Array.from(buttons).forEach(function (button) {
            button.addEventListener("click",() => {
                button.parentElement.parentElement.parentElement.classList.add("modalWrapperHidden")
                setTimeout(() => {
                    document.getElementById("modalBackground").classList.add("modalBackgroundHidden")
                },200)
            })
        })
    })
}

function closeModalBack () {
    document.addEventListener( 'DOMContentLoaded', function () {
        const buttons = document.getElementsByClassName("modalWrapper")
        Array.from(buttons).forEach(function (button) {
            button.addEventListener("click",(event) => {
                if(event.target === button) {
                    button.classList.add("modalWrapperHidden")
                    setTimeout(() => {
                        document.getElementById("modalBackground").classList.add("modalBackgroundHidden")
                    },200)
                }
            })
        })
    })
}

document.addEventListener( 'DOMContentLoaded', function () {
    const buttons = document.getElementsByClassName("buttonScroll")

    Array.from(buttons).forEach(function (button) {
        button.addEventListener("click", function() {
            console.log(button.dataset.scroll)
            document.getElementById(button.dataset.scroll).scrollIntoView({ behavior: 'smooth' });
        })
    })
});


addSlideUp("moreButton");
addSlideDownAndUp("pointRow");
modalButtons();
closeModal()
closeModalBack()

AOS.init({
    easing: 'ease-in-out-sine',
    duration: 500
});

let OsChecker = () => {
    const os = [
        { name: "Android", value: "Android" },
        { name: "iPhone", value: "iPhone" },
        { name: "iPad", value: "Mac" },
        { name: "Macintosh", value: "Mac" }
    ];

    let userDetails = navigator.userAgent;

    if(window.innerWidth < 1024) {
        for (let i in os) {
            if (userDetails.includes(os[i].value)) {
                if(os[i].name === "Android") {
                    Array.from(document.getElementsByClassName("changeHref")).forEach((item) => {
                        item.href = "https://kampanie.mbank.pl/?link=https%3A%2F%2Fkampanie-deeplink.mbank.pl%2Fapp%2Fror_mb%2Findex.html%3Fkampania%3DDL_port_24_cube_akcjaspecjalna&ibi=pl.mobiltek.mbank&isi=454987093&apn=pl.mbank&ofl=https%3A%2F%2Fform.mbank.pl%2Fapp%2Fror_mb%2Findex.html%3Foption%3Dport_24%26ntrf%3DOS%26ekpromocja%3D9290920229%26ekprom%3D5290920225%26ekwsp%3D1%26ekzna%3D1%26cel%3D1%26ekdata%3D1675814400000%26cyber%3D1%26edo%3D1%26income%3D1%26sprzedawca%3Dcube_akcjaspecjalna"
                        item.innerText = "załóż konto przez aplikację"
                    })
                } else if(os[i].name === "iPhone" || os[i].name === "iPad" || os[i].name === "Macintosh") {
                    Array.from(document.getElementsByClassName("changeHref")).forEach((item) => {
                        item.href = "https://kampanie.mbank.pl/?link=https%3A%2F%2Fkampanie-deeplink.mbank.pl%2Fapp%2Fror_mb%2Findex.html%3Fkampania%3DDL_port_24_cube_akcjaspecjalna&ibi=pl.mobiltek.mbank&isi=454987093&apn=pl.mbank&ofl=https%3A%2F%2Fform.mbank.pl%2Fapp%2Fror_mb%2Findex.html%3Foption%3Dport_24%26ntrf%3DOS%26ekpromocja%3D9290920229%26ekprom%3D5290920225%26ekwsp%3D1%26ekzna%3D1%26cel%3D1%26ekdata%3D1675814400000%26cyber%3D1%26edo%3D1%26income%3D1%26sprzedawca%3Dcube_akcjaspecjalna"
                        item.innerText = "załóż konto przez aplikację"
                    })
                } else {
                    Array.from(document.getElementsByClassName("changeHref")).forEach((item) => {
                        item.href = "https://appgallery.cloud.huawei.com/ag/n/app/C102250427?channelId=EUPLBDD20201120MB&detailType=0"
                        item.innerText = "załóż konto przez aplikację"
                    })
                }
                break;
            }
        }
    } else {
        Array.from(document.getElementsByClassName("changeHref")).forEach((item) => {
            item.href = "https://form.mbank.pl/app/ror_mb/index.html?option=port_24&ntrf=OS&ekpromocja=9290920229&ekprom=5290920225&ekwsp=1&ekzna=1&cel=1&ekdata=1675814400000&cyber=1&edo=1&income=1&sprzedawca=cube_akcjaspecjalna"
            item.innerText = "załóż konto"
        })
    }
};

addEventListener('DOMContentLoaded', (event) => {
    OsChecker();
    window.addEventListener( "resize", () => {
        OsChecker();
    })
});

