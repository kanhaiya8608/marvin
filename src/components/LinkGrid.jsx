
import React from 'react';
const LinkGrid = ({ links }) => {
  return (
    <div className="link-grid mobile-hide">
      {links.map((link, index) => (
        <a key={index} href={link.url} className="link-item">
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default LinkGrid;
