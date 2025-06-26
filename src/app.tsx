import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "~/styles/main.scss";
import NavBar from "./components/common/navbar/NavBar";
import Footer from "./components/common/footer/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>SolidStart - Basic</Title>
          <NavBar />
          <main>
            <Suspense>{props.children}</Suspense>
          </main>
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
