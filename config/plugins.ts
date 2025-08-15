// export default ({ env }) => ({
//   email: {
//     config: {
//       provider: 'sendgrid', 
//       providerOptions: {
//         apiKey: env('SENDGRID_API_KEY'),
//       },
//       settings: {
//         defaultFrom: env('SENDGRID_FROM_EMAIL', 'learnvue3@gmail.com'),
//         defaultReplyTo: env('SENDGRID_FROM_EMAIL', 'learnvue3@gmail.com'),
//         testAddress: env('SENDGRID_FROM_EMAIL', 'learnvue3@gmail.com'),
//       },
//     },
//   }
// });



export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer', 
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.ethereal.email'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: env('SMTP_USERNAME'),
          pass: env('SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: 'hello@example.com',
        defaultReplyTo: 'hello@example.com',
      },
    },
  }
});