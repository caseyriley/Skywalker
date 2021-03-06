import React, {useRef, useEffect} from 'react';
import lottie from 'lottie-web';

const Favorite = (props) => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../images/rotating-heart.json')
    })
  }, [])
  return (
    
    <div onClick={props.destroyHeart} className="rotating-heart" ref={container}></div>
    
  )
}
export default Favorite;