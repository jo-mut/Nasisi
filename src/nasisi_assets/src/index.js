import { nasisi } from "../../declarations/nasisi";

document.getElementById("clickMeBtn").addEventListener("click", async () => {
  const name = document.getElementById("name").value.toString();
  // Interact with nasisi actor, calling the greet method
  const greeting = await nasisi.greet(name);

  document.getElementById("greeting").innerText = greeting;
});
