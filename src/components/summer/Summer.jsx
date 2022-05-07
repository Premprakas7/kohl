import React from 'react'
import "./summer.css"
export const Summer = () => {
    const prodata=[
        {
         img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-summer-offers-01",
          txt:"On the Go",
          txt2:"Starting at 21.99",
          txt3:"Shorts for women and junior"
        },
        {
            img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-summer-offers-02",
            txt:"Memorable moments",
            txt2:"Starting at 21.99",
            txt3:"Dresses for women and juniors"
        },
        {
            img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-summer-offers-03",
            txt:"Work from Anywhere" ,
            txt2:"Starting at 21.99",
            txt3:"Button Down shirt for men" 
        },
        {
            img:"https://media.kohlsimg.com/is/image/kohls/hp2-dm-20220505-summer-offers-04",
            txt:"Athleisire",
            txt2:"Starting at 21.99",
            txt3:"adidas clothing for kids" 
        }]

        const catdata=["Men","Women", "kids","Beauty", "Gifts","Gifts Card"]
  return (
    <div>
      <div><p className='summerinfo'>Summer outfits for every occassion</p></div>
      <div className='offCat'>
            {prodata.map((d)=>{
                return(<>
               <div><img className="" src={d.img} alt="s"></img>
               <p>{d.txt}</p>
         <p>{d.txt2}</p>
            <p>{d.txt3}</p>
             </div>  </>)
            })}
            </div>

            <div className='wedding'>
                <img src="https://media.kohlsimg.com/is/image/kohls/hp2-d-20220417-weddings-bkg" alt="" />
                <div>
                    <div className='weddingdiv'><div className='wedd'>The WEDDING SHOP</div></div>
                </div>
                
            </div>

        <div className='categoryname'>
        {catdata.map((d)=>{
            return(<div><p>{d}</p></div>)
        })}
        </div>

        <div className='sephora'><p className='seinfo'>SEPHORA + KOHL'S</p></div>
    </div>
  )
}


