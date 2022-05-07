import { Slider } from "./slider/slider"
import {ArrowBackIosIcon} from '@mui/icons-material/ArrowBackIos';
import { Heart } from "./heart/Heart";
import "./Home.css"
import { More } from "./MoreStyle/More";
import { Summer } from "./summer/Summer";
import { Adidas } from "./adidas/Adidas";

export const Home=()=>{
   return (
<>
    <Slider/>
    <Heart/>
    <More/>
    <Summer/>
    <Adidas/>

    
</>

   )

}