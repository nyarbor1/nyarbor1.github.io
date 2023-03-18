//when the webpage is loaded
jQuery(document).ready(function($) {
    let imageNumber = 1;

    
    $('.forward').unbind().click(() => {
        console.log("forward")
        if(imageNumber == 6) {
            imageNumber = 1
        } else {
            imageNumber++;
        }
        const nextImg = `./images/slideshow${imageNumber}.jpg`
        $('#slide').attr('src', nextImg)
    })

    $('.back').unbind().click(() => {
        console.log("back")
        if(imageNumber == 1) {
            imageNumber = 6
        } else {
            imageNumber--;
        }
        const nextImg = `./images/slideshow${imageNumber}.jpg`
        $('#slide').attr('src', nextImg)
    })


});