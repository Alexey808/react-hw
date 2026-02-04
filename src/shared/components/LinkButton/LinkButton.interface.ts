import { AnchorHTMLAttributes, ReactNode } from 'react';

export interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode,
  url: string,
}