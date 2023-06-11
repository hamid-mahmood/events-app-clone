import Image from "next/image";
import Link from "next/link";
import React from "react";

const CatEvent = ({ data, title }) => {
  return (
    <div className="cat-event">
      <h1>Events in {title}</h1>
      <div className="content">
        {data.map((ev) => (
          <div key={ev.id} className="cat-event-card">
            <Link href={`/events/${ev.city}/${ev.id}`}>
              <Image src={ev.image} width={300} height={200} alt={ev.title} />
              <h2>{ev.title}</h2>
              <p>{ev.description}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CatEvent;
