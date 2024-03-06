// let elm1=document.querySelector("#elem1")
// let elmImg=document.querySelector("#elem1 img")
// elm1.addEventListener("mousemove",function(dets){
//     elmImg.style.left=dets.x+"px"   
//     // elmImg.style.top=dets.y+"px"
// })
// elm1.addEventListener("mouseenter",function(){
//     elmImg.style.opacity="1"
// })
// elm1.addEventListener("mouseleave",function(){
//     elmImg.style.opacity="0"
// })

let e=document.querySelectorAll(".elem")
// let i=document.querySelectorAll(".elem img")

e.forEach(function (val){
    val.addEventListener("mouseenter",function(){
    val.childNodes [2] .style.opacity=1
  
    })
    val.addEventListener("mouseleave",function(){
        val.childNodes [2] .style.opacity=0
      
        })
    val.addEventListener("mousemove",function(dets){
        val.childNodes[2].style.left=dets.x+"px"
        // val.childNodes[2].style.top=dets.y+"px"
    })
})
