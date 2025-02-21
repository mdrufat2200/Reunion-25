
// সাবমিট ট্র্যাকিং ফ্ল্যাগ
document.querySelectorAll(".payment-btn").forEach(button => {
    button.addEventListener("click", function() {
        document.getElementById("paymentType").value = this.getAttribute("data-type");
        alert("✅ আপনি পেমেন্ট মেথড নির্বাচন করেছেন: " + this.getAttribute("data-type"));

        // সব পেমেন্ট বাটন নিষ্ক্রিয় করুন
        document.querySelectorAll(".payment-btn").forEach(btn => {
            btn.classList.add("opacity-50");
            btn.disabled = true;
        });

        // শুধু ক্লিক করা বাটন সক্রিয় করুন
        this.classList.remove("opacity-50");
        this.disabled = false;
    });
});

let isSubmitting = false;
document.getElementById("reunionForm").addEventListener("submit", function(e) {
    e.preventDefault();

    if (isSubmitting) {
        alert("⚠️ অনুগ্রহ করে অপেক্ষা করুন, আপনার ফর্ম প্রক্রিয়াকরণ হচ্ছে...");
        return;
    }

    isSubmitting = true;

    let formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        mobile: document.getElementById("mobile").value,
        section: document.getElementById("section").value,
        paymentType: document.getElementById("paymentType").value,
        paymentNumber: document.getElementById("paymentNumber").value,
        senderNumber: document.getElementById("senderNumber").value,
        transactionId: document.getElementById("transactionId").value,
        batchRepresentative: document.getElementById("batchRepresentative").value,
        guestCount: document.getElementById("guestCount").value
    };

    console.log("Submitted Data:", formData);

    // ✅ Google Sheets API-তে ডেটা পাঠানো
    fetch("https://script.google.com/macros/s/AKfycbyc3HM1LkV1DNQsKzurFgz_ZRFJH6U3u5MNGhaVv8FQSZPg9AYP04z0_xv-MnBxJqGVhQ/exec", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(formData)
    })
    .then(response => response.text())
    .then(data => {
        alert("✅ ফর্ম সফলভাবে জমা হয়েছে!");

        // ✅ EmailJS ব্যবহার করে ইমেইল পাঠানো
        emailjs.send("service_gw7xjyg", "template_t68spln", formData, "8ih_nNRNGmOrPugs2")
        .then(function(response) {
            console.log("Email Sent Successfully!", response);
            alert("📧 কনফার্মেশন ইমেইল পাঠানো হয়েছে!");
        })
        .catch(function(error) {
            console.error("Email Sending Failed!", error);
            alert("❌ ইমেইল পাঠাতে সমস্যা হয়েছে!");
        });

        document.getElementById("reunionForm").reset();

        // সব পেমেন্ট বাটন পুনরায় সক্রিয় করুন
        document.querySelectorAll(".payment-btn").forEach(btn => {
            btn.classList.remove("opacity-50");
            btn.disabled = false;
        });

        isSubmitting = false;
    })
    .catch(error => {
        alert("❌ সমস্যা হয়েছে: " + error);
        isSubmitting = false;
    });
});

// ✅ রিসেট বাটন যুক্ত করা হলো
document.getElementById("resetBtn").addEventListener("click", function() {
    document.getElementById("reunionForm").reset();

    // সব পেমেন্ট বাটন পুনরায় সক্রিয় করুন
    document.querySelectorAll(".payment-btn").forEach(btn => {
        btn.classList.remove("opacity-50");
        btn.disabled = false;
    });
});

function toggleMobileMenu() {
    document.getElementById('mobile-nav').classList.toggle('hidden');
}

function closeMobileMenu() {
    document.getElementById('mobile-nav').classList.add('hidden');
}






























//  // সাবমিট ট্র্যাকিং ফ্ল্যাগ
// document.querySelectorAll(".payment-btn").forEach(button => {
//     button.addEventListener("click", function() {
//         document.getElementById("paymentType").value = this.getAttribute("data-type");
//         alert("✅ আপনি পেমেন্ট মেথড নির্বাচন করেছেন: " + this.getAttribute("data-type"));

//         // সব পেমেন্ট বাটন নিষ্ক্রিয় করুন
//         document.querySelectorAll(".payment-btn").forEach(btn => {
//             btn.classList.add("opacity-50");
//             btn.disabled = true;
//         });

//         // শুধু ক্লিক করা বাটন সক্রিয় করুন
//         this.classList.remove("opacity-50");
//         this.disabled = false;
//     });
// });
// let isSubmitting = false;
// document.getElementById("reunionForm").addEventListener("submit", function(e) {
//     e.preventDefault();
// if (isSubmitting) {
//     alert("⚠️ অনুগ্রহ করে অপেক্ষা করুন, আপনার ফর্ম প্রক্রিয়াকরণ হচ্ছে...");
//     return;
// }

// isSubmitting = true;
//     let formData = new FormData();
//     formData.append("name", document.getElementById("name").value);
//     formData.append("email", document.getElementById("email").value);
//     formData.append("mobile", document.getElementById("mobile").value);
//     formData.append("section", document.getElementById("section").value);
//     formData.append("paymentType", document.getElementById("paymentType").value);
//     formData.append("paymentNumber", document.getElementById("paymentNumber").value);
//     formData.append("senderNumber", document.getElementById("senderNumber").value);
//     formData.append("transactionId", document.getElementById("transactionId").value);
//     formData.append("batchRepresentative", document.getElementById("batchRepresentative").value);
//     formData.append("guestCount", document.getElementById("guestCount").value);

//     console.log("Submitted Data:", Object.fromEntries(formData));

//     fetch("https://script.google.com/macros/s/AKfycbyadzNHgA_my1PJhZDgqiDI74mIb6zVYLzUkffYCDX_hhTN7x3uwtLdps7iBCPuh7h_tA/exec", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: new URLSearchParams({
//             name: document.getElementById("name").value,
//             email: document.getElementById("email").value,
//             mobile: document.getElementById("mobile").value,
//             section: document.getElementById("section").value,
//             paymentType: document.getElementById("paymentType").value,
//             paymentNumber: document.getElementById("paymentNumber").value,
//             senderNumber: document.getElementById("senderNumber").value,
//             transactionId: document.getElementById("transactionId").value,
//             batchRepresentative: document.getElementById("batchRepresentative").value,
//             guestCount: document.getElementById("guestCount").value
//         })
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert("✅ ফর্ম সফলভাবে জমা হয়েছে!");
//         document.getElementById("reunionForm").reset();

//         // সব পেমেন্ট বাটন পুনরায় সক্রিয় করুন
//         document.querySelectorAll(".payment-btn").forEach(btn => {
//             btn.classList.remove("opacity-50");
//             btn.disabled = false;
//         });
//     })
//     .catch(error => alert("❌ সমস্যা হয়েছে: " + error));
// });

// // ✅ রিসেট বাটন যুক্ত করা হলো
// document.getElementById("resetBtn").addEventListener("click", function() {
//     document.getElementById("reunionForm").reset();

//     // সব পেমেন্ট বাটন পুনরায় সক্রিয় করুন
//     document.querySelectorAll(".payment-btn").forEach(btn => {
//         btn.classList.remove("opacity-50");
//         btn.disabled = false;
//     });
// });
// function toggleMobileMenu() {
//     document.getElementById('mobile-nav').classList.toggle('hidden');
// }

// function closeMobileMenu() {
//     document.getElementById('mobile-nav').classList.add('hidden');
// }


// document.getElementById("reunionForm").addEventListener("submit", function (e) {
//     e.preventDefault();

//     // যদি ইতিমধ্যে সাবমিট হয়েছে, তাহলে কিছু না করে রিটার্ন করুন
//     if (isSubmitting) {
//         alert("⚠️ অনুগ্রহ করে অপেক্ষা করুন, আপনার ফর্ম প্রক্রিয়াকরণ হচ্ছে...");
//         return;
//     }

//     isSubmitting = true; // ফ্ল্যাগ সেট করুন, যেন আবার সাবমিট না হয়

//     let formData = new FormData();
//     formData.append("name", document.getElementById("name").value);
//     formData.append("email", document.getElementById("email").value);
//     formData.append("mobile", document.getElementById("mobile").value);
//     formData.append("section", document.getElementById("section").value);
//     formData.append("paymentType", document.getElementById("paymentType").value);
//     formData.append("paymentNumber", document.getElementById("paymentNumber").value);
//     formData.append("senderNumber", document.getElementById("senderNumber").value);
//     formData.append("transactionId", document.getElementById("transactionId").value);
//     formData.append("batchRepresentative", document.getElementById("batchRepresentative").value);
//     formData.append("guestCount", document.getElementById("guestCount").value);

//     console.log("Submitted Data:", Object.fromEntries(formData));

//     fetch("https://script.google.com/macros/s/AKfycbyadzNHgA_my1PJhZDgqiDI74mIb6zVYLzUkffYCDX_hhTN7x3uwtLdps7iBCPuh7h_tA/exec", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//         },
//         body: new URLSearchParams(Object.fromEntries(formData))
//     })
//     .then(response => response.text())
//     .then(data => {
//         alert("✅ ফর্ম সফলভাবে জমা হয়েছে!");
//         document.getElementById("reunionForm").reset();

//         // সব পেমেন্ট বাটন পুনরায় সক্রিয় করুন
//         document.querySelectorAll(".payment-btn").forEach(btn => {
//             btn.classList.remove("opacity-50");
//             btn.disabled = false;
//         });

//         isSubmitting = false; // সফল হলে ফ্ল্যাগ রিসেট করুন
//     })
//     .catch(error => {
//         alert("❌ সমস্যা হয়েছে: " + error);
//         isSubmitting = false; // কোনো সমস্যা হলে ফ্ল্যাগ রিসেট করুন
//     });
// });
