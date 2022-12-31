import "./App.css";
import { BiWorld } from "react-icons/bi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Card from "./Components/Card"
import FAQ from "./Components/FAQ"

import Logo from "./Assets/Images/logo.png";
import Hero from "./Assets/Images/hero.jpg";
import TV from "./Assets/Images/card1.png"
import Phone from "./Assets/Images/card2.jpg"
import Media from "./Assets/Images/card3.png"
import Kids from "./Assets/Images/card4.png"

function App() {
  return (
    <div className="App">
      <div className="heroSection ">
        <img src={Hero} className="heroBg " />

        <div className="heroBgGrad ">

          <div className="nav">
              
              <img src={Logo} className="netflixLogo py-2 mt-3 mr-auto ml-5 " />
              
            
            <div className="inline-flex ml-5">
            <button className="langButton flex justify-center items-center p-1 m-5 ">
              <BiWorld className="flex self-center m-1" />
              <span className="px-0.5">English</span>
              <RiArrowDropDownLine className=" dropIcon flex self-center"/>
            </button>
            <button className="signButton flex justify-center m-5 p-1 px-3 self-center">
              <span>Sign In</span>
            </button>
            </div>
          </div>

          <div className="heroTextContainer z-2 w-full mt-11 flex flex-col justify-center self-center items-center">
            <br/>
            <br/>
            <p className="text-3xl md:text-6xl  sm:text-4xl  ">Unlimited movies, TV <br/> shows and more.</p>
            <br/>
            <p className="text-2xl md:text-4xl sm:text-3xl ">Watch anywhere. Cancel anytime.</p>
            <br/>
            <p className="text-xl md:text-2xl sm:text-2xl ">Ready to watch? Enter your email to create or restart your membership.</p>

          </div>
          <br/>
          <div className="emailContainer flex justify-center ">
            
              <input placeholder="Email Address" className="emailInput p-3"/>
              <button className=" getButton flex justify-center  p-3 self-center">
              <span className="text-base md:text-xl text-white font-semibold">Get Started &gt; </span>
            </button>
            
          </div>
        </div>
      </div>
      <Card image={TV} title="Enjoy on your TV." content={<span>Watch on smart TVs, PlayStation, Xbox,<br/> Chromecast, Apple TV, Blu-ray players and more.</span>} reverse={false}/>
      <Card image={Phone} title="Download your shows to watch offline." content={<span>Save your favourites easily and always have<br/> something to watch.</span>} reverse={true}/>
      <Card image={Media} title="Watch everywhere." content={<span>Stream unlimited movies and TV shows on <br/> your phone, tablet, laptop, and TV.</span>} reverse={false}/>
      <Card image={Kids} title="Create profiles for children." content={<span>Send children on adventures with their<br/> favourite characters in a space made just for<br/> them—free with your membership.</span>} reverse={true}/>
      <div className="faqContainer flex flex-col  ">
          <div className='faqHeader p-3'>
                <span className='text-3xl md:text-5xl  sm:text-4xl text-white font-semibold '>Frequently Asked Questions</span>
          </div>
          <div className="faqWrapper mx-auto m-5">
            <FAQ question="What is Netflix?" answer={<span className=""><br/>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.<br/><br/>You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</span>}/>
            <FAQ question="How much does Netflix cost?" answer={<span className=""><br/>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</span>}/>
            <FAQ question="Where can I Watch?" answer={<span className=""><br/>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span>}/>
            <FAQ question="How do I cancel?" answer={<span className=""><br/>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span>}/>
            <FAQ question="Where can I watch on Netflix?" answer={<span className=""><br/>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</span>}/>
            <FAQ question="Is Netflix good for kids?" answer={<span className=""><br/>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</span>}/>
            
          </div>

      </div>
    
    </div>
  );
}

export default App;
