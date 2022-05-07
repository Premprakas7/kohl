import React from 'react'
import "./adidas.css"

export const Adidas = () => {
    const data=[
        {
            img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-shoprail-01",
             txt:"Home",
            
           },
           {
               img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-shoprail-02",
               txt:"Women",
               
           },
           {
               img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-shoprail-03",
               txt:"Men" ,
               
           },
           {
               img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-shoprail-04",
               txt:"Kids",
               
           },
           {
            img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-shoprail-05",
             txt:"Active",
            
           },
           {
               img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-shoprail-06",
               txt:"Shoes",
               
           },
           {
               img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-shoprail-07",
               txt:"Swimware" ,
               
           },
           {
               img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-shoprail-08",
               txt:"Accessories",
               
           }
    ]
  return (
    <div>
        <div className='adidas'>
            <div><img src="https://media.kohlsimg.com/is/image/kohls/hp2-d-20220505-exception-split-01" alt="ladki" />
            <div className='ladki'>
                <img className='logo' src="https://logos-download.com/wp-content/uploads/2018/05/Champion_logo_black.png" alt="ladki" />
                <h3>25% off </h3>
                <p>selected style on sale</p>
            </div>
            </div>
            <div><img src="https://media.kohlsimg.com/is/image/kohls/hp2-d-20220505-exception-split-02" alt="l" />
            <div className='ladka'>
                <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/2560px-Adidas_Logo.svg.png" alt="" />
                <h3>25% off </h3>
                <p>selected style on sale</p>
            </div>
            </div>
        </div>

        <div><p className='today'>What are you Shopping for today?</p></div>
        <div className='cat'>
        {data.map((d)=>{
                return(<>
               <div><img className="" src={d.img} alt="s"></img>
               <p>{d.txt}</p>
             </div>  </>)
            })}
        </div>
      
    </div>
  )
}

