import { FaBook, FaCalendarAlt } from 'react-icons/fa'
import InfoCard from './Components/infoCards/InfoCard'
import './Landing.css'
import { AiFillDollarCircle } from 'react-icons/ai'
function Landing() {

    return <div id="Landing">

        <section id="s1">
            <div className="text-container">
                <h1>Learn,Build,Grow with <strong>Webco</strong></h1>
                <p>Learn to code. Build with experts.<br/> At Webco, we help you become a professional programmer while bringing your company websites, personal projects, and startup ideas to life.</p>
                <button>Subscribe to Youtube</button>
                <button>free counseling</button>
            </div>
            <div className="img-container">
                <img src="/Landing/Snap.png" alt="code snap" />
            </div>
        </section>

        <section id="s2">
            <InfoCard text='years of experience' number='10+' icon={<FaCalendarAlt/>}   color={"#9c45ff"}/>
            <InfoCard text='totally free' number='0' icon={<AiFillDollarCircle/>}   color={"#00ffe0"}/>
            <InfoCard text='educational videos' number='130+' icon={<FaBook/>}  color={"#0048ff"}/>
        </section>

        <section id="s3">
            <img src="/Landing/YT-logo.png" alt="" className="yt-logo" />
            <div className="text-container">
                <h3>Webco programming</h3>
                <p>subscriber count : 920+ | number of videos : 150</p> <button>Subscribe on Youtube</button>
            </div>
            <div className="text-container">
                <p>here we're gonna cover all sides of programming and tech,
if you want to be a professional programmer and get a job with your skill, watch the videos and practice with them.</p>
            </div>
        </section>

    </div>

}

export default Landing