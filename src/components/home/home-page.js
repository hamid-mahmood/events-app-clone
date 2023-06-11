import Image from "next/image";
import Link from "next/link";
import React from "react";

export function HomePage({ data }) {
  return (
    <div className="home-page-body">
      {data.map((event) => (
        <Link className="card" key={event.id} href={`/events/${event.id}`}>
          <div className="image">
            <Image
              alt={event.title}
              width={600}
              height={400}
              src={event.image}
            />
          </div>
          <div className="content">
            <h2>{event.title}</h2>
            <p>{event.description}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
