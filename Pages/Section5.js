"use client"
import React, { useState } from "react";


import { motion } from "framer-motion";
import { imgdata, items } from '../Data/Mydata'
import '../Styles/Section5.css'
export default function Section5() {
  const [openIndexes, setOpenIndexes] = useState([]);
  const toggle = (i) =>
    setOpenIndexes((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    );

  return (
    <div className="container home1 Section5">
      <div className="mx-ww">
        {/* Background layers */}
        <div className="background-image"></div>
        <div className="overlay-pattern"></div>

        {/* Content on top */}
        <div className="content-wrapper">
          <div className="mx-w part-7 part-10">
            <div className="pt7-1">
              <div className="empty-div  ">
                <div className="pt4-1">
                  <div className="pt4-1-1 pt10-1-1">+</div>
                  <div className="Pt4-1-2">What we do</div>
                </div>
              </div>
            </div>
            <div className="pt7-2 pt10-2"><h2>Services.<span>(4)</span></h2>
            </div>
          </div>
          <div className="afr-container">
            {items.map((item, idx) => {
              const isOpen = openIndexes.includes(idx);
              return (
                <div key={idx} className="afr-item">
                  <div className="afr-header" onClick={() => toggle(idx)}>
                    <div className="afr-11"><p>({item.id})</p></div>
                    <div className="afr-title">{item.title}</div>
                    <div className="afr-12-5">
                      <motion.div
                        className="afr-icon"
                        animate={{ rotate: isOpen ? 90 : 0 }}
                      >
                        +
                      </motion.div>
                    </div>
                  </div>

                  <motion.div
                    className="afr-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={
                      isOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                    }
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <div className="afr-inner">
                      <div className="afr12-4"></div>
                      <div className="afr12">
                        <div className="afr12-1">
                          <div className="image-stack-container">
                            <div className="image-stack image1">
                              <img
                                src={item.image1.src}

                              />
                            </div>
                            <div className="image-stack image2">
                              <img
                                src={item.image2.src}

                              />
                            </div>
                            <div className="image-stack image3">
                              <img
                                src={item.image3.src}

                              />
                            </div>
                          </div>
                        </div>
                        <div className="afr12-2">
                          <div className="afr0001"><p>{item.title}</p></div>
                          <div className="afr12-3">
                            {item.content}
                          </div>

                        </div>
                      </div>
                      <div className="afr-content">
                        <div className="afr-13-1"><p>Categories</p></div>

                        {item.tags && (
                          <div className="afr-tags">
                            {item.tags.map((t, i) => (
                              <span key={i} className="afr-tag">
                                {t}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
          <div className="afr-141-1">
            <div className="afr14-0"></div>
            <a href="#"><div className="afr14-1"><p>Get started</p></div></a>

          </div>
        </div>
      </div>
    </div>


  )
}