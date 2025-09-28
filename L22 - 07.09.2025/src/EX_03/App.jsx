import React from 'react'
import Card from "./components/Card/Card"
import styles from "./App.module.css"

const App = () => {
  return (
    <div className={styles.container}>
    <Card name='tv'>
				<div>
					<h2>מידע על הכרטיס</h2>
					<p>עוד תיאור על הכרטיס</p>
				</div>
				<div>
					<h3>כותרת תמונה</h3>
					<img style={{ width: '200px', height: '100px' }} src='https://t3.ftcdn.net/jpg/05/85/86/44/240_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg' />
				</div>
			</Card>
    </div>
  )
}

export default App