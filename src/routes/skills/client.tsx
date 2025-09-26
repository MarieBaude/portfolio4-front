import { Title } from "@solidjs/meta";
import { A } from "@solidjs/router";
import "./skills.scss";

export default function ClientCommunication() {
    return (
        <div class="skillContent">
            <div class="skillContainer">
                <Title>Communiquer avec le client</Title>
                
                {/* Définition */}
                <div class="def_section">
                    {/* Remplacez par votre icône communication client */}
                    <img src="http://localhost:3000/public/images/skills/public-relation.png" class="skillIcon" alt="Communication client" />
                    <div class="def_text">
                        <h2>Ma définition</h2>
                        <p>Communiquer avec le client consiste à recueillir et clarifier les besoins, animer des démonstrations, présenter l'avancement et obtenir des validations régulières. L'objectif est de maintenir une compréhension du besoin et de s'assurer que le produit corresponde aux attentes.</p>
                    </div>
                </div>

                {/* Preuves */}
                <h2>Mes éléments de preuve</h2>
                
                {/* Projet P1 - Wahis */}
                <A href="/projects/1" class="projectCardInSkill">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="P1 - Wahis"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>P1 - Wahis</h3>
                        <p>J'ai repris le poste de Q.A, mon prédécesseur m'a fait la passation du travail mais aussi des points clients.</p>
                        <ul>
                            <li>Validation du plan de test avec le client</li>
                            <li>Présentation régulière de l'avancement des tests</li>
                        </ul>
                        <p>Les échanges fréquents ont permis de confirmer que les scénarios couvraient bien la demande client.</p>
                    </div>
                </A>

                {/* Projet P3 - T-Source */}
                <A href="/projects/3" class="projectCardInSkill alternate">
                    <img
                        src="http://localhost:3000/public/images/Rectangle17.png"
                        alt="P3 - T-Source"
                        class="projectImageInSkill"
                    />
                    <div class="projectTextInSkill">
                        <h3>P3 - T-Source</h3>
                        <p>Je suis intervenu une fois le projet lancé pour faire les démos et une partie de la communication.</p>
                        <ul>
                            <li>Démonstrations de l'application</li>
                            <li>Points réguliers sur les bugs et mises à jour</li>
                            <li>Communication par mails pour les livraisons de version</li>
                        </ul>
                        <p>Le client était exigeant, la communication n'a pas été efficace et des besoins ont été mal compris, ce qui a eu pour conséquence un retard de livraison et un besoin de refaire certaines fonctionnalités.</p>
                    </div>
                </A>

                {/* Auto critique */}
                <h2>Mon autocritique</h2>
                <div>
                    <p>
                        Je gère correctement l'écoute et la communication : je reformule les demandes, je sollicite si besoin un avis extérieur, et j'envoie des comptes rendus post-réunion pour clarifier les actions à venir.
                        <br /><br />
                        Ma marge de progression reste liée à mon rôle actuel : je n'ai pas encore eu à gérer des situations où il fallait dire non à un client. En tant qu'apprentie développeuse, je ne suis pas décisionnaire ; je me limite donc à informer, transmettre les demandes et temporiser en cas de tension.
                        <br /><br />
                        Cette compétence est importante : même si la technique est prioritaire dans mon métier, les échanges clients restent fréquents et nécessitent de la rigueur. J'ai progressé rapidement grâce à un bon accompagnement. Dès mes premières réunions, j'ai été intégrée aux échanges, puis j'ai pris le rôle de lead dans certains points.
                        <br /><br />
                        Je conseillerais de :
                    </p>
                    <ul>
                        <li>Toujours se faire accompagner au début : une erreur de communication peut avoir des conséquences lourdes.</li>
                        <li>Ne pas hésiter à demander de l'aide ou une validation avant d'envoyer un message important.</li>
                        <li>Clarifier systématiquement les points d'action en fin de réunion pour éviter toute ambiguïté.</li>
                    </ul>
                </div>

                {/* Evolution */}
                <h2>Mon évolution dans cette compétence</h2>
                <p>
                    J'ai commencé par participer ponctuellement aux réunions client. Progressivement, j'ai pu prendre la parole et mener certains points seule. Cette montée en autonomie s'est faite de manière naturelle, portée par les conseils de mes collègues.
                </p>
            </div>
        </div>
    );
}