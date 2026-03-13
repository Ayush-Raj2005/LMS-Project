// Admission Form Validation
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#admission-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const father = document.getElementById("father").value.trim();
            const email = document.getElementById("email").value.trim();
            const mobile = document.getElementById("mobile").value.trim();

            const namePattern = /^[A-Za-z ]+$/;
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            const mobilePattern = /^[0-9]{10}$/;

            if (!namePattern.test(name)) {
                alert("Please enter a valid name");
                return;
            }

            if (!namePattern.test(father)) {
                alert("Please enter a valid father name");
                return;
            }

            if (!emailPattern.test(email)) {
                alert("Please enter a valid email");
                return;
            }

            if (!mobilePattern.test(mobile)) {
                alert("Please enter a valid 10-digit mobile number");
                return;
            }

            alert("Form submitted successfully!");
            form.reset();
        });
    }
});

/* Login */

document.querySelector("form").addEventListener("submit", function (e) {

    e.preventDefault();

    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    /*Student Login */
    if (email === "student@lms.com" && password === "4025") {
        window.location.href = "student_dashboard.html";
    }
    /* Teacher Login */

    else if (email === "teacher@lms.com" && password === "1024") {
        window.location.href = "teacher_dashboard.html";
    }

    else {
        alert("Invalid Login");
    }

});
