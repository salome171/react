import Corephoto from "./../../../src/photos/photos/f15 - Copy.png"

const CoreFeaturesTitle = () => {
return (
    
    <div class="blander">
    <p class="smallp_teamstwob">CORE FEATURES</p>
    <p class="big_teamstwo">Constantly update with New Features.</p>
</div>
)

}

const CoreFeaturesContent = () => {

    return (
        
        <div class="allcorefetures">

        <div class="border_features">
            <div class="inside_border">
                <img src={Corephoto}/>
                <p>HTML5</p>
            </div>
        </div>
        <div class="border_features">
            <div class="inside_border">
            <img src={Corephoto}/>
                <p>HTML5</p>
            </div>
        </div>
        <div class="border_features">
            <div class="inside_border">
            <img src={Corephoto}/>
                <p>HTML5</p>
            </div>
        </div>
        <div class="border_features">
            <div class="inside_border">
            <img src={Corephoto}/>
                <p>HTML5</p>
            </div>
        </div>
        <div class="border_features">
            <div class="inside_border">
            <img src={Corephoto}/>
                <p>HTML5</p>
            </div>
        </div>
        <div class="border_features">
            <div class="inside_border">
            <img src={Corephoto}/>
                <p>HTML5</p>
            </div>
        </div>
        <div class="border_features">
            <div class="inside_border">
            <img src={Corephoto}/>
                <p>HTML5</p>
            </div>
        </div>     

    </div>
    )
    
}


const CoreFeatures = () => {
    return (

        <div class="core_features">

            <CoreFeaturesTitle />
            <CoreFeaturesContent />

        </div>

    )
}

export {CoreFeatures}