import React from 'react';

const ShareIcon = (props: any) => {
  return (
    <svg width={props.width} height={props.height} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.961 5.93332C13.361 6.13999 14.341 7.37332 14.341 10.0733V10.16C14.341 13.14 13.1476 14.3333 10.1676 14.3333H5.82763C2.84763 14.3333 1.6543 13.14 1.6543 10.16V10.0733C1.6543 7.39332 2.62096 6.15999 4.98096 5.93999" stroke="black" stroke-opacity={props.strokeOpacity} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8 10V2.41333" stroke="black" stroke-opacity={props.strokeOpacity} stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M10.2342 3.89999L8.00091 1.66666L5.76758 3.89999" stroke="black" stroke-opacity={props.strokeOpacity} stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
};

export default ShareIcon;