import React from 'react'
import "./heart.css"

export const Heart = () => {
    const data=[
        {
    img:"https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
    txt:"Gift Shop"
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
            txt:"$15 & Under"
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
            txt:"$25 & Under"  
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
            txt:"$50 & Under"
        },
        {
        img:"https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
        txt:"EXtra Special Gifts"
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
            txt:"E-Gifts Card"   
        },
        {
            img:"https://cdn-icons-png.flaticon.com/512/2107/2107845.png",
            txt:"Gifts for In-Store Pickup"   
        }
]
  return (
    <div className='heartCont'>
    {data.map((d)=>{
        return(
        <>
        <img className="heartlogo" src={d.img} alt="slide"></img>
        <p>{d.txt}</p>
        </>
        
    
    )
        
     
     
        
    })}
    </div>
  )
}

