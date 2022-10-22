import * as ClientMonitor from './client/index';
import generateViewFor from './view_generator';

async function currentTab() {
  return ((await window.chrome.tabs.query({ currentWindow: true, active: true })) || [])[0];
}

const findEl = <T extends HTMLElement>(sel: string) => {
  const el = document.querySelector(sel);
  if (!el) throw new Error(`Missing element: ${sel}`);
  return el as T;
};

async function onWindowLoad() {
  const message = findEl<HTMLDivElement>('#message');
  const btn     = findEl<HTMLButtonElement>('#pull');
  const tab     = await currentTab() || {};
  const monitor = ClientMonitor.instance(tab);

  btn?.addEventListener("click", async () => {
    const content = await monitor.getHTML();
    message.innerHTML = generateViewFor(content);
  });

  monitor.listen();
}

window.onload = onWindowLoad;
