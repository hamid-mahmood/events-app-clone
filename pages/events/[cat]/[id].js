import SingleEvent from "@/src/components/events/single-event";
import React from "react";

const EventPage = ({ data }) => {
  return <SingleEvent data={data} />;
};

export default EventPage;

// this will create x number of pages, to get content for each page we will need getStaticProps
export async function getStaticPaths() {
  const data = await import("/data/data.json");
  const { allEvents } = data;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        // Error: A required parameter (cat) was not provided as a string received undefined in getStaticPaths for /events/[cat]/[id]
        // Fix is to add below line
        cat: path.city,
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { allEvents } = await import("/data/data.json");
  const id = context.params.id;
  const eventData = allEvents.find((ev) => ev.id === id);

  return {
    props: { data: eventData },
  };
}
