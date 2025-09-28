import React from 'react';
import ProductCard from './components/ProductCard';
import Button from './components/Button/Button';
import styles from './App.module.css';

const App = () => {
	return (
		<div className={styles.container}>
			
			<Button>Press Here</Button>
			<Button>Click Me</Button>
			<ProductCard name='tv' description='50 inch lcd' price='2000' />
			<ProductCard name='phone' description='iphon 16 pro' price='2500' />
			<ProductCard name='tv' description='27 inch' price='3000' />
			<ProductCard name='scooter' description='me 4th' price='4000' arrival_time='3 days' />
		</div>
	);
};

export default App;
