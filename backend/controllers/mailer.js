const nodemailer = require("nodemailer");

const sendOrderEmail = async (orderData) => {
  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.USER,
        pass: process.env.USER_PASSWORD,
      },
    });

    let info = await transporter.sendMail({
      from: '"Fashio Store" <fashiodotpk@gmail.com>',
      to: [orderData.email, "fashiodotpk@gmail.com"],
      subject: "Order verification ✔",
      text: "Fashio Store",
      html: `
      <h2>User Details</h2>
 <table style = "border-collapse: collapse;width: 100%;">
   <tr>
      <th style="border: 1px solid #dddddd; text-align: left;padding: 8px;"> Name </th>
      <th style="border: 1px solid #dddddd; text-align: left;padding: 8px;"> Address</th>
      <th style = "border: 1px solid #dddddd; text-align: left;padding: 8px;" > City </th>
      <th style="border: 1px solid #dddddd; text-align: left;padding: 8px;"> Phone </th>
   </tr>
   <tr>
      <td style="border: 1px solid #dddddd; text-align: left;padding: 8px;">${orderData.name}</td>
      <td style="border: 1px solid #dddddd; text-align: left;padding: 8px;">${orderData.address}</td>
      <td style="border: 1px solid #dddddd; text-align: left;padding: 8px;">${orderData.city}</td>
      <td style="border: 1px solid #dddddd; text-align: left;padding: 8px;">${orderData.phoneNumber}</td>
   </tr>
 </table >
    <h2> Order Details</h2 >
 <table style="border-collapse: collapse;width: 100%;">
   <thead>
      <th style="border: 1px solid #dddddd; text-align: left;padding: 8px;">Name</th>
      <th style="border: 1px solid #dddddd; text-align: left;padding: 8px;">Size</th>
      <th style="border: 1px solid #dddddd; text-align: left;padding: 8px;">Quantity</th>
      <th style="border: 1px solid #dddddd; text-align: left;padding: 8px;">Price</th>
   </thead>
   <tbody>
      ${orderData.cartItems.map((cartItem) => {
        return `<tr>
        <td style="border: 1px solid #dddddd; text-align: left;padding: 8px;">${cartItem.name}</td>
          <td style="border: 1px solid #dddddd; text-align: left;padding: 8px;">${cartItem.size}</td>
          <td style="border: 1px solid #dddddd; text-align: left;padding: 8px;">${cartItem.quantity}</td>
          <td style="border: 1px solid #dddddd; text-align: left;padding: 8px;">${cartItem.price}</td>
          </tr>`
      })}
   </tbody >
 </table >
      `
    });

  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = sendOrderEmail