"use client";
import { FAQdata } from "@/data/static/FAQ";
import { Accordion } from "react-bootstrap";
import "./FAQ_styles.css";
import SVG from "./SVG";

const FAQ = () => {
  return (
    <div className="w-9/12 flex flex-col md:flex-row items-center justify-between">
      <SVG />
      <Accordion className="w-10/12 md:w-3/5 bg-cutie-blue-200 z-50 !rounded-3xl overflow-hidden">
        {FAQdata.map((faq, index) => {
          return (
            <>
              <Accordion.Item eventKey={index}>
                <Accordion.Button className="focus:!shadow-none !text-xs md:!text-base">
                  {faq.question}
                </Accordion.Button>
                <Accordion.Body className="text-white !text-xs md:!text-base">
                  {faq.answer}
                </Accordion.Body>
              </Accordion.Item>
              {index < FAQdata.length - 1 && (
                <div className="h-[1px] w-[96%] bg-cutie-blue-100 m-auto" />
              )}
            </>
          );
        })}
      </Accordion>
    </div>
  );
};

export default FAQ;
