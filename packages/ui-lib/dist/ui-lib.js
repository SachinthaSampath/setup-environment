import { openBlock as o, createElementBlock as r, renderSlot as d } from "vue";
const c = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [s, a] of n)
    e[s] = a;
  return e;
}, i = {}, _ = { class: "bg-brand-main rounded-md px-2 py-1 text-white shadow-sm hover:bg-opacity-90 hover:shadow-lg" };
function u(t, n) {
  return o(), r("button", _, [
    d(t.$slots, "default")
  ]);
}
const f = /* @__PURE__ */ c(i, [["render", u]]), l = {}, p = {
  class: "ring-brand-main rounded-md px-2 py-1 text-lg text-white ring-2 focus:ring-4 focus:ring-offset-2",
  type: "text"
};
function m(t, n) {
  return o(), r("input", p);
}
const h = /* @__PURE__ */ c(l, [["render", m]]), g = {
  install: (t) => {
    t.component("MyBrandButton", f), t.component("MyBrandInput", h);
  }
};
export {
  f as MyBrandButton,
  h as MyBrandInput,
  g as default
};
