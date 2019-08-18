import React from 'react';
import * as styles from './index.module.scss';

const App = () => (
	<div className={styles.headerSmall}>
		<h1>Title</h1>
		<div className={styles.wrapper}>
			<div className={styles.header}>Header</div>
			<div className={styles.sidebar}>Sidebar</div>
			<div className={styles.content}>
				Content
				<br /> More content than we had before so this column is now quite tall.
			</div>
			<div className={styles.footer}>Footer</div>
		</div>
	</div>
);

export default App;
