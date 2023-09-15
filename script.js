gsap.to("#nav",{
    backgroundColor: "#000",
    duration:0.5,
    height:"80px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start: "top -10%",
        end:"top -11%",
        scrub:1
    }
})

var crsr = document.querySelector("#cursor")
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})
var crsrb = document.querySelector("#cursor-blur")
document.addEventListener("mousemove", function(dets){
    crsrb.style.left = dets.x -90 +"px"
    crsrb.style.top = dets.y - 90 +"px"
})
gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -75%",
        scrub:2
    }
})