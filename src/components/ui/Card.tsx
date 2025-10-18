import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
}

const Card: React.FC<CardProps> = ({ 
  children, 
  className = '', 
  shadow = true 
}) => {
  const cardClass = `bg-background-card rounded-lg overflow-hidden ${
    shadow ? 'shadow-card' : ''
  } ${className}`;
  
  return (
    <div className={cardClass}>
      {children}
    </div>
  );
};

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-5 pt-0 ${className}`}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ 
  children, 
  className = '' 
}) => {
  return (
    <div className={`p-5 pt-0 ${className}`}>
      {children}
    </div>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;