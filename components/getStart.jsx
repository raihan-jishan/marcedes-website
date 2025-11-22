"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import {   TestDriveBtn } from "./ui/button";

export default function GetStart({ imagePath = "/assets/getStart-image.jpg" }) {
  const rootRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const btnGroupRef = useRef(null);
  const imgRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  // helper: wait for image load
  useEffect(() => {
    const imgEl = imgRef.current;
    if (!imgEl) return;

    if (imgEl.complete && imgEl.naturalWidth !== 0) {
      setLoaded(true);
      return;
    }

    const onLoad = () => setLoaded(true);
    const onError = () => setLoaded(true);

    imgEl.addEventListener("load", onLoad);
    imgEl.addEventListener("error", onError);

    return () => {
      imgEl.removeEventListener("load", onLoad);
      imgEl.removeEventListener("error", onError);
    };
  }, []);

  // run GSAP
  useEffect(() => {
    if (!loaded) return;
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out", duration: 0.9 },
      });

      const title = titleRef.current;
      const text = textRef.current;
      const btns = btnGroupRef.current
        ? Array.from(btnGroupRef.current.children)
        : [];
      const imgWrapper = imgRef.current ? imgRef.current.parentElement : null;

      tl.from(rootRef.current, { opacity: 0 })
        .from(title, { opacity: 0, y: 30 })
        .from(text, { opacity: 0, y: 20 }, "-=0.6");

      if (btns.length) {
        tl.from(btns, { opacity: 0, y: 15, stagger: 0.12 }, "-=0.5");
      }

      if (imgWrapper) {
        tl.from(imgWrapper, { opacity: 0, x: 60 }, "-=0.8");
      }
    }, rootRef);

    return () => ctx.revert();
  }, [loaded]);

  return (
    <section ref={rootRef} className="mt-20 w-full">
      <div className="grid max-w-screen-xl px-4 py-10 mx-auto lg:gap-8 xl:gap-0 lg:grid-cols-12 items-center max-lg:flex max-lg:flex-col-reverse">
        {/* LEFT */}
        <div className="place-self-center lg:col-span-7">
          <h1
            ref={titleRef}
            className="max-w-2xl mb-4 text-4xl font-extrabold md:text-5xl xl:text-6xl bg-gradient-to-r from-purple-200 via-purple-400 to-purple-300 bg-clip-text text-transparent max-lg:mt-5"
          >
            Schedule a Test Drive
          </h1>

          <p
            ref={textRef}
            className="max-w-2xl mb-6 font-light text-gray-400 md:text-lg lg:text-xl w-[80%]"
          >
            Feel the precision, comfort, and power of a Mercedes. Experience
            luxury on the move.
          </p>

          <div ref={btnGroupRef} className="flex flex-wrap gap-4">
            <TestDriveBtn>Get Test Drive</TestDriveBtn>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="lg:flex lg:col-span-5">
          <div className="w-full flex justify-end">
            <div className="w-[90%] max-lg:w-full rounded-2xl max-lg:rounded-lg overflow-hidden shadow-2xl">
              <img
                ref={imgRef}
                src={imagePath}
                alt="Mercedes test drive"
                decoding="async"
                loading="eager"
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
