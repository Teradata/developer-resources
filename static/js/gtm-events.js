
  document.addEventListener("click", function (event) {
    const target = event.target;
  
    if (target.closest(".emits-gtm-events")) {
      const id = target.closest(".emits-gtm-events").id;
      window.dataLayer.push({
        event: id,
      });
    }
  
    if (target.closest("cv-code-snippet")) {
      window.dataLayer.push({
        event: "copy_code",
      });
    }
  });
  