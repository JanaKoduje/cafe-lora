
export const Footer = () => {
  const element = document.createElement("footer");

  element.innerHTML = `
    <div class="container">
    <div class="footer__content">
      Café Lóra je tréninkový projekt v rámci Czechitas kurzu JavaScript 2
    </div>
  </div>
    `;

  return element;
};
