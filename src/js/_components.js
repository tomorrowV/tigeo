// custom select
const customSelects = document.querySelectorAll(".custom-select");
if (customSelects) {
    let selects = [...customSelects];
    let selectsLength = selects.length;
    let ll;
    let selElmnt;
    let a;
    let b;
    let c;
    for (let i = 0; i < selectsLength; i++) {
        selElmnt = selects[i].getElementsByTagName("select")[0];
        ll = selElmnt.length;
        a = document.createElement("div");
        a.setAttribute("class", "select-selected");
        a.textContent = selElmnt.options[selElmnt.selectedIndex].textContent;
        selects[i].appendChild(a);
        b = document.createElement("div");
        b.setAttribute("class", "select-items select-hide");

        for (let j = 1; j < ll; j++) {
            c = document.createElement("DIV");
            c.textContent = selElmnt.options[j].textContent;
            c.addEventListener("click", function (canCreateDiscussions) {
                let readOnlyElements;
                let i;
                let j;
                let selector;
                let element;
                let sl;
                let dataUriLength;
                selector =
                    this.parentNode.parentNode.getElementsByTagName(
                        "select"
                    )[0];
                sl = selector.length;
                element = this.parentNode.previousSibling;
                i = 0;
                for (; i < sl; i++) {
                    if (selector.options[i].innerHTML == this.innerHTML) {
                        selector.selectedIndex = i;
                        element.innerHTML = this.innerHTML;
                        readOnlyElements =
                            this.parentNode.getElementsByClassName(
                                "same-as-selected"
                            );
                        dataUriLength = readOnlyElements.length;
                        j = 0;
                        for (; j < dataUriLength; j++) {
                            readOnlyElements[j].removeAttribute("class");
                        }
                        this.setAttribute("class", "same-as-selected");
                        break;
                    }
                }
                element.click();
            });
            b.appendChild(c);
        }
        selects[i].appendChild(b);
        a.addEventListener("click", function (event) {
            event.stopPropagation();
            closeAllSelect(this);
            this.nextSibling.classList.toggle("select-hide");
            this.classList.toggle("select-arrow-active");
        });
    }
    const closeAllSelect = (value) => {
        let repeatClasses;
        let selectedItems;
        let i;
        let tableslen;
        let msgContentCount;
        let hash_settings = [];
        repeatClasses = document.getElementsByClassName("select-items");
        selectedItems = document.getElementsByClassName("select-selected");
        tableslen = repeatClasses.length;
        msgContentCount = selectedItems.length;
        i = 0;
        for (; i < msgContentCount; i++) {
            if (value == selectedItems[i]) {
                hash_settings.push(i);
            } else {
                selectedItems[i].classList.remove("select-arrow-active");
            }
        }
        i = 0;
        for (; i < tableslen; i++) {
            if (hash_settings.indexOf(i)) {
                repeatClasses[i].classList.add("select-hide");
            }
        }
    };
    document.addEventListener("click", closeAllSelect);
}

// accordions
const accordionButtons = document.querySelectorAll(".accordion-button");
const accordionContents = document.querySelectorAll(".accordion-collapse");
if (accordionButtons && accordionContents) {
    accordionButtons.forEach((acc, index) => {
        const panel = accordionContents[index];
        acc.addEventListener("click", () => {
            accordionButtons.forEach((a) =>
                a.setAttribute("aria-expanded", "false")
            );
            accordionContents.forEach((a) => (a.style.maxHeight = null));
            acc.setAttribute("aria-expanded", "true");
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
}

// phone validation

const phoneInputs = document.querySelectorAll("input[type='tel']");

const prefixNumber = (str) => {
    if (str === "7") {
        return "7 (";
    }
    if (str === "8") {
        return "7 (";
    }
    if (str === "9") {
        return "7 (9";
    }
    return "7 (";
};

phoneInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
        const value = input.value.replace(/\D+/g, "");
        const numberLength = 11;
        let result;
        if (input.value.includes("+8") || input.value[0] === "8") {
            result = "+";
        } else {
            result = "+";
        }

        for (let i = 0; i < value.length && i < numberLength; i++) {
            switch (i) {
                case 0:
                    result += prefixNumber(value[i]);
                    continue;
                case 4:
                    result += ") ";
                    break;
                case 7:
                    result += "-";
                    break;
                case 9:
                    result += "-";
                    break;
                default:
                    break;
            }
            result += value[i];
        }
        input.value = result;
    });
});

// filters content
const filterItems = document.querySelectorAll(".filters-item");
const filterBlocks = document.querySelectorAll(".filters-block");

if (filterItems.length) {
    filterItems.forEach((item) => {
        const head = item.querySelector("h3");
        const content = item.querySelector(".filters-content");
        if (head) {
            head.addEventListener("click", () => {
                head.classList.toggle("active");
                content.classList.toggle("show");
            });
        }
    });
    filterBlocks.forEach((filter) => {
        const drop = filter.querySelector(".drop");
        const dropContent = filter.querySelector(".filters-drop");

        if (dropContent) {
            drop.addEventListener("click", () => {
                dropContent.classList.toggle("show");
                drop.classList.toggle("show");
            });
        }
    });
}
// header top position
const header = document.querySelector(".header");
if (header) {
    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        if (top > 100) {
            header.style.top = "-41px";
        } else {
            header.style.top = "0";
        }
    });
}

// buttons to cart animation
const btnsToCart = document.querySelectorAll(".add-to-cart");
if (btnsToCart) {
    btnsToCart.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("added");
        });
    });
}
// buttons comparison animation
// compare buttons add | icon show compare count
const btnsToComparison = document.querySelectorAll(".add-comparison");
const comparisonCounter = document.querySelector(
    ".header-basket-compare > span"
);
if (btnsToComparison) {
    let counter = 0;
    comparisonCounter.textContent = counter;
    btnsToComparison.forEach((btn) => {
        btn.addEventListener("click", () => {
            if (btn.classList.contains("added")) {
                btn.classList.remove("added");
                counter--;
            } else {
                btn.classList.add("added");
                counter++;
            }
            comparisonCounter.textContent = counter;
        });
    });
}

// transform days to amount
const cardsNum = document.querySelectorAll(".card-num");
const cardsCount = document.querySelectorAll(".card-res");
if (cardsNum) {
    cardsNum.forEach((num, index) => {
        num.addEventListener("input", (e) => {
            const value = parseInt(e.target.value);
            const perDay = cardsCount[index].getAttribute("data-perday");
            if (e.target.value.length > 0) {
                cardsCount[index].value = value * perDay;
            } else {
                cardsCount[index].value = 0;
            }
        });
    });
}

// button scroll to top
const scrollTop = document.getElementById("scroll-top");
if (scrollTop) {
    window.addEventListener("scroll", () => {
        const top = window.scrollY;
        if (top > 500) {
            scrollTop.classList.add("show");
        } else {
            scrollTop.classList.remove("show");
        }
    });

    scrollTop.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
        });
    });
}
// mobile menu open | close
const mobileMenuTrigger = document.querySelector(".mob-m");
const mobileNav = document.querySelector(".header-nav");
const mobileNavClose = document.querySelector(".header-cross");
if (mobileMenuTrigger) {
    mobileMenuTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        mobileNav.classList.add("show");
    });
    mobileNavClose.addEventListener("click", (e) => {
        e.preventDefault();
        mobileNav.classList.remove("show");
    });
}
// basket open | close

const headBasket = document.querySelector(".head-basket-block");
const baksetCount = headBasket?.querySelector(".count");
const basket = document.querySelector(".basket-order");
const mobileBasket = document.querySelector(".mob-basket");
const basketItems = document.querySelectorAll(".basket-order-block");
let baksetLength = basketItems.length;

if (headBasket) {
    headBasket.addEventListener("click", (e) => {
        e.preventDefault();
        basket.classList.add("active");
    });
}
// mobile basket open | close
// basket logic

if (mobileBasket) {
    mobileBasket.addEventListener("click", (e) => {
        e.preventDefault();
        basket.classList.add("active");
    });
    basketItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            const target = e.target;
            const itemCount = item.querySelector(".count-in > input");
            let counter = 0;
            if (target.closest(".icon svg")) {
                item.remove();
                baksetLength--;
                baksetCount.textContent = baksetLength;
            }
            if (target.closest(".plus")) {
                counter++;
                itemCount.value = counter;
            }
            if (target.closest(".minus")) {
                counter--;
                itemCount.value = counter;
            }
        });
    });
    document.addEventListener("click", (e) => {
        if (
            !e.target.closest(".basket-order") &&
            !e.target.closest(".head-basket-block") &&
            !e.target.closest(".icon") &&
            !e.target.closest(".mob-basket")
        ) {
            basket.classList.remove("active");
        }
    });
}
// search mobile btn open | close
const searchBtnMobile = document.querySelector(".search-btn.mobile");
const headerSearchMobile = document.querySelector(".header-search--mob");
if (searchBtnMobile) {
    searchBtnMobile.addEventListener("click", (e) => {
        e.preventDefault();
        headerSearchMobile.style.top = 0;
    });
    headerSearchMobile
        .querySelector(".search-cross")
        .addEventListener("click", () => {
            headerSearchMobile.style.top = "-120%";
        });
}
// videoPlayer fullsize
const videoPlay = document.querySelectorAll(".about-video");
const videoPlayer = document.querySelector(".modal-video");
const videoPlayerFrame = videoPlayer?.querySelector("iframe");
const reviewsVideos = document.querySelectorAll(".reviews-v");
const videoReview = document.querySelectorAll(".tab-v");

if (videoPlay) {
    const playFunc = (arr, playerFrame, player) => {
        arr.forEach((play) => {
            play.addEventListener("click", (e) => {
                const attr = play.getAttribute("data-video-url");
                playerFrame.setAttribute("src", attr);
                player.classList.add("show");
            });
        });
    };
    const playerListener = (player, playerFrame) => {
        player?.addEventListener("click", (e) => {
            if (
                e.target.closest(".modal-video-close-btn") ||
                !e.target.closest(".modal-video-movie-wrap")
            ) {
                player.classList.remove("show");
                playerFrame.removeAttribute("src");
            }
        });
    };
    playFunc(videoPlay, videoPlayerFrame, videoPlayer);
    playerListener(videoPlayer, videoPlayerFrame);
    if (reviewsVideos) {
        playFunc(reviewsVideos, videoPlayerFrame, videoPlayer);
    }
    if (videoReview) {
        playFunc(videoReview, videoPlayerFrame, videoPlayer);
    }
}

// dropdowm mobile menu
const dropdowmTrigger = document.querySelectorAll(".drop");
const dropdownTriggerSecond = document.querySelectorAll(".drop-list__item");
if (dropdowmTrigger && window.innerWidth <= 991) {
    dropdowmTrigger.forEach((trigger, index) => {
        const droplist = trigger.parentElement.querySelector(".drop-list");
        trigger.addEventListener("click", () => {
            trigger?.classList.toggle("active");
            droplist?.classList.toggle("show");
        });
    });
    dropdownTriggerSecond.forEach((trigger, index) => {
        const droplist = trigger.querySelector(".drop-list2");
        trigger.addEventListener("click", () => {
            if (droplist) {
                trigger?.classList.toggle("active");
                droplist?.classList.toggle("show");
            }
        });
    });
}

const serviceTabs = document.querySelectorAll(".service-price-tab");
const serviceMore = document.querySelector(".ser-tab-btn");
if (serviceTabs.length) {
    serviceMore.addEventListener("click", () => {
        serviceTabs.forEach((t) => t.classList.remove("hide"));
    });
}

// footer trigger button
const footerTrigger = document.querySelector(".ftr-cat-btn");
const footerNav = document.querySelector(".footer-nav");

if (footerTrigger && window.innerWidth <= 992) {
    footerTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        footerTrigger.classList.toggle("active");
        footerNav.classList.toggle("active");
    });
}

// card-product tabs
const cardProductSwitchers = document
    .querySelector(".nav-tabs")
    ?.querySelectorAll(".nav-link");
const cardProductContents = document
    .querySelector(".tab-content")
    ?.querySelectorAll(".tab-pane");

if (cardProductContents && cardProductContents) {
    cardProductSwitchers.forEach((switcher, index) => {
        switcher.addEventListener("click", (e) => {
            e.preventDefault();

            cardProductSwitchers.forEach((c) =>
                c.classList.remove("show", "active")
            );
            cardProductContents.forEach((c) => c.classList.remove("active"));

            switcher.classList.add("active");
            cardProductContents[index].classList.add("show", "active");
        });
    });
}
if (cardProductContents && cardProductSwitchers && window.innerWidth <= 767) {
    const switcher = document.querySelector(".nav-tabs");
    cardProductSwitchers.forEach((btn, index) => {
        btn.addEventListener("click", (e) => {
            const parentElement = btn.parentElement;
            parentElement.classList.toggle("active");
        });
    });
}

const productCount = document.querySelector(".product-count .count");
if (productCount) {
    const plus = productCount.querySelector(".plus");
    const minus = productCount.querySelector(".minus");
    const total = productCount.querySelector(".count-in > input");
    let val = 1;
    plus.addEventListener("click", () => {
        val++;
        total.value = val;
    });
    minus.addEventListener("click", () => {
        if (val === 0) {
            val = 0;
            return;
        }
        val--;
        total.value = val;
    });
}

const framePlay = document.querySelectorAll(".play"),
    player = document.getElementById("player");
framePlay &&
    (player?.insertAdjacentHTML(
        "beforeend",
        `
            <iframe width="560" height="315" src="" title="YouTube video player"
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>`
    ),
    framePlay.forEach((e) => {
        e.addEventListener("click", (e) => {
            e.preventDefault(),
                player
                    .querySelector("iframe")
                    .setAttribute(
                        "src",
                        "https://www.youtube.com/embed/LXb3EKWsInQ"
                    ),
                player.classList.add("show");
        });
    }),
    player?.addEventListener("click", (e) => {
        let t = e.target;
        (t.closest(".player-close") || t !== player.querySelector("iframe")) &&
            (player.querySelector("iframe").removeAttribute("src"),
            player.classList.remove("show"));
    }));
