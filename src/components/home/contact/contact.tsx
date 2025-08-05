import "./contact.scss";

export default function Contact() {
  return (
    <section class="contact_content">
      <div>
        <h2>Contact</h2>
        <form name="contact">
          <input type="text" placeholder="Nom" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
      <img
        src="public/images/home/Rectangle_12.png"
        alt="illustration formulaire contact"
      />
    </section>
  );
}
