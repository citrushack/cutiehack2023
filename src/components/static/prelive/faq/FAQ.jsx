"use client";
import { FAQdata } from "@/data/static/FAQ";
import { Accordion } from "react-bootstrap";

const FAQ = () => {
  return (
    <Accordion className="w-1/2 bg-[#48648C] z-50 rounded-2xl">
      {FAQdata.map((faq, index) => {
        return (
          <>
            <Accordion.Item
              eventKey={index}
              style={{
                border: "0px",
                backgroundColor: "#48648C",
              }}
            >
              <Accordion.Button
                style={{
                  borderWidth: "1px",
                  backgroundColor: "#48648C",
                  color: "white",
                }}
              >
                {faq.question}
              </Accordion.Button>
              <Accordion.Body className="text-white">
                {faq.answer}
              </Accordion.Body>
            </Accordion.Item>
            {index < FAQdata.length - 1 && (
              <div className="h-[1px] w-[96%] bg-[#A9B7C7] m-auto" />
            )}
          </>
        );
      })}
    </Accordion>
  );
};

export default FAQ;
