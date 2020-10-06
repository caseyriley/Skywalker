import React, {useRef, useEffect} from 'react';
import lottie from 'lottie-web';

const Celestial = () => {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../images/celestial.json')
    })
  }, [])
  return(
    <div className="celestial" ref={container}></div>
  )
  
}
export default Celestial;