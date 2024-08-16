

function startAnimation() {
    let tl = gsap.timeline();
        
    tl.from(".number",{
        opacity:0,
        onStart: function(){
            let number = document.querySelector(".number span").textContent;
            let count = 0;
            let counter = setInterval(() => {
                document.querySelector(".number span").textContent = count;
                if(count === 100){
                    clearInterval(counter);
                }
                count++;
            }, 33);
        }
    })


    tl.from(".line1, .line2 , .line3 ,.line4",{
        y:50,
        duration:0.7,
        delay:0.3,
        opacity:0,
        stagger:0.2,
    })

    tl.to(".loader",{
        opacity:0,
        duration:0.4,
        delay:1.5,
    })

    tl.from(".page1",{
        y:1600,
        opacity:0,
        delay:0.1,
        duration:0.1,
        ease:Power4,
    })

    tl.to(".loader",{
        display:"none",
    })
    tl.from(".nav_centr h5 , .nav_right p",{
        y:50
    })
    tl.from(".hero h1 , #hero3, #hero3 h2",{
        y:130,
        delay:0.5,
        duration:0.5,
        stagger:0.2
    })
} 


function scrollTriggerf(){
    gsap.registerPlugin(ScrollTrigger);
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, 
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    
    tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
      .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
      .to(".purple", {backgroundColor: "#28a92b"}, 0);
    
    
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    ScrollTrigger.refresh();
    
}


startAnimation(); 
scrollTriggerf();

// let themeBtn = document.getElementById("theme_btn");
// const themeChange = () => {
//     console.log("clicked");
//     // document.body.style.backgroundColor = "black";
//     let element = document.body;
//     element.classList.toggle("dark-mode");
// }