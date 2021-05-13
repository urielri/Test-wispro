import mongoose from "mongoose";
const cred = {
  user: "varioCarrasca",
  db: "test",
};
mongoose.connect(
  `mongodb+srv://usuarioVario:${cred.user}@cluster0.8b0w2.mongodb.net/${cred.db}?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "test" }
);
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("connected");
});

export { mongoose };
