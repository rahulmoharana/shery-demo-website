


const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});
//gsap to animate
gsap.from(".nlink",{
    stagger:.2,
    y:10,
    opacity:0,
    duration:1.5,
    ease:Power2

})
Shery.textAnimate(".heading h1" , {
    
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".anim2",{
    y:50,
    opacity:0,
    stagger:.3,
    ease:Expo,
    duration:1
})

Shery.imageEffect("#img img",{
    style:3,
    config:{"uFrequencyX":{"value":15.7,"range":[0,100]},"uFrequencyY":{"value":5.79,"range":[0,100]},"uFrequencyZ":{"value":44.63,"range":[0,100]},"geoVertex":{"range":[1,64],"value":18.18},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.75},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.56,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})

Shery.imageEffect(".imgeff img",{
    style:5,
    config:{"a":{"value":1.74,"range":[0,30]},"b":{"value":-0.7,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6666666666666666},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.86,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})

gsap.from("#img img",{
    y:"70",
    opacity:0,
    duration:2,
    ease:Expo
})

Shery.imageEffect("#bimage",{
    style:5,
    gooey:true,
    config:{"a":{"value":2.23,"range":[0,30]},"b":{"value":-0.98,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.318894395433371},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.41,"range":[0,10]},"metaball":{"value":0.18,"range":[0,2]},"discard_threshold":{"value":0.59,"range":[0,1]},"antialias_threshold":{"value":0.04,"range":[0,0.1]},"noise_height":{"value":0.26,"range":[0,2]},"noise_scale":{"value":35.54,"range":[0,100]}}
})
document.querySelector("#ftext button").addEventListener("mouseover",function(){
    gsap.to("#future video",{
        opacity:1,
        duration:1.5,
        ease:Power4
    })
    

})
document.querySelector("#ftext button").addEventListener("mouseleave",function(){
    gsap.to("#future video",{
        opacity:0,
        duration:1.5,
        ease:Power4
    })
    

})

//shery js to animate images