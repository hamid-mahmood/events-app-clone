import React from "react";
import { Events } from "@/src/components/events/events-page";

export default function EventsPage({ data }) {
  return <Events data={data} />;
}

export async function getStaticProps() {
  const { events_categories } = await import("/data/data.json");

  return {
    props: {
      data: events_categories,
    },
  };
}
