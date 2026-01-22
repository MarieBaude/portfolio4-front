import "./ContactComponent.scss";
import { createSignal } from "solid-js";

export default function ContactComponent() {
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [submitResult, setSubmitResult] = createSignal<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleSubmit = async (e: Event) => {
    e.preventDefault();

    const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim();

    console.log("FORMSPREE (runtime):", FORMSPREE_ENDPOINT);

    if (!FORMSPREE_ENDPOINT) {
      throw new Error("Formspree endpoint non configuré");
    }

    setIsSubmitting(true);
    setSubmitResult(null);

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setSubmitResult({
          type: "success",
          message: "Message envoyé avec succès !",
        });
        form.reset();
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error: any) {
      setSubmitResult({
        type: "error",
        message: error.message || "Une erreur est survenue",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const closeMessage = () => {
    setSubmitResult(null);
  };

  return (
    <section class="contact_content">
      <div class="textContainer">
        <h2>Contact</h2>
        <p class="contactDescription">
          Une question, un projet ou simplement envie d'échanger ? N'hésitez pas
          à me contacter via ce formulaire.
        </p>
      </div>

      <div class="formContainer">
        {submitResult() && (
          <div
            class={`alert ${submitResult()?.type === "success" ? "alert-success" : "alert-error"}`}
          >
            <span>{submitResult()?.message}</span>
            <button
              type="button"
              class="close-btn"
              onClick={closeMessage}
              aria-label="Fermer le message"
            >
              ×
            </button>
          </div>
        )}

        <form name="contact" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Nom" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="Message" required></textarea>
          <button type="submit" disabled={isSubmitting()}>
            {isSubmitting() ? "Envoi en cours..." : "Envoyer"}
          </button>
        </form>
      </div>
    </section>
  );
}
