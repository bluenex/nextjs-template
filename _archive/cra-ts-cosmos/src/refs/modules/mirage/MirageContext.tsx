import { Server } from "miragejs/server";
import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { makeServer } from "./mirage";

// -- CONTEXT
export const MirageContext = createContext<{
  server: Server | null;
  startServer: (() => void) | null;
  stopServer: (() => void) | null;
}>({
  server: null,
  startServer: null,
  stopServer: null,
});

// -- PROVIDER
export const MirageProvider = ({ children }: { children: ReactNode }) => {
  const server = useRef<Server | null>(null);

  /**
   * @description in some case, we will need to tempora
   */
  const startServer = useCallback(() => {
    if (
      process.env.NEXT_PUBLIC_ENABLE_MIRAGE === "TRUE" &&
      server.current === null
    ) {
      console.log(
        `[DEBUG] process.env.NEXT_PUBLIC_ENABLE_MIRAGE in _app.tsx → "${process.env.NEXT_PUBLIC_ENABLE_MIRAGE}"`
      );
      console.log(
        `[DEBUG] process.env.NODE_ENV in _app.tsx → "${process.env.NODE_ENV}"`
      );
      console.log(`[DEBUG] mirage server is enabled..`);
      server.current = makeServer({ environment: "development" });
    }
  }, [server]);

  const stopServer = useCallback(() => {
    server.current?.shutdown();
    server.current = null;
  }, [server]);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_ENABLE_MIRAGE === "TRUE") {
      console.log(
        `[DEBUG] process.env.NEXT_PUBLIC_ENABLE_MIRAGE in _app.tsx → "${process.env.NEXT_PUBLIC_ENABLE_MIRAGE}"`
      );
      console.log(
        `[DEBUG] process.env.NODE_ENV in _app.tsx → "${process.env.NODE_ENV}"`
      );
      console.log(`[DEBUG] mirage server is enabled..`);
      server.current = makeServer({ environment: "development" });
    }

    return () => {
      server.current?.shutdown();
      server.current = null;
    };
  }, []);

  return (
    <MirageContext.Provider
      value={{
        server: server.current,
        startServer,
        stopServer,
      }}
    >
      {children}
    </MirageContext.Provider>
  );
};
