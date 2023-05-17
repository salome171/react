import responsivephoto from "./../../photos/photos/responsive.png"

const Responsive = () => {
    return (

        <div class="responsive_device">

        <div class="responsive_deviceleft">
            <h6>RESPONSIVE</h6>
            <h4>
                100% Responsive<br />
                For All Device
            </h4>
            <p>Techno HTML5 template is fully responsive for all kind of device specilly this template</p>
        </div>

        <div class="responsive_photo">
            <figure><img src={responsivephoto} /></figure>
        </div>

    </div>

    )
}

export {Responsive}