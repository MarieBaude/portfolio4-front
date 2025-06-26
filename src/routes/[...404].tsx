import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <div>
      <Title>Not Found</Title>
      <HttpStatusCode code={404} />
      <h1>Nope...</h1>
    </div>
  );
}
