import teamphotos from "./../../../src/photos/photos/anowar.jpg"

let SupportTeamtitle = () => {
    return (


        <div class="bland">
        <p class="smallp_teams">Support Team</p>
        <p class="big_teams">Our Dedicated Support Team For Help You All Time</p>
        </div>

    )

}


let SupportTeamphotos = () => {
    return (


            <div class="dedicatedteams_allraw">

                <div class="dedicated_imagetytles">
                    <img src= {teamphotos} />
                    <p class="plent">Anowar Hossain</p>
                    <p class="plenttwo"> DreamIT Support</p>
                </div>
                <div class="dedicated_imagetytles">
                    <img src= {teamphotos} />
                    <p class="plent">Anowar Hossain</p>
                    <p class="plenttwo"> DreamIT Support</p>
                </div>
                <div class="dedicated_imagetytles">
                    <img src= {teamphotos} />
                    <p class="plent">Anowar Hossain</p>
                    <p class="plenttwo"> DreamIT Support</p>
                </div>
                <div class="dedicated_imagetytles">
                    <img src= {teamphotos} />
                    <p class="plent">Anowar Hossain</p>
                    <p class="plenttwo"> DreamIT Support</p>
                </div>
                

            </div>

       

    )
}

let SupportTeam = () => {
return (
    <div class="dedicated_teams">
        <SupportTeamtitle />
        <SupportTeamphotos />

    </div>
)

}

export {SupportTeam}

