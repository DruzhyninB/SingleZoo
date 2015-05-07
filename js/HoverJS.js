(function () {
    window.addEventListener("load", start, false);

    function start(e) {

        document.addEventListener("mouseover", function (e) {
            var element = e.target;
            if (element.getAttribute("class") == "single_price wow fadeInUp animated") { element.setAttribute("class", "single_price business_price wow fadeInUp animated"); }
}, true);

        document.addEventListener("mouseout", function (e) {
            var element = e.target;
            if (element.getAttribute("class") == "single_price business_price wow fadeInUp animated") { element.setAttribute("class", "single_price wow fadeInUp animated"); }
            
        },true);
    }
})();
