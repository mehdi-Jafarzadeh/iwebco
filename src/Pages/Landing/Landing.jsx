import { FaBook, FaCalendarAlt } from 'react-icons/fa'
import InfoCard from './Components/infoCards/InfoCard'
import './Landing.css'
import { AiFillDollarCircle } from 'react-icons/ai'
import Projectcard from './Components/ProjectCard/Projectcard'
import data from'./ProjectsData.json'
function Landing() {

   
    return <div id="Landing">

        <section id="s1">
            <div className="text-container">
                <h1>Learn,Build,Grow with <strong>Webco</strong></h1>
                <p>Learn to code. Build with experts.<br /> At Webco, we help you become a professional programmer while bringing your company websites, personal projects, and startup ideas to life.</p>
                <button>Subscribe to Youtube</button>
                <button>free counseling</button>
            </div>
            <div className="img-container">
                <img src="/Landing/Snap.png" alt="code snap" />
            </div>
        </section>

        <section id="s2">
            <InfoCard text='years of experience' number='10+' icon={<FaCalendarAlt />} color={"#9c45ff"} />
            <InfoCard text='totally free' number='0' icon={<AiFillDollarCircle />} color={"#00ffe0"} />
            <InfoCard text='educational videos' number='130+' icon={<FaBook />} color={"#0048ff"} />
        </section>

        <section id="s3">
            <img src="/Landing/YT-logo.png" alt="" className="yt-logo" />
            <div className="text-container">
                <h3>Webco programming</h3>
                <p>subscriber count : 1060+ | number of videos : 200</p> <button>Subscribe on Youtube</button>
            </div>
            <div className="text-container">
                <p>here we're gonna cover all sides of programming and tech,
                    if you want to be a professional programmer and get a job with your skill, watch the videos and practice with them.</p>
            </div>
        </section>

        <section id="s4">
            <img src="/Landing/mehdi jafarzadeh.png" alt="Mehdi-Jafarzadeh" />
            <div className="text-container">
                <h2>who are we ?</h2>
                <p>I am Mehdi Jafarzadeh, with over a decade of experience in coding, programming, and maintaining projects. I hold a Master’s degree in Computer Engineering. At Webco, our team is more than just content creators — we actively develop and build websites, apps, and platforms for companies, while also providing digital marketing services and maintaining their existing systems. With a dedicated team of over 10 professionals working side by side, we strive to deliver the best experience and achieve success for our customers.</p>
            </div>
        </section>

        <section id="s5">
            <h2>companies trusted us</h2>
            {/* <p>Our team is more than just content creators — we actively design and develop websites, applications, and platforms for businesses, while also offering digital marketing services and ongoing maintenance for their existing systems.</p> */}
            <div className="logos-container">
            <div className="logos-container-1">
                <div className="logo"><img src="/Landing/Brands/adzuna.webp" alt="" /></div>
                <div className="logo"><img src="/Landing/Brands/asf.webp" alt="" /></div>
                <div className="logo"><img src="/Landing/Brands/asia.webp" alt="" /></div>
                <div className="logo"><img src="/Landing/Brands/beynol.webp" alt="" /></div>
                <div className="logo"><img src="/Landing/Brands/cafeml.webp" alt="" /></div>
            </div>    
            <div className="logos-container-2">
                <div className="logo"><img src="/Landing/Brands/data anotation.webp" alt="" /></div>
                <div className="logo"><img src="/Landing/Brands/homeset.webp" alt="" /></div>
                <div className="logo"><img src="/Landing/Brands/NA.webp" alt="" /></div>
                <div className="logo"><img src="/Landing/Brands/realtyna.webp" alt="" /></div>
                <div className="logo"><img src="/Landing/Brands/zegocloud.webp" alt="" /></div>
            </div>    
            </div>    
        </section>

        <section id="s6">
            <h2>Projects</h2>
            <div className="ProjectCard-container">
                {data.map(e => <Projectcard item={e}/>)}
            </div>
        </section>
    </div>

}

export default Landing