// een array met de ids van de links
var links = [
  "active-link-1",
  "active-link-2",
  "active-link-3",
  "active-link-4",
  "active-link-5",
  "active-link-6",
  "active-link-7",
];

// gaan door elke link in de array
links.forEach(function (link) {
  // voeg een klik event toe aan elke link
  document.getElementById(link).onclick = function () {
    // als er op een link geklikt wordt, verwijdert de active-link klasse van alle links
    links.forEach(function (id) {
      document.getElementById(id).classList.remove("active-link");
    });

    // voeg de active-link klasse toe aan de link waarop geklikt is
    this.classList.add("active-link");
  };
});