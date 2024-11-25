import React, { useState } from 'react';
import { Star } from 'components/UncontrolledRating/Star/Star';

export function UncontrolledRating() {
  console.log('Rating rendering');

  const [value, setValue] = useState(0);

  const onStarClickHandler = (id: number) => {
    setValue(id);
  };

  return (
    <div>
      <Star id={1} selected={value > 0} onClick={onStarClickHandler}/>
      <Star id={2} selected={value > 1} onClick={onStarClickHandler}/>
      <Star id={3} selected={value > 2} onClick={onStarClickHandler}/>
      <Star id={4} selected={value > 3} onClick={onStarClickHandler}/>
      <Star id={5} selected={value > 4} onClick={onStarClickHandler}/>
    </div>
  );
}