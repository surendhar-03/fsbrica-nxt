"use client";


import '../Styles/Section4.css'
import dynamic from 'next/dynamic';
const CountUp = dynamic(() => import('react-countup'), { ssr: false });
import { imgdata } from '../Data/Mydata'
export default function Section4() {


    return (


        <div className="container section4">
            <div className="mx-w part-7">
                <div className="pt7-1">
                    <div className="empty-div  ">
                        <div className="pt4-1">
                            <div className="pt4-1-1">+</div>
                            <div className="Pt4-1-2">Why choose us</div>
                        </div>
                    </div>
                </div>
                <div className="pt7-2"><h2>Proven results for every project,</h2>
                    <span>with a focus on design and functionality.</span></div>
            </div>
            <div className='mx-w part-8'>
                <div className='pt8-1'>
                    <div className='pt8-1-1'>
                        <div className="img-container">
                            <img src={imgdata[19].imgurl.src} alt="Overlayed" />
                            <div className="hover-info">
                                <div className='img-hover-con-1'> <p>Your digital journey begins with a conversation. Let's talk today.</p></div>
                                <div className='img-hover-con-2'>
                                    <div className="pt3-2-2-4">
                                        <p>let's talk</p>
                                        <div className="circle"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="img-overlay"></div>
                        </div>
                    </div>
                    <div className='pt8-1-2'></div>
                </div>
                <div className='pt8-2'>
                    <div className='pt8-2-1'><p><span> No fluff, just results.</span> Thoughtful design and tools that make your work easier. We focus on smart design and useful features, project after project.</p></div>
                    <div className='pt8-2-2' >
                        <div className='pt8-22-1'>
                            <div className='pt8-22-1-1'>
                                <div className='pt8-2211-1'>
                                    <CountUp end={50} suffix="+" enableScrollSpy scrollSpyOnce scrollSpyDelay={100} />
                                </div>
                                <div className='pt8-2211-2'>
                     01
                                </div>
                            </div>
                            <div className='pt8-22-1-2'>
                                <div className='pt8-2212-1'>
                                    <p>Successful projects completed</p>
                                </div>
                                <div className='pt8-2212-2'>
                                    <p>We’ve delivered 50+ projects that help companies generate real results.</p>
                                </div>
                            </div>
                        </div>
                        <div className='pt8-22-2'>
                            <div className='pt8-22-1-1'>
                                <div className='pt8-2211-1'>
                                    <CountUp end={95} suffix="%" enableScrollSpy scrollSpyOnce scrollSpyDelay={100} />
                                </div>
                                <div className='pt8-2211-2'>
                                  02
                                </div>
                            </div>
                            <div className='pt8-22-1-2'>
                                <div className='pt8-2212-1'>
                                    <p>Customer satisfaction rate</p>
                                </div>
                                <div className='pt8-2212-23'>
                                    <div className='pt8-22121-1'><img src={imgdata[20].imgurl.src} /></div>
                                    <div className='pt8-22121-2'><img src={imgdata[21].imgurl.src} /></div>
                                    <div className='pt8-22121-3'><img src={imgdata[22].imgurl.src} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )


}