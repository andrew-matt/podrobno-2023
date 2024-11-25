import React, { useState } from 'react';

type AccordionPropsType = {
  title: string
}

type AccordionTitlePropsType = {
  title: string
  onClick: () => void
}

export function UncontrolledAccordion(props: AccordionPropsType) {
  console.log('Accordion rendering');

  const [collapsed, setCollapsed] = useState(false);

  const onAccordionTitleClickHandler = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div>
      <AccordionTitle title={props.title} onClick={onAccordionTitleClickHandler}/>
      {!collapsed && <AccordionBody/>}
    </div>
  );
}

function AccordionTitle(props: AccordionTitlePropsType) {
  console.log('AccordionTitle rendering');

  const onAccordionTitleClickHandler = () => {
    props.onClick();
  };

  return (
    <h3 onClick={onAccordionTitleClickHandler}>--- {props.title} ---</h3>
  );
}

function AccordionBody() {
  console.log('AccordionBody rendering');

  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
