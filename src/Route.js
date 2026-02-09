export class Route {
  constructor(app, dirname) {
    this.app = app;
    this.dirname = dirname;
  }

  route() {
    const app = this.app;
    const dirname = this.dirname;
    app.get("/", function (req, res) {
      res.render("index.html", {});
    });

    app.get("/qr", function (req, res) {
      res.render("QR.html", {});
    });

    app.get("/read", function (req, res) {
      res.render("QRread.html", {});
    });

    app.get(
      "/.well-known/pki-validation/596F0F30EDFD078D024EDC085AC1A9D5.txt",
      function (req, res) {
        res.sendFile(dirname + "/596F0F30EDFD078D024EDC085AC1A9D5.txt");
      },
    );

    //1. enetry point
    app.listen(1111, function () {
      console.log("jg intro Server listen on *:1110");
    });
  }
}
