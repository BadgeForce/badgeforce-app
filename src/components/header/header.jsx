import * as React from 'react';
import { Styles } from './style';

const Header = () => {
    return (
        <div className={Styles.headerContainer}>
            <div className={Styles.headerTitle}>Badgeforce</div>
        </div>
    )
}

export default Header;