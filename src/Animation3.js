import React, { useRef, useEffect, useState } from 'react';
import gsap, { Power2 } from 'gsap';

const Animation3 = () => {
  let box1 = useRef(null);
  let box2 = useRef(null);
  let box3 = useRef(null);

  const [rerun, setRerun] = useState(true);
  const [animation, setAnimation] = useState({
    opacity: 0,
    y: -40,
    ease: "back.out",
    duration: .5,
    stagger: .5,
    delay: .2
  });

  useEffect(() => {
    gsap.from([box1, box2, box3],
      { ...animation });
  }, [rerun, animation])


  return (
    <div>
      <h1><span className="ease">{animation.ease.split(".")[0]}</span></h1>
      <div className="box" ref={el => box1 = el}><h1>&darr; Duration: {animation.duration}s | Stagger {animation.stagger}s &darr;</h1></div>
      <div className="box" ref={el => box2 = el}><h2>&darr; Duration: {animation.duration}s | Stagger {animation.stagger}s &darr;</h2></div>
      <div className="box" ref={el => box3 = el}><h3>&darr; Duration: {animation.duration}s | Stagger {animation.stagger}s &darr;</h3></div>


      <div className="btn-container">

        <span>Stagger:</span>
        <button onClick={() => setAnimation({ ...animation, stagger: 1 })}>1</button>
        <button onClick={() => setAnimation({ ...animation, stagger: .5 })}>.5</button>
        <button onClick={() => setAnimation({ ...animation, stagger: .1 })}>.1</button>


      </div>
      <div className="btn-container">
        <span>Duration:</span>
        <button onClick={() => setAnimation({ ...animation, duration: 2 })}>2</button>
        <button onClick={() => setAnimation({ ...animation, duration: 1 })}>1</button>
        <button onClick={() => setAnimation({ ...animation, duration: .5 })}>.5</button>
        <button onClick={() => setAnimation({ ...animation, duration: .1 })}>.1</button>
      </div>



      <div className="btn-container">
        <button onClick={() => setAnimation({ ...animation, ease: "bounce.out" })}>bounce</button>
        <button onClick={() => setAnimation({ ...animation, ease: "elastic.out(1, 0.3)" })}>elastic</button>
        <button onClick={() => setAnimation({ ...animation, ease: "sine.out" })}>sine</button>
        <button onClick={() => setAnimation({ ...animation, ease: "back.out(1.7)" })}>back</button>
      </div>

      <div className="btn-container">
        <button onClick={() => setRerun(!rerun)}>Rerun</button>
      </div>
    </div>
  );
}
export default Animation3;