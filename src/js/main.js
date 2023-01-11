import "./_functions";

import "./_components";

setTimeout(() => {
    // document.getElementById("preloader").remove();
}, 500);

const controlCheckboxes = document.querySelectorAll(".control--checkbox"),
    checkboxesContent = document.querySelectorAll(".instruction-tab-wrapper");
controlCheckboxes.forEach((e, t) => {
    e.addEventListener("change", () => {
        checkboxesContent?.forEach((e) => e?.classList.remove("active")),
            checkboxesContent[t]?.classList.add("active");
    });
});

const removeClass = (element, className) => element.classList.remove(className);
const addClass = (element, className) => element.classList.add(className);
const toggleClass = (element, className) => element.classList.toggle(className);
// modal logic
const modalTriggers = document.querySelectorAll("*[data-modal]");
const modals = document.querySelectorAll(".modal");
const thanksModals = [...document.querySelectorAll(".modal-thanks")];
const forms = document.querySelectorAll("form");
function isForm() {
    modalTriggers.forEach((trigger) => {
        trigger.addEventListener("click", () => {
            const attr = trigger.dataset.modal;
            document.getElementById(attr).classList.add("show");
        });
    });

    forms.forEach((form) => {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const inputs = form.querySelectorAll("input");
            inputs.forEach((input) => {
                if (!input.checked) {
                    return;
                } else {
                    modals.forEach((t) => removeClass(t, "show"));
                    inputs.forEach((i) => (i.value = ""));
                    setTimeout(() => {
                        addClass(thanksModals[0], "show");
                    }, 100);
                    setTimeout(() => {
                        removeClass(thanksModals[0], "show");
                    }, 1500);
                }
            });
        });
    });

    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            const target = e.target;
            const conditions =
                !target.closest(".modal-content") ||
                target.closest(".modal-close >img");

            if (conditions) {
                removeClass(modal, "show");
            }
        });
    });
}
isForm();
// filterDropdown
const filtersW = document.querySelectorAll(".filters-w");
filtersW.forEach((filter) => {
    const filterLabel = filter.querySelector(".filters-label > input");
    filterLabel.addEventListener("change", (e) => {
        const drop = filter.querySelector(".filters-drop");
        toggleClass(drop, "show");
    });
});
// sorting
const catalogSortItems = [...document.querySelectorAll(".catalog-sort__item")];
const catalogCards = [...document.querySelectorAll(".catalog-list .card")];
const catalogList = document.querySelector(".catalog-list");
const filterMob = document.querySelector(".filters-mob");
const filterEl = document.querySelector(".filter");
const filterClose = document.querySelector(".filters-cross");
const catalogSort = document.querySelector(".catalog-sort");
const catalogSortList = document.querySelector(".catalog-sort__list");

if (catalogSortItems.length) {
    const content = [...catalogCards];
    let sorted = [];

    catalogCards.forEach((card) => {
        card.setAttribute("data-sort", Math.floor(Math.random() * 3));
    });
    catalogSortItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            const target = e.target;
            if (item.classList.contains("active")) return;
            const attr = parseInt(item.dataset.sort);
            catalogList.innerHTML = "";
            sorted.length = 0;
            catalogSortItems.forEach((c) => removeClass(c, "active"));
            addClass(item, "active");

            if (attr === 0) {
                sorted.push(
                    ...content.sort(
                        (a, b) =>
                            parseInt(a.getAttribute("data-sort")) -
                            parseInt(b.getAttribute("data-sort"))
                    )
                );
            } else if (attr === 1) {
                sorted.push(
                    ...content.sort(
                        (a, b) =>
                            parseInt(b.getAttribute("data-sort")) -
                            parseInt(a.getAttribute("data-sort"))
                    )
                );
            } else if (attr === 2) {
                sorted.push(
                    ...content.sort(
                        (a, b) =>
                            parseInt(b.getAttribute("data-sort")) >
                            parseInt(a.getAttribute("data-sort"))
                    )
                );
            }
            sorted.forEach((e) => catalogList.append(e));

            if (target.closest(".catalog-sort__item")) {
                removeClass(catalogSortList, "show");
            }
        });
    });
}
// mobile catalog filter

if (filterEl) {
    filterMob.addEventListener("click", () => {
        addClass(filterEl, "active");
    });
    filterClose.addEventListener("click", () => {
        removeClass(filterEl, "active");
    });
    catalogSort.addEventListener("click", () => {
        addClass(catalogSortList, "show");
    });
}

const header = document.querySelector(".header");
console.log(window.getComputedStyle(header, null));
