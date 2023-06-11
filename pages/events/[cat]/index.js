import CatEvent from "@/src/components/events/cat-event";
import Image from "next/image";
import Link from "next/link";
import React from "react";

// We can treat this component as a template for all dynamically generated pages
const EventsCategoryPage = ({ data, pageName }) => {
  const title = pageName[0].toUpperCase() + pageName.slice(1).toLowerCase();
  return (
    <CatEvent data={data} title={title} />
    // <div>
    //   <h1>Events in {title}</h1>
    //   {data.map((ev) => (
    //     <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`}>
    //       <Image src={ev.image} width={200} height={200} alt={ev.title} />
    //       <h2>{ev.title}</h2>
    //       <p>{ev.description}</p>
    //     </Link>
    //   ))}
    // </div>
  );
};

export default EventsCategoryPage;

// For dynamic pages, we need both getStaticPaths and getStaticProps
// this will generate 3 pages
export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
  };
}

// data for above 3 pages will be fetched here
export async function getStaticProps(context) {
  console.log(`ctx`, context);
  const id = context?.params.cat;
  const { allEvents } = await import("/data/data.json");
  console.log(`id`, id);
  const data = allEvents.filter((ev) => ev.city === id);
  console.log(`data`, data);

  return { props: { data, pageName: id } };
}
