//locomotive.js --> use for smooth scrolling
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

Shery.mouseFollower({
    //Parameters are optional.
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

//gsap --> for animate

gsap.from(".nlink",{
    stagger: .2,
    // stagger means gap between all for animation
    y:10,
    duration:1,
    ease: Power3,
    opacity: 0,
    
})



Shery.textAnimate("#headings h1", {
    //Parameters are optional.
    style: 2,
    // stagger: .5,
    y: 20,
    delay: 5,
    // duration: .05,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier:0.1,
  });


gsap.from(".anim2",{
    y:70,
    stagger:.5,
    opacity:0,
    ease: Expo,
    duration:1,
});


Shery.imageEffect("#imagentext img",{
    style:3,
    config: {"uFrequencyX":{"value":17.36,"range":[0,100]},"uFrequencyY":{"value":7.44,"range":[0,100]},"uFrequencyZ":{"value":32.23,"range":[0,100]},"geoVertex":{"range":[1,64],"value":19.22},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7499999700097516},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.56,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

});

Shery.imageEffect(".imageff img",{
    style:5,
    config: {"a":{"value":2.98,"range":[0,30]},"b":{"value":-0.21,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.8823160858733295},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},

});

Shery.imageEffect("#bimg",{
    style: 5,
    config: {"a":{"value":0.25,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.0944199847862612},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1.03,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":30}},"discard_threshold":{"value":0.58,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.21,"range":[0,2]},"noise_scale":{"value":32.23,"range":[0,100]}},
    gooey: true,
});

document.querySelector("#ftext button")
.addEventListener("mouseover", function(){
    gsap.to("#page5 video" , {
        opacity: 1,
        duration: 1.5,
        ease: Power4,
    });
});

document.querySelector("#ftext button")
.addEventListener("mouseleave", function(){
    gsap.to("#page5 video" , {
        opacity: 0,
        duration: 1.5,
        ease: Power4,
    });
});




