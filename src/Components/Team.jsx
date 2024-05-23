import React from "react";
import Heading from "../UI elements/Heading";

export default function Team() {
  const items = [
    { id: 22, name: "Ayush Agarwal", domain: "Organizer", imgsrc: "/images/team/22.png" },
    { id: 23, name: "Himanshu Mishra", domain: "Organizer", imgsrc: "/images/team/23.png" },
    { id: 24, name: "Ayush Ranjan", domain: "Curators", imgsrc: "/images/team/24.png" },
    { id: 25, name: "Shiwalik Srivastav", domain: "Curators", imgsrc: "/images/team/25.png" },
    { id: 1, name: "Shriyam Gera", domain: "Technical", imgsrc: "/images/team/6.png" },
    { id: 2, name: "Yuvraj Singh", domain: "Technical", imgsrc: "/images/team/5.png" },
    { id: 3, name: "Jayant Srivastav", domain: "Technical", imgsrc: "/images/team/4.png" },
    { id: 4, name: "Abhishek Singh Bhati", domain: "Management", imgsrc: "/images/team/1.png" },
    { id: 5, name: "Aaryan Pandit", domain: "Marketing", imgsrc: "/images/team/2.png" },
    { id: 6, name: "Divyansh Pandey", domain: "Marketing", imgsrc: "/images/team/3.png" },
    { id: 7, name: "Prajjwal Kumar", domain: "Hospitality", imgsrc: "/images/team/7.png" },
    { id: 8, name: "Mehul Tyagi", domain: "Hospitality", imgsrc: "/images/team/8.png" },
    { id: 9, name: "Shreya Singh", domain: "Hospitality", imgsrc: "/images/team/9.png" },
    { id: 10, name: "Khushi Gaur", domain: "Online promotions", imgsrc: "/images/team/10.png" },
    { id: 11, name: "Smriti Gupta", domain: "Online promotions", imgsrc: "/images/team/21.png" },
    { id: 12, name: "Zainab", domain: "Online promotions", imgsrc: "/images/team/11.png" },
    { id: 13, name: "Nikhil Gautam", domain: "Registrations", imgsrc: "/images/team/12.png" },
    { id: 14, name: "Rahul Gupta", domain: "Registrations", imgsrc: "/images/team/13.png" },
    { id: 15, name: "Abhinav Bharadwaj", domain: "Registrations", imgsrc: "/images/team/14.png" },
    { id: 16, name: "Arsh Anand", domain: "Sponsorship", imgsrc: "/images/team/15.png" },
    { id: 17, name: "Mohit Chaudhary", domain: "Sponsorship", imgsrc: "/images/team/16.png" },
    { id: 18, name: "Utkarsh Tripathi", domain: "Media & Communication", imgsrc: "/images/team/17.png" },
    { id: 19, name: "Aditya Srivastav", domain: "Media & Communication", imgsrc: "/images/team/18.png" },
    { id: 20, name: "Parth Singh", domain: "Logistics", imgsrc: "/images/team/19.png" },
    { id: 21, name: "Harsh Chauhan", domain: "Logistics", imgsrc: "/images/team/20.png" }
];

  return (
    <div className="flex flex-col justify-center w-full max-w-4xl my-10 glassmorphism"
      id="team">
      <Heading index={"06"} title={"Team"} />

      <div className="font-mono text-md md:text-2xl mt-8 text-center">
      </div>      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <div key={item.id} className="flex flex-col justify-center m-8 text-center">
            <img alt="" className="self-center flex-shrink-0 w-30 h-30 mb-4 bg-center bg-cover rounded-full bg-gray-500" src={item.imgsrc} />
            <p className="text-xl font-semibold leading-tight">{item.name}</p>
            <p className="text-gray-400">{item.domain}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
