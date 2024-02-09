var links = [
  "active-link-1",
  "active-link-2",
  "active-link-3",
  "active-link-4",
  "active-link-5",
  "active-link-6",
  "active-link-7",
];

links.forEach(function (link) {
  document.getElementById(link).onclick = function () {
    links.forEach(function (id) {
      document.getElementById(id).classList.remove("active-link");
    });

    this.classList.add("active-link");
  };
});
