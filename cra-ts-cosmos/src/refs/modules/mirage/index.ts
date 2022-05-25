import { createServer } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  return createServer({
    environment,
    routes() {
      this.namespace = "api";

      this.get("/collections", () => {
        return [];
      });

      /**
       * @see https://github.com/vercel/next.js/issues/16874
       * @description currently use the method 2
       */
      // method 1
      // this.namespace = ""
      // this.passthrough()

      // method 2
      this.passthrough((req) => {
        if (req.url?.includes("/_next/")) {
          return true;
        }

        if (req.url?.includes("/__nextjs")) {
          return true;
        }
      });
    },
  });
}
