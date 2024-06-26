import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, useLocation} from "react-router-dom";

const ScrollToTop = () => {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return (<div/>);
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  	<React.StrictMode>
		<ChakraProvider>
			<BrowserRouter basename={'/'//grupocreativo.github.io'
			}>
				<ScrollToTop/>
				<App />
			</BrowserRouter>
		</ChakraProvider>
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
