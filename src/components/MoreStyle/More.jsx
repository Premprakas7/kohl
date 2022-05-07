import React from 'react'
import "./More.css"

export const More = () => {
    const data=[
        {
         img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-threeday-offers-01",
          txt:"40% off",
          txt2:"The Big One bedding"
        },
        {
            img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-threeday-offers-02",
            txt:"Starting at 19.99",
            txt2:"Shorts and skorts for women and juniors"
        },
        {
            img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-threeday-offers-03",
            txt:"Upto 40% off" ,
            txt2:"Eddie Bauer clothing for men" 
        },
        {
            img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-threeday-offers-04",
            txt:"Starting at 5.99",
            txt2:"Jumping Beans clothing for kids" 
        }
]

const Catdata1=["$10under", "$20under", "Home", "Women"]
const Catdata2=["Men", "kids", "shoes", "Active"]


  return (
    <div>
        <div className='infoCat'>
            <div className='Details'>
<p>Get the perfect gift for Mom today with <br />Fast and free pickup in 1 hour or lessFast and free pickup in 1 hour or less</p>
            </div>
            <div> <img className='dlogo' src="https://cdn-icons-png.flaticon.com/512/75/75588.png" alt="" />
                <p>Contactless <br />Drive up</p></div>
            <div>
            <img className='dlogo' src="https://cdn-icons-png.flaticon.com/512/3523/3523885.png" alt="" />
                <p>InPickup <br />Store</p>
            </div>

        </div>
<div className='category1'>
    <div>
        <img src="https://media.kohlsimg.com/is/image/kohls/hp2-d-20220505-threeday-main" alt="" />
    </div>
    <div>
        <div>{Catdata1.map((d)=>{
            return(<div><p>{d}</p></div>)
        })}</div>
        <div>
        {Catdata2.map((d)=>{
            return(<div><p>{d}</p></div>)
        })}

        </div>
    </div>
</div>




        <div className='offCat'>
            {data.map((d)=>{
                return(<>
               <div><img className="" src={d.img} alt="slide"></img>
               <p>{d.txt}</p>
        <p>{d.txt2}</p>
        </div>  </>)
            })}
        </div>
        <div>
        <div className='moreDark'>
            <p>More Style.</p>
            <p>More saving</p>
            
         </div>
         <img className='moreimg' src="https://media.kohlsimg.com/is/image/kohls/hp2-d-20220505-stylesavings-bkg" alt="MoreLogo" />

        </div>
        
      <div className='catDark'>
        <div>Women</div>
        <div>Men</div>
        <div>Kids</div>
      </div>
    </div>
  )
}

