import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className={"flex flex-col gap-4 justify-center sm:max-w-2xl"}>
      <span className={"text-4xl font-medium"}>Contact</span>
      <span className="mb-4">Do you want to get in contact with me?</span>
      <span>You can reach me either by email or phone:</span>
      <img src="/img/contact.png" alt="Fighting the scrapers" title="Sorry about the image, fighting the scrapers :)" className="w-[17em]" />
    </div>
  );
}

export default Contact;
