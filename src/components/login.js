const Login = () => {
  return (
    <div className="mb-3 container">
      <h1>Logga in</h1>
      <form>
        <div className="mb-3">
          <label htmlFor="emailLogin" className="form-label">
            Email-address
          </label>
          <input
            type="email"
            className="form-control"
            id="emailLogin"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            Vi kommer inte att dela din email-adress med någon.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="passwordLogin" className="form-label">
            Lösenord
          </label>
          <input type="password" className="form-control" id="passwordLogin" />
        </div>
        <button type="submit" className="btn btn-primary">
          Logga in
        </button>
      </form>
    </div>
  );
};

export default Login;
