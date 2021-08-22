import Alpine from "alpinejs";
import Fern from "@ryangjchandler/fern";
import AlpineTooltip from "@ryangjchandler/alpine-tooltip";
import AlpineClipboard from "@ryangjchandler/alpine-clipboard";
import split from "./utils/split";
import page from "./page";
import workbench from "./workbench";
import preview from "./workbench/preview";
import inspector from "./workbench/inspector";
import nav from "./nav";
import navItem from "./nav/item";
import navGroup from "./nav/group";
import sizeObserver from "./utils/size_observer";
import reloader from "./utils/reloader";
import clipboard from "./utils/clipboard";

window.Alpine = Alpine;

// Plugins

Alpine.plugin(Fern);
Alpine.plugin(AlpineTooltip);
Alpine.plugin(AlpineClipboard);

// Stores

Alpine.store("page", {
  reflowing: false,
  doc: window.document,
});

Alpine.persistedStore("nav", {
  width: 280,
  filter: "",
  open: {},
  scrollTop: 0,
});

Alpine.persistedStore("inspector", {
  height: 200,
  active: "source",
});

Alpine.persistedStore("preview", {
  width: "100%",
});

// Components & utils

Alpine.data("page", page);
Alpine.data("nav", nav);
Alpine.data("navGroup", navGroup);
Alpine.data("navItem", navItem);
Alpine.data("workbench", workbench);
Alpine.data("preview", preview);
Alpine.data("inspector", inspector);
Alpine.data("clipboard", clipboard);
Alpine.data("sizeObserver", sizeObserver);
Alpine.data("split", split);

// Init

reloader(window.SOCKET_PATH).start();
Alpine.start();
