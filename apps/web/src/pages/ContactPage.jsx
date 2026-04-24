function ContactPage() {
  return (
    <section className="surface">
      <h2>Contact Intake Placeholder</h2>
      <p>
        This route is prepared for secure backend integration in the next milestone, replacing
        direct client-side provider calls.
      </p>
      <form className="stack-form" onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="contact-name">Full name</label>
        <input id="contact-name" name="name" type="text" placeholder="Your name" required />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" placeholder="you@company.com" required />

        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows="5"
          placeholder="Describe your project goals"
          required
        />

        <button type="submit">Submit placeholder</button>
      </form>
    </section>
  )
}

export default ContactPage
