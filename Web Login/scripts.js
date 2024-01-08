document.getElementById('login-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Form gönderimini engelle
    var loginContainer = document.querySelector('.login-container');
    loginContainer.style.transform = 'translateY(-100%)'; // Giriş kapsayıcısını yukarıya doğru kaydır
});