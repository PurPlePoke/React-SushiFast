function Contact() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-lg-8 mx-auto">
          <h1 className="text-center mb-5">Contactez-nous</h1>
          
          {/* Contact Info Cards */}
          <div className="row mb-5">
            <div className="col-md-4 mb-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <h5 className="card-title">Téléphone</h5>
                  <p className="card-text">01 23 45 67 89</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <h5 className="card-title">Email</h5>
                  <p className="card-text">contact@sushifast.fr</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card text-center h-100">
                <div className="card-body">
                  <h5 className="card-title">Adresse</h5>
                  <p className="card-text">Paris, France</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card shadow-sm">
            <div className="card-body p-4">
              <h3 className="card-title mb-4">Envoyez-nous un message</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nom</label>
                  <input type="text" className="form-control" id="name" placeholder="Votre nom" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" className="form-control" id="email" placeholder="votre@email.com" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Téléphone</label>
                  <input type="tel" className="form-control" id="phone" placeholder="01 23 45 67 89" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows="5" placeholder="Votre message..."></textarea>
                </div>
                <button type="submit" className="btn btn-danger w-100">
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;