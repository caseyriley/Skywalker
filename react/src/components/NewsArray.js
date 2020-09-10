import React from 'react';
import pic1 from '../images/newsImages/1.jpg'
import pic2 from '../images/newsImages/2.jpg'
import pic3 from '../images/newsImages/3.jpg'
import pic4 from '../images/newsImages/4.jpg'
import pic5 from '../images/newsImages/5.jpg'
import pic6 from '../images/newsImages/6.jpg'
import pic7 from '../images/newsImages/7.jpg'
import pic8 from '../images/newsImages/8.jpg'
import pic9 from '../images/newsImages/9.jpg'
import pic10 from '../images/newsImages/10.jpg'
import pic11 from '../images/newsImages/11.jpg'
import pic12 from '../images/newsImages/12.jpg'
import pic13 from '../images/newsImages/13.jpg'
import pic14 from '../images/newsImages/14.jpg'
import pic15 from '../images/newsImages/15.jpg'
import pic16 from '../images/newsImages/16.jpg'
import pic17 from '../images/newsImages/17.jpg'
import pic18 from '../images/newsImages/18.jpg'
import pic19 from '../images/newsImages/19.jpg'
import pic20 from '../images/newsImages/20.jpg'
import pic21 from '../images/newsImages/21.jpg'
import pic22 from '../images/newsImages/22.jpg'
import pic23 from '../images/newsImages/23.jpg'
import pic24 from '../images/newsImages/24.jpg'
import pic25 from '../images/newsImages/25.jpg'
import pic26 from '../images/newsImages/26.jpg'
import pic27 from '../images/newsImages/27.jpg'
import pic28 from '../images/newsImages/28.png'
import pic29 from '../images/newsImages/29.jpg'
import pic30 from '../images/newsImages/30.jpg'
import pic31 from '../images/newsImages/31.jpg'
import pic32 from '../images/newsImages/32.jpg'
import pic33 from '../images/newsImages/33.jpg'
import pic34 from '../images/newsImages/34.jpg'
import pic35 from '../images/newsImages/35.jpg'
import pic36 from '../images/newsImages/36.jpg'
import pic37 from '../images/newsImages/37.jpg'


const NewsArray =()=>{
  const picArray = [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17, pic18, pic19, pic20, pic21, pic22, pic23, pic24, pic25, pic26, pic27, pic28, pic29, pic30, pic31, pic32, pic33, pic34, pic35, pic36, pic37];
  function getRandomInt(max) {
    return picArray[(Math.floor(Math.random() * Math.floor(picArray.length -1)))];
  }
  let randomPic = getRandomInt(25);
  return(
    <img className={"news-pic"} alt={""} src={`${randomPic}`}></img> 
  )

}
export default NewsArray;