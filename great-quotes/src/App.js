import { Route, Switch, Redirect } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";
import QuoteDetails from "./pages/QuoteDetails";


function App() {
	return (
		<Layout>
			<Switch>
				<Route path='/' exact>
					<Redirect to='/quotes' />
				</Route>
				<Route path='/quotes' exact>
					<AllQuotes />
				</Route>
				<Route path='/quotes/:quoteID'>
					<QuoteDetails />
				</Route>
				<Route path='/new-quote'>
					<NewQuote />
				</Route>
				<Route path='*'>
					<NotFound />
				</Route>
			</Switch>
		</Layout>
	);
};



export default App;