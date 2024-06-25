import express from "express";
import ipRouter from "./routes/ipRoutes";

const app = express();

app.use("/api", ipRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
