import React from "react";
import Heading from "../UI elements/Heading";

const faqsData = [
  {
    question: "What is a Hackathon?",
    answer: "A hackathon is an event where 'Hackers' worldwide collaborate to create functioning software or hardware by the event's end.",
  },
  {
    question: "Who can attend?",
    answer: "GIH is open to all Tech Innovators worldwide.",
  },
  {
    question: "I am a first-time hacker, what should I do?",
    answer: "No worries! GIH welcomes first-time hackers with open arms. We offer workshops and events to help you get started with hackathons.",
  },
  {
    question: "How does team formation work?",
    answer: "You can form a team with a maximum of four members. Mode is Hybrid. If you don't have a team, there will be opportunities to meet and create one!",
  },
  {
    question: "How to register for GIH?",
    answer: "To register, fill out the form on our website or through UnStop and join our Discord server. We'll guide you through everything!",
  },
  {
    question: "I would like to ask additional questions.",
    answer: "Reach us directly at galgotiahackathon24@gmail.com. We are here to help you!",
  },
  {
    question: "Will there be swags?",
    answer: "Yes! Participants will have many chances to win GIH swags!",
  },
  {
    question: "When and where will the hackathon be held?",
    answer: "The hackathon will take place at Galgotias Campus One on May 25-26, 2024. Directions to the location are available on our website."
  },
  {
    question: "Is a female candidate necessary to take part in the competition?",
    answer: "No, participation by a female candidate is not mandatory. However, as we promote women in tech, we highly encourage their involvement in teams."
  },
  {
    question: "When is the last date to submit the ppt?",
    answer: "The deadline for submitting your ppt for the first round is May 18th."
  },
  {
    question: "Will there be screening based on ppt submissions?",
    answer: "No, there won’t be any screening based on ppt submissions. However, we highly recommend submitting the ppt as it can enhance your chances in the final competition."
  },
  {
    question: "What is the template for the ppt round?",
    answer: "Instructions for the presentation:\n1. Start with the provided first slide.\n2. Include the GIH logo on each slide.\n3. Your presentation should consist of 10 to 12 slides.\n4. You can modify the design to fit your theme but include all the headings from the template."
  },
  {
    question: "Is it mandatory to have a unique idea?",
    answer: "No, it's not mandatory, but having a unique idea increases your chances in the final round. However, the execution and unique selling point (USP) of your project are crucial."
  },
  {
    question: "Will we be provided with a problem statement?",
    answer: "No, as this is a theme-based hackathon, you can create your project on any relevant theme."
  },
  {
    question: "What are the themes for the hackathon?",
    answer: "The themes include Blockchain/Web3, Open Innovation, AR/VR, Robotics, Web, IoT, AI/ML, Security, Smart City, and Fintech."
  },
  {
    question: "Is this a hardware or software-based competition?",
    answer: "Both. You can create your project in either hardware or software."
  },
  {
    question: "Are app development or SDG projects considered within the themes?",
    answer: "They fall under the Open Innovation section."
  },
  {
    question: "Can I bring a mentor with me?",
    answer: "Information about mentors will be provided in future updates."
  },
  {
    question: "Does the theme-based nature of the competition mean we can choose our project?",
    answer: "Yes."
  },
  {
    question: "Is the hackathon online or offline?",
    answer: "The first round is online, while rounds 2 and 3 offer both online and offline participation."
  },
  {
    question: "Do team members need to be together during online participation?",
    answer: "Yes, team members must be together throughout the competition; failure to comply may lead to disqualification."
  },
  {
    question: "How do we connect if participating online?",
    answer: "A Zoom meeting link will be shared, and participants must be present throughout the competition."
  },
  {
    question: "How can I ensure my ideas are not stolen during the mentorship round?",
    answer: "A separate link will be shared for the mentorship round to prevent piracy."
  },
  {
    question: "Is giving the idea enough, or do I need to write the code?",
    answer: "You need to implement your ideas."
  },
  {
    question: "Will there be a registration fee?",
    answer: "Yes, for rounds 2 and 3."
  },
  {
    question: "Is the registration fee the same for both rounds?",
    answer: "Yes."
  },
  {
    question: "Can team members be from different colleges?",
    answer: "Yes."
  },
  {
    question: "Can solo participants take part?",
    answer: "Yes."
  },
];

export default function FAQs() {
  return (
    <div className="flex flex-col justify-center w-full max-w-4xl min-h-[80vh] glassmorphism" id="faq">
      <Heading index={"07"} title={"FAQ's"} />

      <div className="my-6 space-y-4">
        {faqsData.map((faq, index) => (
          <details key={index} className="group [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg text-off_white p-2 glassmorphism font-mono text-2xl ">
              <h2 className="font-medium text-[20px] md:text-[30px] m-3">{faq.question}</h2>
              <svg
                className="w-5 h-5 transition duration-300 shrink-0 group-open:-rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <p className="px-4 mt-4 leading-relaxed text-off_white sm:text-2xl text-lg glassmorphism">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
