import React from 'react';

type StarPropsType = {
  id: number
  selected: boolean
  onClick: (id: number) => void
}

export const Star = (props: StarPropsType) => {
  console.log('Star rendering');

  const onStarClickHandler = () => {
    props.onClick(props.id);
  };

  return (
    <span onClick={onStarClickHandler}>
      {props.selected ? <b>star </b> : <>star </>}
    </span>
  );
};