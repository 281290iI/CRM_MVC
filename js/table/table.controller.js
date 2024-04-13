import * as model from "./../model.js";
import * as view from "./table.view.js";

function init() {
  const requests = model.getRequests();
  view.renderRequests(requests);
  addEventListeners();
  model.countNewRequests();
  view.renderBadgeNew(model.countNewRequests());

  const filter = model.getFilter();
  console.log(filter);

  view.updateFilter(filter);
}

function addEventListeners() {
  view.elements.select.addEventListener("change", filterProducts);
  view.elements.topStatusBar.addEventListener("click", filterByStatus);
  view.elements.leftStatusLinks.forEach((link) => {
    link.addEventListener("click", filterByStatus);
  });
}

function filterProducts() {
  const filter = model.changeFilter("products", this.value);
  const filteredRequests = model.filterRequests(filter);
  view.renderRequests(filteredRequests);
}

function filterByStatus(e) {
  console.log(e.target.dataset.value);
  const filter = model.changeFilter("status", e.target.dataset.value);
  const filteredRequests = model.filterRequests(filter);
  console.log(filteredRequests);
  view.renderRequests(filteredRequests);
  view.updateStatusLinks(e.target.dataset.value);
}

init();
