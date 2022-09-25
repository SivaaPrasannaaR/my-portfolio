import React from "react"
import styles from "./contacts.module.scss"
import { MdOutlineEmail } from "react-icons/md"
import { BsWhatsapp } from "react-icons/bs"
// import { Link } from "react-router-dom"

const Contacts = () => {
  const emailUrl = "mailto:sivaprasanna98@gmail.com"
  const whatsAppUrl = "https://api.whatsapp.com/send?phone=+918248392614"

  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className={styles.contact__container}>
        <article
          className={styles.contact__option}
          onClick={() => window.open(emailUrl, "_blank")}
        >
          <MdOutlineEmail className={styles.contact__option_icon} />
          <h4>Email</h4>
          <h5>sivaprasanna98@gmail.com</h5>
          <a
            href="mailto:sivaprasanna98@gmail.com"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Send a message
          </a>
        </article>
        <article
          className={styles.contact__option}
          onClick={() => window.open(whatsAppUrl, "_blank")}
        >
          <BsWhatsapp className={styles.contact__option_icon} />
          <h4>WhatsApp</h4>
          <h5>+91-824-839-2614</h5>
          <a
            href="https://api.whatsapp.com/send?phone=+918248392614"
            target={"_blank"}
            rel="noopener noreferrer"
          >
            Send a message
          </a>
        </article>

        {/* <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows={7}
            placeholder="Your Message"
            required
          />
          <button type="submit" className={styles.button}>
            Send Message
          </button>
        </form> */}
      </div>
    </section>
  )
}

export default Contacts
