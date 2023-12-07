# probaIT

Poll_IT este (se presupune a fi) o platformă de sondaje care pune accent pe interacțiunea
ușoară și eficientă a utilizatorilor. Scopul acestei aplicații este de a oferi o experiență
plăcută în crearea, votarea și gestionarea sondajelor.

# tehnologii

Frontend: React, TypeScript, Bootstrap <br>
Backend: Node.js, Express, MongoDB <br>
Autentificare: JWT (JSON Web Token) <br>
Stilizare: CSS

# BACKEND

    Register & Login

Funcțiile de înregistrare și autentificare permit utilizatorilor să-și creeze
și să-și gestioneze conturile. Aceste funcționalități asigură un mediu securizat
și personalizat pentru utilizatori.

Register Endpoint (POST /register): Permite înregistrarea unui nou utilizator.
Login Endpoint (POST /login): Realizează autentificarea utilizatorului și furnizează un
token pentru identificarea acestuia în cererile ulterioare.

# FRONTEND (UI)

    Navbar | Footer
Navbar-ul reprezintă bara de navigare a aplicației și furnizează butoane pentru autentificare, înregistrare și creare de sondaje
pentru utilizatorii logged in.

Footer-ul oferă link-uri utile către pagini ale evenimentului și va fi menținut pe pagina pentru acces facil.

    Login/Register | Crearea unui Poll
Modalități de autentificare și înregistrare pentru utilizatori.

Modalitate de creare a unui sondaj, cu un formular care include întrebarea și opțiunile de răspuns.

# INSTALARE ȘI RULARE

1. Clonează repository-ul:

    git clone https://github.com/alexia-maholea/probaIT.git

2. Instalează dependențele:

pentru Backend:

    cd backend
    npm install

pentru Frontend:

    cd frontend
    npm install

3. Rulează aplicația:

    npm start

sau

    npm run dev