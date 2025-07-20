document.getElementById("orderForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const url = "  https://script.google.com/macros/s/AKfycbxD4nlvkVDAVT5jJYNrD2ry60GxW9zuM_hveAb509SB3xFWmWjTKI7FNxgJSFUjdcw-4A/exec"; // رابط Google Apps Script

  const data = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    phone: document.getElementById("phone").value,
    cartItems: JSON.stringify(cart) // المتغير cart يحتوي على المنتجات
  };

  fetch(url, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" }
  })
  .then(res => res.json())
  .then(res => {
    if (res.result === "success") {
      alert("تم إرسال الطلب بنجاح!");
      document.getElementById("orderForm").reset();
      cart = [];
      updateCart();
    } else {
      alert("حدث خطأ أثناء الإرسال");
    }
  });
});

