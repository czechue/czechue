import React from 'react';
import * as styles from './Header.module.scss';

const Header = () => (
	<header className={styles.header}>
		<nav>
			<ul>
				<li>Portfolio</li>
				<li>Labs</li>
			</ul>
		</nav>
	</header>
);

export default Header;
