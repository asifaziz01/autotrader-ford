import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import ReactHtmlParser from "react-html-parser"
import Sketch from "./classes/sketch"

import Slides from "./constants/slides"
import PREVIOUS from "./icons/previous"
import NEXT from "./icons/next"

export default () => {
  const { effectSrc, cars, slideImages } = Slides(),
    [sketch, setSketch] = useState(null),
    [activeCarIndex, setActiveCarIndex] = useState(0),
    init = () => {
      const slider = document.getElementById("slider")
      while (slider.firstChild) {
        slider.removeChild(slider.lastChild)
      }
      setSketch(
        new Sketch({
          uniforms: {
            intensity: { value: 1, type: "f", min: 0, max: 3 },
          },
          fragment: `
          uniform float time;
          uniform float progress;
          uniform float intensity;
          uniform float width;
          uniform float scaleX;
          uniform float scaleY;
          uniform float transition;
          uniform float radius;
          uniform float swipe;
          uniform sampler2D texture1;
          uniform sampler2D texture2;
          uniform sampler2D displacement;
          uniform vec4 resolution;
          varying vec2 vUv;
          mat2 getRotM(float angle) {
              float s = sin(angle);
              float c = cos(angle);
              return mat2(c, -s, s, c);
          }
          const float PI = 3.1415;
          const float angle1 = PI *0.25;
          const float angle2 = -PI *0.75;
          void main()	{
            vec2 newUV = (vUv - vec2(0.5))*resolution.zw + vec2(0.5);
            vec4 disp = texture2D(displacement, newUV);
            vec2 dispVec = vec2(disp.r, disp.g);
            vec2 distortedPosition1 = newUV + getRotM(angle1) * dispVec * intensity * progress;
            vec4 t1 = texture2D(texture1, distortedPosition1);
            vec2 distortedPosition2 = newUV + getRotM(angle2) * dispVec * intensity * (1.0 - progress);
            vec4 t2 = texture2D(texture2, distortedPosition2);
            gl_FragColor = mix(t1, t2, progress);
          }
        `,
        })
      )
    },
    sliderPrev = () => {
      document.getElementById("car-data").style.transition = "none"
      document.getElementById("car-data").style.opacity = 0
      if (activeCarIndex === 0) {
        setActiveCarIndex(cars.length - 1)
      } else {
        setActiveCarIndex(activeCarIndex - 1)
      }
      sketch.prev()
      setTimeout(() => {
        document.getElementById("car-data").style.transition =
          "opacity 1s ease-in"
        document.getElementById("car-data").style.opacity = 1
      }, 600)
    },
    sliderNext = () => {
      document.getElementById("car-data").style.transition = "none"
      document.getElementById("car-data").style.opacity = 0
      if (activeCarIndex === cars.length - 1) {
        setActiveCarIndex(0)
      } else {
        setActiveCarIndex(activeCarIndex + 1)
      }
      sketch.next()
      setTimeout(() => {
        document.getElementById("car-data").style.transition =
          "opacity 1s ease-in"
        document.getElementById("car-data").style.opacity = 1
      }, 600)
    }
  useEffect(() => {
    init()
    window.addEventListener("resize", e => {
      init()
    })
  }, [])
  return (
    <div className="slider-container">
      <div id="slider-wrap">
        <div id="slider" images={slideImages} effect-display={effectSrc} />
        <div className="slider-content">
          <div className="content-area">
            <div id="car-data">
              <h5 className="model">{cars[activeCarIndex].model}</h5>
              <h1 className="feature">{cars[activeCarIndex].bigHeading}</h1>
              <div className="desc">
                {ReactHtmlParser(cars[activeCarIndex].description)}
              </div>
              <div className="cta">
                <button
                  className="cta-btn"
                  onClick={e => {
                    navigate(cars[activeCarIndex].ctaLink)
                  }}
                >
                  {cars[activeCarIndex].ctaLabel}
                </button>
              </div>
            </div>
            <button
              onClick={e => sliderPrev(activeCarIndex)}
              className="slider-nav-btn prev"
              aria-label="Slide Previous"
            >
              <PREVIOUS /> <span className="d-none d-md-block">PREVIOUS</span>
            </button>
            <button
              onClick={e => sliderNext(activeCarIndex)}
              className="slider-nav-btn next"
              aria-label="Slide Next"
            >
              <span className="d-none d-md-block">NEXT</span> <NEXT />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
