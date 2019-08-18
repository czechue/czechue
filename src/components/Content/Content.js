import React from 'react';
import * as styles from './Content.module.scss';

const Content = () => {
	return (
		<div className={styles.wrapper}>
			<h3 className={styles.sidebar}>Clicker game</h3>
			<div className={styles.content}>Nice game.</div>
			<div className={styles.footer}>Footer</div>
		</div>
	);
};

export default Content;
