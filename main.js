function toggle(){
  var newsletter =document.querySelector('.newsletter');
  newsletter.classList.toggle('active')
}





      var countDate = new Date("Apr 28, 2023 00:00:00").getTime();

      function newYear() {
        var now = new Date().getTime();
        gap = countDate - now;

        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;

        var d = Math.floor(gap / day);
        var h = Math.floor((gap % day) / hour);
        var m = Math.floor((gap % hour) / minute);
        var s = Math.floor((gap % minute) / second);

        document.getElementById("day").innerText = d;
        document.getElementById("hour").innerText = h;
        document.getElementById("minute").innerText = m;
        document.getElementById("second").innerText = s;
      }
      setInterval(function () {
        newYear();
      }, 1000);

const form = document.querySelector(".contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  document.querySelector(".contact-form").reset();

  sendEmail(name, email);
})
function sendEmail(name, email){
  Email.send({
    Host:"smtp.elasticemail.com",
    Username:"rclouis24@gmail.com",
    Password:"F2AD8CAC9C4E5A15C2B99674B4E7A155CBEA",
    To:"cunningdevbusiness@gmail.com",
    From:"rclouis24@gmail.com",
    Subject: `${name} Has requested to be notified of the launch!`,
    Body: `Name ${name} <br> Email: ${email} <br>`,
  }).then((success) => {
    alert("Message sent successfully!");
  }).catch((error) => {
    alert("error sending message");
  })
}