import { Content } from "./components/content";
import { Footer } from "./components/footer";
import { Header } from "./components/header";

function App() {
	return (
		<div className="wrapper">
			<div className="frame">
				<Header />
				<Content />
				<Footer />
			</div>
		</div>
	);
}

export default App;
