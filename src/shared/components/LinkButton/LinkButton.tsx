import { LinkButtonProps } from './LinkButton.interface';
import styles from "./LinkButton.module.css";
import {NavLink} from 'react-router-dom';
import cn from 'classnames';

function LinkButton({children, url, ...props}: LinkButtonProps) {
  return (
    <NavLink to={url} {...props} className={({isActive}) => cn(
      'default-nav-link',
      styles['link-button'],
      { [styles['active']]: isActive }
    )}>
      {children}
    </NavLink>
  )
}

export default LinkButton;