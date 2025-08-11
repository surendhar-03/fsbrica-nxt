import { imgdata } from "@/Data/Mydata";
import "../Styles/Home.css"; 



export default function Section1() {
  return (
    <div className="container home1">
      <div className="mx-ww">
        {/* 🔹 Background video */}
        <video className="bg-video" autoPlay muted loop playsInline>
          <source src={"/video.mp4"} type="video/mp4" />

          Your browser does not support the video tag.
        </video>

        {/* 🔹 Text Content */}
        <div className="part-0">
          <div className="part-1">
            <div className="pt1-1-01">
              <div className="pt1-1">
                <div className="pt1-1-3"><h1 className="title-head">fabrica</h1></div>
                <div className="pt1-1-1"><p>®</p></div>
              </div>
              <div className="pt1-1-2"><h2 className="head2">Studio</h2></div>
            </div>
            <div className="pt1-2">
              <div className="pt1-2-1"><p>Branding and Identity</p></div>
              <div className="pt1-2-1"><p>Social Media Marketing</p></div>
              <div className="pt1-2-1"><p>Web Design and Development</p></div>
              <div className="pt1-2-1"><p>SEO Optimization</p></div>
            </div>
          </div>
          <div className="part-2">
            <div className="pt2-0">+</div>
            <div className="pt2-0">+</div>
            <div className="pt2-0">+</div>
            <div className="pt2-0">+</div>
          </div>
          <div className="part-3">
            <div className="pt3-1">
              <div className="pt3-1-1"><h4>No generic websites. No empty marketing promises. <span> Just tools and strategies that help your business grow and your brand shine.</span></h4> </div>
              <div className="pt3-1-2">© 2025 fabrica® Studio</div>
            </div>
            <div className="pt3-2">
              <div className="pt3-2-1"><img src={imgdata[0].imgurl.src} /></div>
              <div className="pt3-2-2">
                <div><h6>Team Lead</h6></div>
                <div><span>at fabrica®</span></div>
                <div className="pt3-2-2-3"><h5>Lauren Thompson</h5></div>
                <div className="pt3-2-2-4">
                  <p>let's talk</p>
                  <div className="circle"></div>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
