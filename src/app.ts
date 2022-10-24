import "dotenv/config";
import express from "express";
import cors from "cors";
import userRoute from "../src/features/users/infrastructure/routes/user_routes";

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoute);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
