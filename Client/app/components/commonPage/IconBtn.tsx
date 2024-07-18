import React, { ReactNode, MouseEventHandler } from 'react';

interface IconBtnProps {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode;
  disabled?: boolean;
  outline?: boolean;
  customClasses?: string;
  type?: 'button' | 'submit' | 'reset';
}

const IconBtn: React.FC<IconBtnProps> = ({
  text,
  onClick,
  children,
  disabled = false,
  outline = false,
  customClasses = '',
  type = 'button',
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`flex items-center ${
        outline ? 'border border-yellow-50 bg-transparent' : 'bg-yellow-50'
      } cursor-pointer gap-x-2 rounded-md py-2 px-5 font-semibold text-richblack-900 ${customClasses}`}
      type={type}
    >
      {children ? (
        <>
          <span>{text}</span>
          {children}
        </>
      ) : (
        text
      )}
    </button>
  );
};

export default IconBtn;
