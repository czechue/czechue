import React from 'react';
import 'normalize.css';
import * as styles from './index.module.scss';
import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Title from '../components/Title/Title';

const App = () => (
	<div className={styles.page}>
		<Title />
		<div className={styles.wrapper}>
			<Header />
			<Content />
		</div>
	</div>
);

export default App;
