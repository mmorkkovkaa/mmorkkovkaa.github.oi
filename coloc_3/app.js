document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("modal");
  var modalImage = document.getElementById("modal-image");
  var modalTriggers = document.querySelectorAll(".modal-trigger");
  var closeModal = document.querySelector(".close-modal");

  modalTriggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      modal.style.display = "flex";
      modalImage.src = trigger.src;
    });
  });

  closeModal.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});
