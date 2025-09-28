
import Button from './components/Button/Button';
import Footer from './components/Footer/Footer';

function Header() {
	return (
		<>
			<header>
				<nav>
					<ul style={{display: "flex", justifyContent: "space-evenly", listStyle: "none"}}>
						<li>Home</li>
						<li>About</li>
						<li>Gallery</li>
					</ul>
				</nav>
			</header>
		</>
	);
}

function App() {
	return (
		<>
			<Header />
			<Header />
			<Header />
			<Header />
			<h1>Hello World!</h1>
			<Button text={'זה שייך לחלק המרכזי של הדף'} /> {/* Button Components */}
			<Footer />
		</>
	);
}

export default App;
