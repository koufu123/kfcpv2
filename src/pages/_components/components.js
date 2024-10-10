// Creates Footer component
export const createFoot =()=> {
    const foot = document.createElement('div');
    foot.innerHTML = `
        <div class="border ">
            <div class="bg-b logos">
                <h5 class="text-center">Trusted Packaging Partner Nationwide</h5>
                <div class="logo_items">
                    <img src="../../assets/img/slider-logos(wbp)/mcdo.webp">
                    <img src="../../assets/img/slider-logos(wbp)/jollibee.webp">
                    <img src="../../assets/img/slider-logos(wbp)/kfc.webp">
                    <img src="../../assets/img/slider-logos(wbp)/chowking.webp">
                    <img src="../../assets/img/slider-logos(wbp)/ajinomoto.webp">
                    <img src="../../assets/img/slider-logos(wbp)/leslie's.webp">
                    <img src="../../assets/img/slider-logos(wbp)/7-eleven.webp">
                    <img src="../../assets/img/slider-logos(wbp)/unilever.webp">
                    <img src="../../assets/img/slider-logos(wbp)/famMart.webp">
                    <img src="../../assets/img/slider-logos(wbp)/armyNavy.webp">
                    <img src="../../assets/img/slider-logos(wbp)/Conti's.webp">
                    <img src="../../assets/img/slider-logos(wbp)/KuyaJ.webp">
                    <img src="../../assets/img/slider-logos(wbp)/Shell.webp">
                    <img src="../../assets/img/slider-logos(wbp)/havi.webp">
                    <img src="../../assets/img/slider-logos(wbp)/universalRobina.webp">
                    <img src="../../assets/img/slider-logos(wbp)/SM.webp">
                    <img src="../../assets/img/slider-logos(wbp)/selecta.webp">
                    <img src="../../assets/img/slider-logos(wbp)/coffeeBean&Tea.webp">
                    <img src="../../assets/img/slider-logos(wbp)/krispyKreme.webp">
                    <img src="../../assets/img/slider-logos(wbp)/snr.webp">
                    <img src="../../assets/img/slider-logos(wbp)/snackTaters.webp">
                    <img src="../../assets/img/slider-logos(wbp)/mangInasal.webp">
                </div>

                <div class="logo_items">
                    <img src="../../assets/img/slider-logos(wbp)/mcdo.webp">
                    <img src="../../assets/img/slider-logos(wbp)/jollibee.webp">
                    <img src="../../assets/img/slider-logos(wbp)/kfc.webp">
                    <img src="../../assets/img/slider-logos(wbp)/chowking.webp">
                    <img src="../../assets/img/slider-logos(wbp)/ajinomoto.webp">
                    <img src="../../assets/img/slider-logos(wbp)/leslie's.webp">
                    <img src="../../assets/img/slider-logos(wbp)/7-eleven.webp">
                    <img src="../../assets/img/slider-logos(wbp)/unilever.webp">
                    <img src="../../assets/img/slider-logos(wbp)/famMart.webp">
                    <img src="../../assets/img/slider-logos(wbp)/armyNavy.webp">
                    <img src="../../assets/img/slider-logos(wbp)/Conti's.webp">
                    <img src="../../assets/img/slider-logos(wbp)/KuyaJ.webp">
                    <img src="../../assets/img/slider-logos(wbp)/Shell.webp">
                    <img src="../../assets/img/slider-logos(wbp)/havi.webp">
                    <img src="../../assets/img/slider-logos(wbp)/universalRobina.webp">
                    <img src="../../assets/img/slider-logos(wbp)/SM.webp">
                    <img src="../../assets/img/slider-logos(wbp)/selecta.webp">
                    <img src="../../assets/img/slider-logos(wbp)/coffeeBean&Tea.webp">
                    <img src="../../assets/img/slider-logos(wbp)/krispyKreme.webp">
                    <img src="../../assets/img/slider-logos(wbp)/snr.webp">
                    <img src="../../assets/img/slider-logos(wbp)/snackTaters.webp">
                    <img src="../../assets/img/slider-logos(wbp)/mangInasal.webp">
                </div>

            </div>

        </div>
        <div class="container">
            <div class="row p-3">
                <div class="col-lg-6 col-md-12 text-center">
                    <a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img src="../../assets/img/KoufuLogo.png" alt="Company Logo" width="60" height="48">
                    </a>
                    <span class="">&copy; 2024 MIS - Koufu Color Printing Corporation</span>
                </div>

                <div id="socialContainer" class="col-lg-6 col-md-12 d-flex justify-content-end align-items-center social-container">
                    <ul class="nav d-flex list-unstyled social-links">
                        <li class="ms-3"><a class="text-secondary fs-5" href="#"><i class="bi bi-twitter-x"></i></a></li>
                        <li class="ms-3"><a class="text-muted fs-5" href="#"><i class="bi bi-linkedin"></i></a></li>
                        <li class="ms-3"><a class="text-muted fs-5" href="#"><i class="bi bi-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>  
    `;

    return foot;
};