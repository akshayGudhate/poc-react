import MeetupList from '../components/meetups/MeetupList';

const DUMMY_MEETUPS = [
    {
        id: 'm1',
        title: 'meetup 1',
        image: 'https://picsum.photos/200/300',
        address: 'Kerala 1',
        description: 'meetup at kerala 1'
    },
    {
        id: 'm2',
        title: 'meetup 2',
        image: 'https://picsum.photos/200/3004',
        address: 'Kerala 2',
        description: 'meetup at kerala 2'
    }
];

// home page
const HomePage = () => {
    return (<MeetupList meetups={DUMMY_MEETUPS} />);
};

export default HomePage;