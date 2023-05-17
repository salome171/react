import logo from "./../../photos/photos/logo.png"

const HeaderTitle = () => {

   return ( 
   <figure>
    <a href="./index.html">
        <img class="logo" src={logo} />
    </a>
</figure> )

}

const HeaderList = () => {

    return(   
   
            <div class="navigate-button">
                <nav>
                    <ul>
                        <li>
                            <a href="">home</a>
                        </li>
                        <li>
                            <a href="">Demo</a>
                        </li>
                        <li>
                            <a href="">Inner Pages</a>
                        </li>
                        <li>
                            <a href="">Support</a>
                        </li>
                        <li>
                            <a href="">Feature</a>
                        </li>
                        <li>
                            <a href="">Blog</a>
                        </li>
                    </ul>
                </nav>
                <button>Get started</button>
            </div>
      
    )

}

const HeaderWrapper = () => {

    return ( 
        <header>
        <div class="wrapper">
            < HeaderTitle />
            < HeaderList />

        </div>
        </header>
     )
 
 }



export {HeaderWrapper}