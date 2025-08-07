import { imgdata } from "@/Data/Mydata";
import "@/Styles/Section2.css";

export default function Section2() {



    return (
        <div className="container section2">
            <div className="mx-w pt4-3">
                <div className="part-4">
                    <div className="empty-div  ">
                        <div className="pt4-1">
                            <div className="pt4-1-1">+</div>
                            <div className="Pt4-1-2">Our clients</div>
                        </div>
                    </div>
                    <div className="empty-div pt4-2"><p>(2016-25©)</p></div>
                    <div className="empty-div pt4-3"></div>
                    <div className="empty-div pt4-4"></div>
                </div>
                <div className="part-5">
                    <div className="pt5-1 grid grid-6">
                        <div className="pt5-1 grid-sec">
                            <div className=""><img src={imgdata[1].imgurl.src} />
                            </div>
                        </div>
                        <div className="pt5-1 grid-sec">
                            <div className=""><img src={imgdata[2].imgurl.src} />
                            </div>
                        </div>
                        <div className="pt5-1 grid-sec">
                            <div className=""><img src={imgdata[3].imgurl.src} />
                            </div>
                        </div>
                        <div className="pt5-1 grid-sec">
                            <div className=""><img src={imgdata[4].imgurl.src} />
                            </div>
                        </div>
                        <div className="pt5-1 grid-sec">
                            <div className=""><img src={imgdata[5].imgurl.src} />
                            </div>
                        </div>
                        <div className="pt5-1 grid-sec">
                            <div className=""><img src={imgdata[6].imgurl.src} />
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}