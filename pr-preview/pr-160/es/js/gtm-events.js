// this script instruments elements to emit GTM events
for (let e of document.getElementsByClassName("emits-gtm-events")) {
    e.addEventListener("click", function () {
      dataLayer.push({
        event: e.id,
      });
    });
  
    const hljsElem = e.getElementsByClassName("hljs")[0];
    if (hljsElem) {
      hljsElem.addEventListener("copy", function () {
        console.log("copy event");
        dataLayer.push({
          event: "copy_code",
          element: e.id,
        });
      });
    }
  }
  