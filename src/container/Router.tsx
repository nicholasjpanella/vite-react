import { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import views from "./Views";
import ErrorBoundary from "./ErrorBoundary";
import { ViewOutlet } from "./ViewOutlet";

const ViewWrapper = ({ children = null }) => (
  <ErrorBoundary>
    <ViewOutlet>{children}</ViewOutlet>
  </ErrorBoundary>
);

export default function Router() {
  return (
    <BrowserRouter basename="vite-react">
      <Suspense fallback="Thinking...">
        <Routes>
          {views.map(
            ({ path, element, hidden = () => false, nested = false }) => {
              if (hidden()) return null;

              const View = element;

              if (nested) {
                return (
                  <Route
                    key={path}
                    path={path}
                    element={
                      <ErrorBoundary>
                        <ViewOutlet>
                          <View />
                        </ViewOutlet>
                      </ErrorBoundary>
                    }
                  />
                );
              }

              return (
                <Route key={path} path={path} element={<ViewWrapper />}>
                  <Route path={path} element={<View />} />
                  <Route path="*" element={<Navigate to={path} />} />
                </Route>
              );
            }
          )}

          <Route path="*" element={<Navigate to={views.at(0).path} />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
