


import BloggingStylephoto from "./../../photos/photos/b6.jpg"

let  BloggingStyleTitle = () => {
    return (

        <h4>DIFFERENT BLOGGING STYLE !</h4>

    )
}

let  BloggingStyleContent = () => {
    return (
        <article class="threephotos">
        <figure><img src={BloggingStylephoto} /></figure>
        <figure><img src={BloggingStylephoto} /></figure>
        <figure><img src={BloggingStylephoto} /></figure>
        </article>
    )
}

let BloggingStyle = () => {
    return (

        <div class="different_blogging">

            <BloggingStyleTitle />
            <BloggingStyleContent />

        </div>

  
    )
}

export {BloggingStyle}