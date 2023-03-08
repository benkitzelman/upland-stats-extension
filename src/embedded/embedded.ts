import app from "../ui/main";

const findOrAddEl = (id: string, generateHtml: () => string) => {
  const el = document.getElementById(id);
  if (el) return el;

  document.body.insertAdjacentHTML("beforeend", generateHtml());
  return document.getElementById(id);
};

findOrAddEl("control-panel", () => (
  "<div id='control-panel' style='height: 100vh; width: 250px; background: black; opacity: 0.8; position: absolute;' />"
));

app.mount("#control-panel");

export default app;
