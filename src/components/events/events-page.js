import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Events = ({ data }) => {
  return (
    <div className="events-page">
      {data.map((event) => (
        <div key={event.id} className="event-card">
          <Link href={`/events/${event.id}`}>
            <Image
              src={event.image}
              width={200}
              height={200}
              alt={event.title}
            />
            <h2 className="event-title">{event.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
};
