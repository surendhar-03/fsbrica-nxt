
"use client";
import { imgdata } from '@/Data/Mydata'
import dynamic from 'next/dynamic';
import '@/Styles/Section9.css';
const CountUp = dynamic(() => import('react-countup'), { ssr: false });
export default function Section9() {
    return (
        <div className='container Section9'>
            <div className='mx-w part-13'>
                <div className='pt-13-1'>
                    <div className='pt-13-1-1'>
                        <div className='pt-13-1-1-1'>
                            <div className='pt-13-1-1-1-1'><p>Case study</p></div>
                            <div className='pt-13-1-1-1-2'><p>UX/UI Redesign, Frontend Optimization</p></div>
                        </div>
                        <div className='pt-13-1-1-2'>+</div>
                    </div>
                    <div className='pt-13-1-2'>
                        <div className='pt-13-1-2-1'>
                            <p>fabrica®</p>
                        </div>
                    </div>
                    <div className='pt-13-1-3'>
                        <div className='pt-13-1-3-1'>
                            <p><a href='#'>Live website</a></p>
                        </div>
                        <div className='pt-13-1-3-2'>
                            <div className='pt-13-1-3-2-1'><p>From branding to web development and marketing</p></div>
                            <div className='pt-13-1-3-2-2'><p>We do it all.</p></div>
                        </div>
                    </div>
                    <div className='pt-13-1-4'>
                        <img src={imgdata[37].imgurl.src} />
                    </div>
                </div>
                <div className='pt-13-2'>
                    <div className='pt-13-2-1'>
                        <div className='pt-13-2-1-1'>
                            <div className='pt-13-2-1-1-1'>
                                <div className='pt-13-2-1-1-1-1'><p className='per'>Performance Boost:</p></div>
                                <div className='pt-13-2-1-1-1-2'>
                                    <p className='per1'>Page speed +48%,</p>
                                    <p className='per1'>Bounce rate -23%</p>
                                </div>
                            </div>
                            <div className='pt-13-2-1-1-2'>
                                <div className='pt-13-2-1-1-2-1'><p className='per'>Conversion Rate Improvement:</p></div>
                                <div className='pt-13-2-1-1-2-2'><p className='per1'>4.2% → 5.9%</p></div>
                            </div>
                        </div>
                        <div className='pt-13-2-1-2'>
                            <div className='pt-13-2-1-2-1'>
                                <div className='pt-13-2-1-2-1-1'><img src={imgdata[33].imgurl.src} /></div>
                                <div className='pt-13-2-1-2-1-2'><p className='per'>“Thanks to the redesign, we've seen a steady 60% increase in leads.”</p></div>
                            </div>
                            <div className='pt-13-2-1-2-2'>
                                <div className='pt-13-2-1-2-2-1'><img src={imgdata[38].imgurl.src} /></div>
                                <div className='pt-13-2-1-2-2-2'><p>Angela Smith</p></div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-13-2-2'>
                        <div className='pt-13-2-2-1'>
                            <div className="pt-13-2-2-1-1" data-border="true">
                                <div className="pt-13-2-2-1-1-1">
                                    <p>100</p>
                                </div>
                            </div>
                            <div className='pt-13-2-2-1-2'>
                                <div className='pt-13-2-2-1-2-1'><p>Pagespeed score</p></div>
                                <div className='pt-13-2-2-1-2-2'><p className='per'>We prioritize performance without sacrificing visual appeal or functionality.</p></div>
                            </div>
                        </div>
                        <div className='pt-13-2-2-2'>
                            <div className='pt-13-2-2-2-1'>
                                <div className='pt-13-2-2-2-1-1'>
                                    <div className='pt-13-2-2-2-1-1-1'><p> <CountUp end={38} suffix="k" enableScrollSpy scrollSpyOnce scrollSpyDelay={100} /></p></div>
                                    <div className='pt-13-2-2-2-1-1-2'>
                                        <div className='pt-13-2-2-2-1-1-2-1'><p>+30%</p></div>
                                    </div>
                                </div>
                                <div className='pt-13-2-2-2-1-2'>
                                    <p>Quarterly visits</p>
                                </div>
                            </div>
                            <div className="pt-13-2-2-2-2">
                                <div className="pt-13-2-2-2-2-bar">
                                    <div className="pt-13-2-2-2-2-value v1"><p>+1k</p></div>
                                    <div className="pt-13-2-2-2-2-label"><p>Dec</p></div>
                                </div>
                                <div className="pt-13-2-2-2-2-bar">
                                    <div className="pt-13-2-2-2-2-value v2"><p>+1.3k</p></div>
                                    <div className="pt-13-2-2-2-2-label"><p>Jan</p></div>
                                </div>
                                <div className="pt-13-2-2-2-2-bar">
                                    <div className="pt-13-2-2-2-2-value v3"><p>+1.1k</p></div>
                                    <div className="pt-13-2-2-2-2-label"><p>Feb</p></div>
                                </div>
                                <div className="pt-13-2-2-2-2-bar">
                                    <div className="pt-13-2-2-2-2-value v4"><p>+1.5k</p></div>
                                    <div className="pt-13-2-2-2-2-label"><p>Feb</p></div>
                                </div>
                                <div className="pt-13-2-2-2-2-bar ">
                                    <div className="pt-13-2-2-2-2-value v5"><p>+2.3k</p></div>
                                    <div className="pt-13-2-2-2-2-label"><p>Feb</p></div>
                                </div>
                                <div className="pt-13-2-2-2-2-bar black ">
                                    <div className="pt-13-2-2-2-2-value v6"><p>+5.9k</p></div>
                                    <div className="pt-13-2-2-2-2-label"><p>Mar</p></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>






















    )
}
