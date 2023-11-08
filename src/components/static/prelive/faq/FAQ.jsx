"use client";
import { FAQdata } from "@/data/static/FAQ";
import { Accordion } from "react-bootstrap";
import SVG from "./SVG";
import Item from "./Item";

const FAQ = () => {
  return (
    <div className="w-10/12 flex flex-col md:flex-row items-center justify-center">
      <SVG />
      <Accordion className="w-10/12 md:w-1/2 bg-cutie-blue-200 z-50 !rounded-3xl overflow-hidden">
        {FAQdata.map((faq, index) => (
          <Item
            key={index}
            index={index}
            question={faq.question}
            answer={faq.answer}
            length={FAQdata.length}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;
