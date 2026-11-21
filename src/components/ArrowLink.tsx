import Link from 'next/link';
import ArrowIcon from './ArrowIcon';

interface ArrowLinkProps {
  href: string;
  children: React.ReactNode;
  inverse?: boolean;
  className?: string;
}

export default function ArrowLink({
  href,
  children,
  inverse = false,
  className,
}: ArrowLinkProps) {
  const classes = ['arrow-link'];

  if (inverse) classes.push('arrow-link-inverse');
  if (className) classes.push(className);

  return (
    <Link href={href} className={classes.join(' ')}>
      {children} <ArrowIcon />
    </Link>
  );
}
