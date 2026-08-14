// =========================================================
// MOBILE MENU
// =========================================================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

if (menuButton && mobileMenu) {

    menuButton.addEventListener("click", () => {

        mobileMenu.classList.toggle("active");

    });


    mobileMenu
        .querySelectorAll("a")
        .forEach(link => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

            });

        });

}


// =========================================================
// CONTACT FORM
// =========================================================

const contactForm =
    document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();

            const formData =
                new FormData(contactForm);

            const name =
                formData.get("name") || "";

            const phone =
                formData.get("phone") || "";

            const message =
                formData.get("message") || "";


            const text =
                `Здравствуйте!

` +
                `Хочу узнать стоимость ремонта бампера.

` +
                `Имя: ${name}
` +
                `Телефон: ${phone}
` +
                `Описание: ${message}`;


            /*
             * ЗАМЕНИТЕ 79999999999
             * на настоящий номер WhatsApp.
             */

            const whatsappNumber =
                "79999999999";


            const whatsappUrl =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(text);


            window.open(
                whatsappUrl,
                "_blank"
            );

        }
    );

}


// =========================================================
// HEADER SCROLL
// =========================================================

const header =
    document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) {
        return;
    }

    if (window.scrollY > 50) {

        header.style.background =
            "rgba(21, 21, 21, .95)";

        header.style.backdropFilter =
            "blur(15px)";

    } else {

        header.style.background =
            "transparent";

        header.style.backdropFilter =
            "none";

    }

});
