import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@test-react-app",
  async app() {
    // Импорт удаленного модуля по пути, который прописан в ModuleFederationPlugin.
    // @ts-ignore
    const module = await import("test_react_app/single-spa.config");

    // Можно увидеть LifeCycles методы: mount, bootstrap и unmount
    // console.log(module);

    return module;
  },
  activeWhen: ["/"],
});

// setTimeout(() => {
//   unregisterApplication("@test-react-module");
// }, 3000);

start();
