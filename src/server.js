import { app } from "./app.js";

const port = process.env.PORT || 1500;

try {
  app.listen(port, () => {
    console.log(`Sever running on port: ${port} ✅`);
  });
} catch (error) {
  console.error("Staryp failed ❌", error);
  process.exit(1);
}