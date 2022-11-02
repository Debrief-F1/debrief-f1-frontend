const mailjet = require("node-mailjet").connect(
  "e597c785ede256daae2db96537171321",
  "914f8f4a861fc431087559697e014e0b"
)
const request = mailjet.post("send", { version: "v3.1" }).request({
  Messages: [
    {
      From: {
        Email: "mslimani1983@gmail.com",
        Name: "SLIMANI",
      },
      To: [
        {
          Email: "msimanipro@gmail.com",
          Name: "SLIMANI",
        },
      ],
      Subject: "Greetings from Mailjet.",
      TextPart: "My first Mailjet email",
      HTMLPart:
        "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
      CustomID: "AppGettingStartedTest",
    },
  ],
})
request
  .then((result) => {
    console.log(result.body)
  })
  .catch((err) => {
    console.log(err.statusCode)
  })

/*  
// Librairie
import sgMail from "@sendgrid/mail"

export default function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).json({ message: "INVALID_METHOD" })

    return
  }

Variables
const { nom, prenom, email, contenu } = req.body
console.log({ nom, prenom, email, contenu })

if (!nom || !prenom || !email || !contenu) {
  res.status(400).json({ message: "INVALID_PARAMETER" })

  return
}

// Syntaxe adresse email
// const pattern =
//   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

// if (!pattern.test(email)) {
//   res.status(400).send({
//     message: "EMAIL_SYNTAX_INCORRECT",
//   })

//   return
// }

Transformer les retours à la ligne pour le HTML
const message = contenu
  .replace(/\n/g, "<br>")
  .replace(/\r/g, "<br>")
  .replace(/\t/g, "<br>")
  .replace(/<(?!br\s*\/?)[^>]+>/g, "") // supprime tout le html en autorisant uniquement les balises <br>

  // Donner la clé API
  sgMail.setApiKey(
    "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"
  )

  // Création du message
  const sendGridMail = {
    to: email,
    from: "mslimani1983@gmail.com",
    templateId: "d-2817e25384fe4b268aa526f99f88d1b1",
    dynamic_template_data: {
      nom: nom,
      prenom: prenom,
      email: email,
      contenu: message,
    },
  }
  // SendGrid
  ;(async () => {
    try {
      await sgMail.send(sendGridMail)
      res.status(200).json({
        message: "EMAIL_SENDED_SUCCESSFULLY",
      })
    } catch {
      res.status(500).json({
        message: "ERROR_WITH_SENDGRID",
      })

      return
    }
  })()*/
// }
