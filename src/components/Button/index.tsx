import { Icon } from '@iconify/react';
import Link from 'next/link';

interface ButtonProps {
  btnLink: string;
  btnText: string;
  variant?: string;
  icon?: JSX.Element;
}

export default function Button({ btnLink, btnText, variant, icon }: ButtonProps) {
  return (
    <Link href={btnLink} className={variant ? `cs-text_btn ${variant}` : 'cs-text_btn'}>
      <>
        <span>{btnText}</span>
        {icon ? icon : <Icon icon="bi:arrow-right" />}
      </>
    </Link>
  );
}
