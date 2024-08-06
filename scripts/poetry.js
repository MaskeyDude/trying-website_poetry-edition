const Poetries = [
    {
        id: 0,
        link: "https://www.pexels.com/photo/grayscale-photo-of-window-opened-2272279/",
        img: "../images/image.webp",
        alt: "Photo by Raj Dhananchezhiyan from Pexels",
        title: "Poetry Title",
        poetry: "Poetry poetry poetry Poetry poetry poetry Poetry poetry poetry",
        date: "Poet Name | Date/Month/Year"
    },
    {
        id: 1,
        link: "https://www.pexels.com/photo/grayscale-photo-of-window-opened-2272279/",
        img: "../images/image.webp",
        alt: "Photo by Raj Dhananchezhiyan from Pexels",
        title: "Hold me just for today...",
        poetry: "Hold me just for today..." + `<br>` + "Hold me just for an hour or moments even if they're few," + `<br>` + "Hold me till I cry and I'm okay," + `<br>` + "Hold me because I wanna cry like rain, not like the morning dew," + `<br>` + "It was so hard to choose you today," + `<br>` + "And here comes my heart that decides to keep on choosing you," + `<br>` + "It knows I'm made of stone and it's your warmth that makes me feel at home",
        date: "OmerM | 24/01/2024"
    },

];

const Poetries_Container = document.querySelector("#poetries");
window.addEventListener("DOMContentLoaded", function () {
    Display_Poetries(Poetries);
});

function Display_Poetries(Poetry) {
    let Display_Poetry = Poetry.map(function (item) {
        return `<section class="poetry-section">
                <!-- Poetry Related Pico -->
                <a href="${item.link}" class="poetry-image"><img src="${item.img}" alt="${item.alt}"></a>
                <!-- Poetry Title -->
                <h3 class="poetry-title">${item.title}</h3>
                <br>
                    <!-- Poetry -->
                    <p class="poetry">${item.poetry}</p>
                    <br>
                        <!-- Poetry Details -->
                        <p class="poetry-detail">${item.date}</p>
                    </section>`;
    });

    Display_Poetry = Display_Poetry.join("");
    Poetries_Container.innerHTML = Display_Poetry;

};