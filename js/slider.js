function slider() {
    $(document).ready(function () {
        $('.slider__slide').slick({
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 6000
        });
    });
}
export default function () {
    slider()
}