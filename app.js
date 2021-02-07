// const kickbox = require('kickbox').client('key').kickbox();

// kickbox.verify("email@mail.com", function (err, response) {
//   // Let's see some results
//   console.log(response.body);
// });

//---------------------------------------------------------

const Verifier = require("email-verifier");

let verifier = new Verifier("key");
verifier.verify("email@mail.com", (err, data) => {
    if (err) console.log(err)
    console.log(data);
});
      



//her servisin  kontrol sınırı vardır hepsinde ayrı ayrı hesap açılıp sayı artırılabilir