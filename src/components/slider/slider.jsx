import { Sliderdata } from "./sliderdata"
import "./slider.css"
import { useEffect, useState } from "react"

export const Slider = ()=>{
  
   let [currentslide, setCurrentSlide] = useState(0)
   let slidelength = Sliderdata.length
   let intervaltime = 5000
let slideinterval;
  let autoscroll = true
   const nextslide = ()=>{
       setCurrentSlide(currentslide === slidelength -1 ? 0 : currentslide+1)
   }
   const prevslide = ()=>{
       setCurrentSlide(currentslide === slidelength -1 ? currentslide-1 : 1);
   }

   function auto (){
       slideinterval = setInterval(nextslide , intervaltime)
   }

   useEffect(()=>{
       if(autoscroll){
           auto()
       }
       return ()=>clearInterval(slideinterval)
   },[currentslide])
   
   
   
    return(
       <div className="slider">
           {Sliderdata.map((slide,index) =>{
               return (
                  <div className={index === currentslide ? "slide-current":"slide"} key={index}>
                      {index === currentslide && (
                          <>
                          <img className="slider-img" src={slide.img} alt="slide"></img>
                          <div className="content">
                              <div className="p-trans">
                              <p  className="name">{slide.txt}</p>
                              <p >{slide.txt2}</p>
                              <p >{slide.txt3}</p>
                              <p >{slide.txt4}</p>
                              <p >{slide.txt5}</p>
                              </div>
        
                              
                          </div>
                          </>
                      )} </div>
               )
           })}
       </div>
    )
}