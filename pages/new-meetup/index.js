import NewMeetupForm from "../../components/meetups/NewMeetupForm";

export default function NewMeetupPage() {
  function addMeetupHandler(enteredMeetupDatas) {
    console.log(enteredMeetupDatas);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler} />;
}
