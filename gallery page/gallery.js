// gallery.js

document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.querySelector("img").src;
      const modal = document.createElement("div");
      modal.classList.add("modal");

      modal.innerHTML = `
                <div class="modal-content">
                    <span class="close-button">&times;</span>
                    <img src="${imgSrc}" alt="Expanded View" />
                </div>
            `;

      document.body.appendChild(modal);

      const closeButton = modal.querySelector(".close-button");
      closeButton.addEventListener("click", () => {
        modal.remove();
      });

      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          modal.remove();
        }
      });
    });
  });
});
