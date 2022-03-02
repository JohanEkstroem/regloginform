const Register = () => {
  function handleSubmit(e) {
    e.preventDefault();
  }
  function validation() {
    const passwordInput = document.getElementById('psw');
    const letter = document.getElementById('letter');
    const capital = document.getElementById('capital');
    const number = document.getElementById('number');
    const length = document.getElementById('length');

    // When the user clicks on the password field, show the message box
    /* passwordInput.onfocus = () => { */
    document.getElementById('message').style.display = 'block';
    /*     }; */

    // When the user clicks outside of the password field, hide the message box
    passwordInput.onblur = function () {
      document.getElementById('message').style.display = 'none';
    };

    // When the user starts to type something inside the password field
    passwordInput.onkeyup = function () {
      // Validate lowercase letters
      const lowerCaseLetters = /[a-z]/g;
      if (passwordInput.value.match(lowerCaseLetters)) {
        letter.classList.remove('invalid');
        letter.classList.add('valid');
      } else {
        letter.classList.remove('valid');
        letter.classList.add('invalid');
      }

      // Validate capital letters
      const upperCaseLetters = /[A-Z]/g;
      if (passwordInput.value.match(upperCaseLetters)) {
        capital.classList.remove('invalid');
        capital.classList.add('valid');
      } else {
        capital.classList.remove('valid');
        capital.classList.add('invalid');
      }

      // Validate numbers
      const numbers = /[0-9]/g;
      if (passwordInput.value.match(numbers)) {
        number.classList.remove('invalid');
        number.classList.add('valid');
      } else {
        number.classList.remove('valid');
        number.classList.add('invalid');
      }

      // Validate length
      if (passwordInput.value.length >= 8) {
        length.classList.remove('invalid');
        length.classList.add('valid');
      } else {
        length.classList.remove('valid');
        length.classList.add('invalid');
      }
    };
  }
  return (
    <div className="mb-3 container">
      <h1>Registrera</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="usrname" className="form-label">
            Email-address
          </label>
          <input
            type="text"
            id="usrname"
            name="usrname"
            className="form-control"
            required
          />
          <div id="emailHelp" className="form-text">
            Vi kommer inte att dela din email-adress med någon.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            Förnamn
          </label>
          <input
            type="text"
            id="fname"
            name="fname"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Efternamn
          </label>
          <input
            type="text"
            id="lname"
            name="lname"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phoneNumber" className="form-label">
            Telefonnummer
          </label>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="psw" className="form-label">
            Lösenord
          </label>
          <input
            type="password"
            id="psw"
            name="psw"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Måste innehålla minst en siffra, en stor bokstav, en liten bokstav och minst 8 tecken"
            className="form-control"
            onFocus={validation}
            required
          />
        </div>
        <input
          id="submit"
          type="submit"
          value="Skapa konto"
          className="btn-primary"
        />
      </form>
      <div id="message">
        <h3>Lösenordet måste innehålla följande:</h3>
        <p id="letter" className="invalid">
          En <b>liten</b> bokstav
        </p>
        <p id="capital" className="invalid">
          En <b>stor</b> bokstav
        </p>
        <p id="number" className="invalid">
          En <b>siffra</b>
        </p>
        <p id="length" className="invalid">
          Minst <b>8 tecken</b>
        </p>
      </div>
    </div>
  );
};

export default Register;
