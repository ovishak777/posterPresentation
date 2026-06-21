function showContent(section, btn) {
  let buttons = document.querySelectorAll(".leftbar button");
  buttons.forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");

  let content = document.getElementById("contentarea");
  if (section === "Auth") {
    content.innerHTML = `
            <h3>Author</h3>
            <p>Odri Chakma</p>
             <p> Department of Geography and Environmental Studies</p>
            <p>University of Chittagong</p>

        `;
  }
  if (section === "Abst") {
    content.innerHTML = `
            <h3>Methodology</h3>
            <p>This is the methodology section.</p>
        `;
  }
  if (section === "result") {
    content.innerHTML = `
            <h2>Results</h2>
            <p>This is the results section.</p>
        `;
  }
}
