import React from "react";
import Heading from "../UI elements/Heading";
import Button from "../UI elements/Button";

const SpeakerJudges = () => {
  const items = [
    {"id": 1, "name": "Piyush Agarwal", "designation": "Frontend developer@Cars 24, YouTube(100k+)", "imgSrc": "/images/judges/1.png"},
    {"id": 2, "name": "Rohit Negi", "designation": "Founder of Coder Army,Ex-Uber, YouTube(160k+)", "imgSrc": "/images/judges/2.jpeg"},
    {"id": 3, "name": "Utkarsh Bharti", "designation": "Sr. Software Engineer @Shipsy, Ex SWE at GE Healthcare, IIT Roorkee Alumni", "imgSrc": "/images/judges/3.jpg"},
    {"id": 4, "name": "Abhinav Tiwari", "designation": "SDE-3@Walmart, Founder of Loop club", "imgSrc": "/images/judges/4.jpg"},
    {"id": 5, "name": "Saumya Awasthi", "designation": "Software Engineer @Kigen, Content Creator - (LinkedIn/YouTube)", "imgSrc": "/images/judges/5.jpg"},
    {"id": 6, "name": "Piyush Khurana", "designation": "SDE 2, Building NYE @RapiPay", "imgSrc": "/images/judges/6.png"},
    {"id": 7, "name": "Vansh Kapoor", "designation": "Organizer @ReactDelhi, Software Engineer @Dresma.ai", "imgSrc": "/images/judges/7.jpg"},
    {"id": 8, "name": "Ayon Roy", "designation": "Executive Data Scientist @ NielsenIQ, Z By HP Global Data Science Ambassador", "imgSrc": "/images/judges/8.jpg"},
    {"id": 9, "name": "Zuned Khan", "designation": "Data Architect @ GE Aerospace", "imgSrc": "/images/judges/9.jpg"},
    {"id": 10, "name": "Shashank Rustagi", "designation": "SDE-2, Dell technologies, MTech CSE, IIIT Delhi", "imgSrc": "/images/judges/10.jpg"},
    {"id": 11, "name": "Vanshika Garg", "designation": "Manager at Innefu | Former Google DSC Lead | GHCI, vGHC & Eaton Scholar | 21 Under 21 Awardee", "imgSrc": "/images/judges/11.jpg"},
    {"id": 12, "name": "Mohd. Kafeel Khan", "designation": "SDE-II @ MakeMyTrip, Co-Organiser GDG-New Delhi", "imgSrc": "/images/judges/12.jpg"},
    {"id": 13, "name": "Pooja Gera", "designation": "Software Engineer, Palo Alto Networks", "imgSrc": "/images/judges/13.jpg"},
    {"id": 14, "name": "Kumar Shivam", "designation": "Senior Backend Engineer @Delta6labs", "imgSrc": "/images/judges/14.jpg"},
    {"id": 15, "name": "Shubham Kumar", "designation": "SDE-2 @CES, Ex-BYJUS", "imgSrc": "/images/judges/15.jpg"},
    {"id": 16, "name": "Mohammad Mudassir", "designation": "Support Engineer@Algorand Foundation", "imgSrc": "/images/judges/16.jpg"},
    {"id": 17, "name": "Maninder Singh", "designation": "iOS Developer @BluSmart, Ex @Zomato", "imgSrc": "/images/judges/17.jpeg"},
    {"id": 18, "name": "Abdal Lalit", "designation": "Product Analyst at BharatPe | Ex-Urban Company | Ex-Airtel Digital", "imgSrc": "/images/judges/18.jpg"},
    {"id": 19, "name": "Immanuel Savio", "designation": "Applied Machine Learning Scientist at W.W. Grainger, Inc.", "imgSrc": "/images/judges/19.jpg"},
  ];  
  return (
    <div
      className="flex flex-col justify-center w-full max-w-4xl my-10 glassmorphism text-off_white"
      id="judges"
    >
      <Heading index={"05"} title={"Speaker and Judges"} />
      <div className="font-mono text-md md:text-2xl mt-8 text-center">
        Past Speaker and Judges
      </div>
      <div className="grid w-full grid-cols-2 gap-6 my-6 rounded-md place-self-center lg:grid-cols-3">
      {items.map((item) => (
              <div className="text-center text-gray-400 dark:text-gray-400">
              <img className="mx-auto mb-4 w-36 h-36 rounded-full" src={item.imgSrc} alt={item.name}/>
              <h3 className="mb-1 text-2xl font-bold tracking-tight text-white dark:text-white">
                  <a href="#">{item.name}</a>
              </h3>
              <p>{item.designation}</p>
              </div>
                ))}
      {/* <div className="flex items-center justify-center w-full rounded-md glassmorphism h-60 text-3xl font-mono">
          Coming Soon.....
        </div> */}
      {/* <a href="/images/judges.jpg" target="_blank" className="mt-10">
        <img src="/images/judges.jpg" alt="judges" />
      </a> */}
    </div>
    </div>
  );
};

export default SpeakerJudges;
