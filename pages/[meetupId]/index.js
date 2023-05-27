import MeetupDetail from "../../components/meetups/MeetupDetail";

export default function MeetupDetails() {
  return (
    <MeetupDetail
      image="https://content.r9cdn.net/rimg/dimg/cd/e7/7e96d54c-lm-4326-16c4886210e.jpg?width=1366&height=768&xhint=1697&yhint=2432&crop=true"
      title="First Meetup"
      address="Cracow"
      description="First Meetup description"
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: { meetupId: "m1" },
      },
      {
        params: { meetupId: "m2" },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup

  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          "https://content.r9cdn.net/rimg/dimg/cd/e7/7e96d54c-lm-4326-16c4886210e.jpg?width=1366&height=768&xhint=1697&yhint=2432&crop=true",
        title: "First Meetup",
        address: "Cracow",
        description: "First Meetup description",
      },
    },
    revalidate: 10,
  };
}
