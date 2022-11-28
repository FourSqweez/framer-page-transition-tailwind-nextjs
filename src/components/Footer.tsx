import React from 'react';

interface FooterProps {
   color: string;
}

const Footer = (props: FooterProps) => {
   console.log(`first`);
   return (
      <div className={`w-full h-[100vh] min-h-[50%] ${props.color} z-40`}>
         Footer
      </div>
   );
};

export default Footer;
