import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Project from './pages/Project';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

function App() {
	return (
		<ThemeProvider>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/project/:slug" element={<Project />} />
				<Route path="/blog" element={<Blog />} />
				<Route path="/blog/:slug" element={<BlogPost />} />
			</Routes>
		</ThemeProvider>
	);
}

export default App;
