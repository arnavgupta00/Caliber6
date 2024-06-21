"use client";
import React, { useState } from 'react';
import Div from '../Div';

interface AccordionData {
  question: string;
  answer: string;
}

export default function Accordion(faqs:{faqs:AccordionData[]}) {
  const [selected, setSelected] = useState<number | null>(0);

  const handelToggle = (index: number) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  const accordionData: AccordionData[] = faqs.faqs;

  console.log(faqs);

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div className={`cs-accordian border-0 ${selected === index ? 'active' : ''}`} key={index}>
          <Div className="cs-accordian_head" onClick={() => handelToggle(index)}>
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg width={15} height={8} viewBox="0 0 15 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
