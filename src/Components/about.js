import React, { Component } from 'react'
import './about.css';
import project1 from './images/project1.jpg';
import project2 from './images/project2.jpg';
import project3 from './images/project3.jpg';
import project4 from './images/project4.jpg';
import img2 from './images/aboutUs.webp';
import img1 from './images/phramcy1.png';

class About extends Component{
    render(){
      return(
      <div>
        <div className="nevigationbar">
                <div className="nevigationbarContent"></div>
                 <div className="nevigationbarContent-button"  >
                     <button className="nevigationbar-button">Home</button>
                     <button className="nevigationbar-button">Sign Up</button>
                     <button className="nevigationbar-button">Sign In</button>
                 </div>
          </div>

            


          <div className="header">
                <div className="heding"></div>
                    <h1 className="hedingh1">About Us</h1>
                   
          </div>


          <div className="firstContent">
                <div className="background"></div>
                    
                    <p className="backgroundp">Welcome!</p>
                        <div className="image">
                         <img className="img1" src={img1} alt="actions" />
                        </div>
          </div>


          <div className="second-Content">
                <div className="background">
                    <h2 className="second-Content-h2"> Got a solid product? We tell your target audience
                        that your exist
                    </h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                </div>
                                  
            </div>

            <div className="Content">
                <div className="Content-mid">
                   <h2 className="Content-mid-h2"> Who are we ?</h2>
                   <p className="Content-mid-p"> Lorem Ipsum is simply dummy text of dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                  </div>
             </div>
             <div className="thirdContent">
                <div className="Content-mid1">
                <img className="img3" src={img2} alt="actions" />
                     </div>
             </div>
             <div className="fourthContent">
                <div className="fourthContent-mid1">
                    <h1 className="fourthContent-h1">What we are done so far...</h1>
                     <p className="fourthContent-mid-p"> Lorem Ipsum is simply dummy text of dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                     <img className="pr1" src={project1} alt="actions" />
                     <img className="pr1" src={project2} alt="actions" />
                     <img className="pr1" src={project3} alt="actions" />
                     <img className="pr1" src={project4} alt="actions" />
                
                </div>
             </div>
             <div className="firthContent">
                <div className="firthContent-mid1">
                    <h1 className="firthContent-h1">Our goal</h1>
                     <p className="firthContent-mid-p"> Lorem Ipsum is simply dummy text of dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                   
                </div>
             </div>
        
</div>
    );
}}
export default About;
