import { imgdata } from '@/Data/Mydata'
import '@/Styles/Section7.css'

export default function Section7() {


    return (
        <div className='container Section7'>
            <div className="mx-w part-7">
                <div className="pt7-1">
                    <div className="empty-div  ">
                        <div className="pt4-1 ">
                            <div className="pt4-1-1">+</div>
                            <div className="Pt4-1-2">Testimonials</div>
                        </div>
                    </div>
                </div>

                <div className="pt7-2">

                    <h2>Experiences.</h2>
                    <p>©2025</p>
                </div>
            </div>
            <div className='mx-w part-9'>
                <div className='non-emp-2 empty-1'>
                    <div className='ne-2-1'>
                        <div className='ne-2-11'>
                            <div className='ne-2-11-1'><h1>4.9</h1></div>
                            <div className='ne-2-11-2'><p>/5</p></div>
                        </div>
                        <div className='ne-2-12'><p>We’ve delivered<span>56+ projects</span> that help companies generate real results.</p></div>
                    </div>
                    <div className='ne-2-2'>
                        <div className='ne-22-1'>
                            <div className='ne-221-1'><p> fabrica®</p></div>
                            <div className='ne-221-2'>
                                <div className='ne-22-12-1'>
                                    <div className='sm-img1'><img src={imgdata[28].imgurl.src}/></div>
                                    <div className='sm-img2'><img src={imgdata[29].imgurl.src}/></div>
                                    <div className='sm-img3'><img src={imgdata[30].imgurl.src}/></div>
                                    <div className='sm-img4'><img src={imgdata[31].imgurl.src}/></div>
                                    <div className='sm-img5'>56+</div>
                                </div>
                                <div className='ne-22-12-2'>
                                    <div className='ne22-122-1'><img src={imgdata[33].imgurl.src}/></div>
                                    <div className='ne22-122-2'><p>Trusted by <span>clients worldwide</span></p></div>
                                </div>
                            </div>
                        </div>
                        <div className='ne-22-2'>
                            <div className="pt3-2-2-4">
                                        <p>Leave a review</p>
                                       
                                    </div>
                        </div>
                    </div>
                </div>
                <div className='non-emp-2'></div>
                <div className='non-emp-2'></div>
                <div className='non-emp-2'></div>
            </div>
        </div>
    )

}
