import { LifeCycles, registerApplication, start } from "single-spa";

registerApplication({
  name: "@test-react-module",
  app: () => {
    // Если вывести module в консоль, то можно увидеть методы(mount, bootstrap и unmount),
    // т.к. загружаемый модуль скомпилирован с libraryTarget: "system"
    const module = System.import<LifeCycles>(
      "http://localhost:3000/static/js/bundle.js"
    );
    return module;
  },
  activeWhen: ["/"],
});

// setTimeout(() => {
//   unregisterApplication("@test-react-module");
// }, 3000);

start();
