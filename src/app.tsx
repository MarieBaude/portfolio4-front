import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import "~/styles/main.scss";
import NavBar from "./components/common/navbar/NavBar";
import Footer from "./components/common/footer/Footer";
import ErrorBoundary from "./components/common/ErrorBoundary";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Title>Marie Baude - Portfolio</Title>
          <ErrorBoundary>
            <NavBar />
          </ErrorBoundary>
          <main>
            <ErrorBoundary>
              <Suspense>{props.children}</Suspense>
            </ErrorBoundary>
          </main>
          <ErrorBoundary>
            <Footer />
          </ErrorBoundary>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
