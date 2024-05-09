function LostAndFound() {
  return (
    <div className={"flex flex-col gap-6 justify-center sm:max-w-2xl"}>
      <span className={"text-4xl font-medium"}>Oops, I lost something?</span>
      <span>
        Please let me know the whereabouts of my item(s) so we can figure out a
        way for them to find their way back to me!
      </span>
      <span>
        The easiest way to get in contact with me is to send me an email to{" "}
        <a
          className={"underline text-blue-600"}
          href="mailto:pontus.asp@gmail.com"
        >
          pontus.asp@gmail.com
        </a>{" "}
        or to call/text me at{" "}
        <a className={"underline text-blue-600"} href="tel:+46734005398">
          +46734005398
        </a>
        . If you do send me an email please include "Lost And Found" in the the
        subject so that I can find the email more easily.
      </span>
      <span>Thank you so much for your help!</span>
    </div>
  );
}

export default LostAndFound;
