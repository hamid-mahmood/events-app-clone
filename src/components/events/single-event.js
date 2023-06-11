import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const SingleEvent = ({ data }) => {
  const inputEmail = useRef();
  const router = useRouter();
  const [message, setMessage] = useState(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    const emailValue = inputEmail.current.value;
    const eventId = router?.query.id;

    try {
      const response = await fetch("/api/email-registration", {
        method: "POSt",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailValue, eventId }),
      });
      const data = await response.json();
      setMessage(data.message);
      inputEmail.current.value = "";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="single-event">
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email-register">
        <label>Get Register for this event</label>
        <input
          ref={inputEmail}
          type="email"
          id="email"
          placeholder="Please insert your email"
        />
        <button type="submit">Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default SingleEvent;
