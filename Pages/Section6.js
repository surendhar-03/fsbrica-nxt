
import { imgdata } from '@/Data/Mydata';
import'@/Styles/Section6.css';
export default function Section6() {
  return (
    <div className=" container Section6">
      <div className="mx-w part-7">
                <div className="pt7-1">
                    <div className="empty-div  ">
                        <div className="pt4-1 ">
                            <div className="pt4-1-1">+</div>
                            <div className="Pt4-1-2">About us</div>
                        </div>
                    </div>
                </div>
               
                <div className="pt7-2">
                    <h6>fabrica®</h6>
                    <h2>How we launch <span>websites and marketing campaigns.</span></h2>
                    <p>See how our team combines creativity, technology, and strategy to build powerful digital solutions.</p>
                    </div>
            </div>
            <div className='mx-w part7-1'>
                <div className='non-emptydiv'>
                    <div className='emp1'>
                        <div className='emp1-1'>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        </div>
                        <div className='emp1-2'><p>01</p></div>

                    </div>
                    <div className='emp2'>
                        <div className='emp2-1'><img src={imgdata[23].imgurl.src}/></div>
                        <div className='emp2-2'><p>The team that communicates every step</p></div>
                    </div>
                </div>
                <div className='non-emptydiv'>
                    <div className='emp1'>
                        <div className='emp1-1'>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        </div>
                        <div className='emp1-2'><p>01</p></div>

                    </div>
                    <div className='emp2'>
                        <div className='emp2-1'><img src={imgdata[24].imgurl.src}/></div>
                        <div className='emp2-2'><p>Customized solutions for your unique needs</p></div>
                    </div>
                </div>
                <div className='non-emptydiv'>
                    <div className='emp1'>
                        <div className='emp1-1'>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        </div>
                        <div className='emp1-2'><p>01</p></div>

                    </div>
                    <div className='emp2'>
                        <div className='emp2-1'><img src={imgdata[25].imgurl.src}/></div>
                        <div className='emp2-2'><p>Transparent pricing with no hidden fees</p></div>
                    </div>
                </div>
                <div className='non-emptydiv'>
                    <div className='emp1'>
                        <div className='emp1-1'>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        <div className='dot'></div>
                        </div>
                        <div className='emp1-2'><p>01</p></div>

                    </div>
                    <div className='emp2'>
                        <div className='emp2-1'><img src={imgdata[26].imgurl.src}/></div>
                        <div className='emp2-2'><p>Proven track record with measurable results</p></div>
                    </div>
                </div>
                
            </div>
    </div>
  );
}