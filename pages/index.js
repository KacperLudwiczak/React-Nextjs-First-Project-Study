import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "First Meetup",
    image:
      "https://content.r9cdn.net/rimg/dimg/cd/e7/7e96d54c-lm-4326-16c4886210e.jpg?width=1366&height=768&xhint=1697&yhint=2432&crop=true",
    address: "Cracow",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "Second Meetup",
    image: "https://pliki.portalsamorzadowy.pl/i/17/96/17/179617_r0_940.jpg",
    address: "Warsaw",
    description: "This is a second meetup",
  },
];

export default function HomePage(props) {
  return <MeetupList meetups={props.meetups} />;
}

export function getStaticProps() {
  // fetch data from an API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    revalidate: 10,
  };
}
