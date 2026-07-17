import { Elysia } from "elysia";

const clients = new Set<WebSocket>();

const app = new Elysia()
  .get("/", () => "Hello Elysia")

  .ws("/ws", {
    open(ws) {
      clients.add(ws);

      console.log(`Client ${ws.id} connected`);
    },

    message(_ws, message) {
      console.log(message);

      for (const client of clients) {
        client.send(message);
      }
    },

    close(ws, _code, _reason) {
      clients.delete(ws);

      console.log(`Client ${ws.id} disconnected`);
    },
  })
  .listen(4000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
