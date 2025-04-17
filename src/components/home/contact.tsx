const Contact = () => {
    return ( 
        <section>
            <div>
                <h2>Me contacter</h2>
                <form>
                    <input type="text" placeholder="Nom" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Message" required></textarea>
                    <button type="submit">Envoyer</button>
                </form>
            </div>
        </section>
     );
}
 
export default Contact;