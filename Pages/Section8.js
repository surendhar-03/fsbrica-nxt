"use client";
import '@/Styles/Section8.css'
import dynamic from 'next/dynamic';
const CountUp = dynamic(() => import('react-countup'), { ssr: false });
export default function Section8() {


    return (
        <div className='container Section8'>
            <div className='mx-w part-11'>


                <div className='pt-11-1'>
                    <div className='pt-11-1-1'>
                        <div className='pt-11-1-1-1'>
                            <div className='pt-11-1-1-1-1'><CountUp end={3} enableScrollSpy scrollSpyOnce scrollSpyDelay={100} /></div>
                            <div className='pt-11-1-1-1-2'>m+</div>
                        </div>
                        <div className='pt-11-1-1-2'></div>
                    </div>



                    <div className='pt-11-1-1'>
                        <p>Ad impressions managed</p>
                    </div>
                </div>
                <div className='pt-11-1'>
                    <div className='pt-11-1-1'>
                        <div className='pt-11-1-1-1'>
                            <div className='pt-11-1-1-1-1'><CountUp end={27} enableScrollSpy scrollSpyOnce scrollSpyDelay={100} /></div>
                            <div className='pt-11-1-1-1-2'>+</div>
                        </div>
                        <div className='pt-11-1-1-2'></div>
                    </div>
                    <div className='pt-11-1-1'>
                        <p>Successful projects launched</p>
                    </div>
                </div>
                <div className='pt-11-1'>
                    <div className='pt-11-1-1'>
                        <div className='pt-11-1-1-1'>
                            <div className='pt-11-1-1-1-1'><CountUp end={98} enableScrollSpy scrollSpyOnce scrollSpyDelay={100} /></div>
                            <div className='pt-11-1-1-1-2'>%</div>
                        </div>
                        <div className='pt-11-1-1-2'></div>
                    </div>
                    <div className='pt-11-1-1'>
                        <p>Client satisfaction rate</p>
                    </div>
                </div>
                <div className='pt-11-1'>
                    <div className='pt-11-1-1'>
                        <div className='pt-11-1-1-1'>
                            <div className='pt-11-1-1-1-1'> <CountUp end={50} enableScrollSpy scrollSpyOnce scrollSpyDelay={100} /></div>
                            <div className='pt-11-1-1-1-2'>k+</div>
                        </div>
                        <div className='pt-11-1-1-2'></div>
                    </div>



                    <div className='pt-11-1-1'>
                        <p>Monthly visitors driven through SEO</p>
                    </div>
                </div>
            </div>
            <div className='mx-w part-12'>
                 <div className='part-12-1 pt-12-1'>
                    <div className='pt-12-1-1 fab'><p>fabrica®</p></div>
                    <div className='pt-12-1-2 fab2'><p>Every project we take on is designed for long-term success.</p></div>
                 </div>



                 <div className='part-12-1 pt-12-2'>
                     <div className='pt-12-1-1 fab4'><p><span>Our approach is simple:</span> we focus on functionality, speed, and clarity, ensuring that every project serves a clear purpose without unnecessary complexity.</p></div>
                    <div className='pt-12-1-2 fab3'><p>We don’t overpromise or use flashy marketing language. We simply build well-designed, functional websites and strategies that help businesses succeed.</p></div>
                 </div>
                 <div className='part-12-1 pt-12-3'></div>
            </div>
        </div>
    )
}
