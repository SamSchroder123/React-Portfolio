import React from "react";

export default function () {
  const phoneNumber = "+447741549131";
  const emailAddress = "samueltillotsonschroder@gmail.com";
  return (
    <>
      <main>
        <h2>Contact</h2>
        <ul>
          <li>Mobile: {phoneNumber}</li>
          <li>Email: {emailAddress}</li>
        </ul>
        <p>
          Please see links at the bottom of the page for my LinkedIn profile,
          GitHub profile and CV
        </p>
      </main>
    </>
  );
}
