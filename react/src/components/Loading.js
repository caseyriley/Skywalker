import React, {useRef, useEffect} from 'react';
import lottie from 'lottie-web';

const Loading = () => {

  const orbitContainer = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: orbitContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../images/loading-circle.json')
    })
  }, [])

  return (
    <div className="loading-animation" ref={orbitContainer}></div>
  )
}
export default Loading;