/* ********** emailForm ********** */
((d) => {
  const $form = d.querySelector(".registro-form");
  // $loader = d.querySelector(".registro-form-loader"),
  $response = d.querySelector(".registro-form-response");

  $form.addEventListener("submit", (e) => {
    e.preventDefault();
    // $loader.classList.remove("none");
    fetch("https://formsubmit.co/ajax/d6d904e1a72f513c29dd41f58e8068e8", {   
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        location.hash = "#gracias";
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrió un error al enviar, intenta nuevamente";
        $response.querySelector(
          "h3"
        ).innerHTML = `Error ${err.status}: ${message}`;
      })
      .finally(() => {
        // $loader.classList.add("none");
        setTimeout(() => {
          location.hash = "#close";
        }, 3000);
      });
  });
})(document);
