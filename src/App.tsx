import React, { useState } from 'react';
import './App.css';
import { Accordion } from 'components/Accordion/Accordion';
import { Rating } from 'components/Rating/Rating';
import { OnOff } from 'components/OnOff/OnOff';
import {
  UncontrolledAccordion,
} from 'components/UncontrolledAccordion/UncontrolledAccordion';
import { UncontrolledRating } from 'components/UncontrolledRating/UncontrolledRating';

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type PageTitlePropsType = {
  title: string
}

function App() {
  console.log('App rendering');

  const [isOn, setIsOn] = useState(false);

  const [value, setValue] = useState<RatingValueType>(0);

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={'App'}>
      {/*<PageTitle title={"This is APP component"}/>*/}
      {/*<PageTitle title={"My friends"}/>*/}
      {/*Article 1*/}
      {/*<Rating value={3}/>*/}
      <Accordion title={"Menu"} collapsed={collapsed} onClick={setCollapsed}/>
      {/*<Accordion title={"Users"} collapsed={false}/>*/}
      {/*<UncontrolledAccordion title={"Menu"}/>*/}
      {/*<UncontrolledAccordion title={"Users"}/>*/}
      {/*Article 2*/}
      {/*<Rating value={value} onClick={setValue}/>*/}
      {/*<Rating value={2}/>*/}
      {/*<Rating value={3}/>*/}
      {/*<Rating value={4}/>*/}
      {/*<Rating value={5}/>*/}
      {/*<UncontrolledRating />*/}
      {/*<UncontrolledRating />*/}
      {/*<UncontrolledRating />*/}
      {/*Article 3*/}
      {/*<OnOff isOn={isOn} onClick={setIsOn}/>*/}
    </div>
  );
}

function PageTitle(props: PageTitlePropsType) {
  console.log('PageTitle rendering');

  return (
    <h1>{props.title}</h1>
  );
}

export default App;
