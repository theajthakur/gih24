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
    question: "Will there be a Registration Fee?",
    answer: "Yes, there will be a registration fee for GIH.",
  },
  {
    question: "Will there be swags?",
    answer: "Yes! Participants will have many chances to win GIH swags!",
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
            <p className="px-4 mt-4 leading-relaxed text-off_white text-2xl glassmorphism">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  );
}
