import Comments from '../components/comments/Comments';
import { useParams, Route, Link, useRouteMatch } from "react-router-dom";
import HighlightedQuote from '../components/quotes/HighlightedQuote';


const DUMMY_QUOTES = [
    { id: 'q1', author: 'Akshay Gudhate', text: 'Tech is fun!' },
    { id: 'q2', author: 'Akshay Gudhate', text: 'Tech is not a fun!' },
    { id: 'q3', author: 'Akshay Gudhate', text: 'Tech is a great fun!' }
];

const QuoteDetails = () => {
    const { quoteID } = useParams();
    const routeMatch = useRouteMatch();

    const quote = DUMMY_QUOTES.find(quote => quote.id === quoteID);
    if (!quote) {
        return (
            <p className="centered">
                No quote found!
            </p>
        );
    };

    return (
        <>
            <HighlightedQuote text={quote.text} author={quote.author} />

            <Route path={routeMatch.path} exact>
                <div className="centered">
                    <Link className="btn--flat" to={`${routeMatch.url}/comments`}>
                        Load Comments
                    </Link>
                </div>
            </Route>

            <Route path={`${routeMatch.path}/comments`}>
                <Comments />
            </Route>
        </>
    );
};



export default QuoteDetails;