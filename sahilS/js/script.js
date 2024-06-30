$(document).ready(function () {
  $('.myCarousel').owlCarousel({
    items: 5,
    margin: 10,
    loop: true,
    dots: true,
    lazyLoad: true,
    autoplay: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },

      480: {
        items: 2
      },

      768: {
        items: 3
      },

      992: {
        items: 4
      },

      1200: {
        items: 5
      }
    }
  });
})

AOS.init();

//Form 

(function () {
  emailjs.init({
    publicKey: "ZMDzZnh_C9-4hBmAi",
  });
})();


const formbtn = document.getElementById('button123');

document.getElementById("form1").addEventListener("submit",function(event){
  event.preventDefault();
  formbtn.value = "sending...";

  const serviceID = "service_5xpsu3w";
  const templateID = "template_jbypgca";

  emailjs.send("service_5xpsu3w", "template_jbypgca", {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  });

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      formbtn.value = " Send Email";

      // alert('Mail Send Successfully Thank You!..')
      (function function3() {
        swal("Thank You!", "Mail Send Successfully!", "success");
      })();
    },
    (error) => {
      formbtn.value = " ";
      //   alert(JSON.stringify(error));
      (function function4() {
        error(
          swal(
            "Sorry!",
            "Opps, something went wrong. Please try again later.",
            "error"
          )
        );
      })();
    }
  );
});

