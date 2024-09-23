import { app } from "@/main/config/app";
import env from "@/main/config/env";
import { connectMongoDb } from "@/main/config/mongodb";

connectMongoDb();

app.listen(env.port, () => {
	console.log(`Server is running on http://localhost:${env.port}`);
});
