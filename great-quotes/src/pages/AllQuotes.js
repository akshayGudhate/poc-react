import QuoteList from '../components/quotes/QuoteList';


const DUMMY_QUOTES = [
    { id: 'q1', author: 'Akshay Gudhate', text: 'Tech is fun!' },
    { id: 'q2', author: 'Akshay Gudhate', text: 'Tech is not a fun!' },
    { id: 'q3', author: 'Akshay Gudhate', text: 'Tech is a great fun!' }
];


const AllQuotes = () => {
    return (    
        <QuoteList quotes={DUMMY_QUOTES} />
    );
};



export default AllQuotes;