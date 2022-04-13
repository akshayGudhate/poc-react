import NewMeetupForm from '../../components/meetups/NewMeetupForm';

// new meetups page
const NewMeetupPage = () => {
    const addMeetupHandler = (enteredMeetupData) => {
        console.log(enteredMeetupData);
    };


    return (
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    );
};

export default NewMeetupPage;