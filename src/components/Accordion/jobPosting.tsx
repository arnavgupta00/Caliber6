'use client';
import React, { useEffect, useState } from 'react';
import Div from '../Div';
import Button from '../Button';
import Spacing from '../Spacing';

interface AccordionData {
  jobTitle: string;
  description: string;
  placeOfWork: string;
  remoteOffice: string;
}

interface AccordionProps {
  faqs: AccordionData[];
}

export default function JobAccordion({ faqs }: AccordionProps) {
  const [selected, setSelected] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setSelected(selected === index ? null : index);
  };

  useEffect(() => {
    console.log('faqs', faqs);
  }, [faqs]);

  return (
    <Div className="cs-accordians cs-style1 ">
      {faqs.map((item, index) => (
        <Div
          className={`cs-accordian border-0 ${selected === index ? 'active' : ''}`}
          key={index}
          style={{zIndex:-1}}

          //onClick={() => handleToggle(index)}

        >
          <Div
            className="cs-accordian_head"
            
            onClick={() => handleToggle(index)}
          >
            <Div className="container p-0">
              <h2 className="cs-accordian_title">{item.jobTitle}</h2>
              <Div className="row mt-2">
                <Div className="col-6">
                  <Div className="cs-accordian_body font-semibold">
                    {item.placeOfWork} / {item.remoteOffice}
                  </Div>
                </Div>
              </Div>
            </Div>
            <span className="cs-accordian_toggle cs-accent_color" >
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ cursor: 'pointer' , zIndex:1000}}
                onClick={() => handleToggle(index)} 
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          {selected === index && (
            <Div className="cs-accordian_body">
              <Div className="cs-accordian_body_in">{item.description}</Div>
            </Div>
          )}
          <>
          <Spacing lg="30" md="20" />
          <Button btnLink={"/contact"} btnText={"Apply Now"} />
        </>
        </Div>
      ))}
    </Div>
  );
}
