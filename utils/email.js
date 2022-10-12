const { FRONTEND_URL } = require('../config/constant');

function getMessage(token, email) {
  const body = 'This is a test email using SendGrid from Node.js';
  return {
    to: email,
    from: 'karthikeayn@ladderstack.com',
    subject: 'Test email with Register code',
    text: body,
    html: `<strong>${token}</strong>`,
  };
}

function registerAdminUserEmail(token, email, firstName, lastName, type = "admin") {
  const body = 'Welcome to Ti"mely';
  const url = type === "employee" ? FRONTEND_URL + "/register?token=" + token : FRONTEND_URL + "/user-verified?token=" + token
  const LABEL = type === "employee" ? "REGISTER" : "LOGIN";
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: 'Welcome to Timely',
    text: body,
    // html: `<p>Welcome to Timely!</p><p>${token}</p>`,
    html: `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2021-12-10</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--> 
  <style type="text/css">
#outlook a {
	padding:0;
}
.ExternalClass {
	width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
	line-height:100%;
}
.es-button {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.es-desk-hidden {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
	background:#ffffff!important;
	border-color:#ffffff!important;
}
.es-button-border:hover {
	background:#ffffff!important;
	border-style:solid solid solid solid!important;
	border-color:#3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3!important;
}
[data-ogsb] .es-button {
	border-width:0!important;
	padding:15px 20px 15px 20px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:20px!important; text-align:center } h2 { font-size:16px!important; text-align:left } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:20px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:16px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:10px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#FAFAFA"> 
   <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]--> 
   <table class="es-wrapper" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top" width="100%" cellspacing="0" cellpadding="0"> 
     <tbody><tr style="border-collapse:collapse"> 
      <td style="padding:0;Margin:0" valign="top"> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:10px;Margin:0" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:580px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">Welcome E-mail <a href="https://trytimely.com" class="view" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#CCCCCC;font-size:12px">| Timely Team</a><br></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-header" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#3d5ca3;width:600px" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#47b7cb" bgcolor="#47b7cb" align="left"> 
               <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" style="padding:0;Margin:0;width:270px" align="left"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-p0l es-m-txt-c" style="padding:0;Margin:0;font-size:0px" align="left"><a href="https://trytimely.com" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#1376C8;font-size:14px"><img src="https://i.ibb.co/X7WWcxt/tp.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="183"></a></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:270px" align="left"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px" align="right"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;background-color:transparent;background-position:left top" bgcolor="transparent" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0" align="center"><img src="https://i.ibb.co/f0qbW9X/Logo-Makr-2r7-A0-B.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="175"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px" align="center"><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>WELCOME TO THE </strong></h1><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>&nbsp;TIMELY PLATFORM</strong></h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-left:40px;padding-right:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px;text-align:center">HI,&nbsp;${firstName} ${lastName}</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-right:35px;padding-left:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px;text-align:center">Thank you for choosing Timely!</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:25px;padding-left:40px;padding-right:40px" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px">If did not make this request, just ignore this email. Otherwise, please click the button below to login:</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="Margin:0;padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:40px" align="center"><span class="es-button-border" style="border-style:solid;border-color:#3D5CA3;background:#FFFFFF;border-width:2px;display:inline-block;border-radius:10px;width:auto"><a href="${url}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#3D5CA3;font-size:14px;border-style:solid;border-color:#FFFFFF;border-width:15px 20px 15px 20px;display:inline-block;background:#FFFFFF;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">${LABEL}</a></span></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-top:20px;background-position:center center" align="left"> 
               <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]--> 
               <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:199px" align="left"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:15px" align="right"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px"><strong>Follow us:</strong></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]--> 
               <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:361px" align="left"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px;font-size:0" align="left"> 
                       <table class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" cellspacing="0" cellpadding="0"> 
                         <tbody><tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png" alt="Fb" title="Facebook" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png" alt="Tw" title="Twitter" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png" alt="Ig" title="Instagram" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png" alt="Yt" title="Youtube" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png" alt="In" title="Linkedin" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:5px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-position:left top" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px">Contact us: <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:14px" href="tel:6469790072">6469790072</a> | <a target="_blank" href="mailto:support@trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:14px">support@trytimely.com</a></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:30px;background-color:#0b5394;background-position:left top" bgcolor="#0b5394" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px" align="left"><h2 style="Margin:0;line-height:19px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;font-style:normal;font-weight:normal;color:#ffffff"><strong>Have quastions?</strong></h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-bottom:5px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px">We are here to help, learn more about us <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px" href="">here</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px">or <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px" href="">contact us</a><br></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-top:15px;background-position:left top" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:600px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0"> 
                       <table class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                         <tbody><tr class="links" style="border-collapse:collapse"> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0" id="esd-menu-id-0" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">Sing up</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-1" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">Blog</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-2" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">About us</a></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0" align="center"> 
                       <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"> 
                         <tbody><tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;border-bottom:1px solid #fafafa;background:none;height:1px;width:100%;margin:0px"></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-bottom:5px;padding-top:15px;padding-left:20px;padding-right:20px" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0" align="center"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table></td> 
     </tr> 
   </tbody></table> 
  </div>  
 
</body></html>`,
  };
}

function announcementEmail(subject, content, email, firstName, lastName) {
  const body = 'Welcome to Timely';
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: `New Announcemnt: ${subject}`,
    text: body,
    // html: `<p>${content}</p>`,
    html: `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2021-12-10</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--> 
  <style type="text/css">
#outlook a {
	padding:0;
}
.ExternalClass {
	width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
	line-height:100%;
}
.es-button {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.es-desk-hidden {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
	background:#ffffff!important;
	border-color:#ffffff!important;
}
.es-button-border:hover {
	background:#ffffff!important;
	border-style:solid solid solid solid!important;
	border-color:#3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3!important;
}
[data-ogsb] .es-button {
	border-width:0!important;
	padding:15px 20px 15px 20px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:20px!important; text-align:center } h2 { font-size:16px!important; text-align:left } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:20px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:16px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:10px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#FAFAFA"> 
   <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]--> 
   <table class="es-wrapper" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top" width="100%" cellspacing="0" cellpadding="0"> 
     <tbody><tr style="border-collapse:collapse"> 
      <td style="padding:0;Margin:0" valign="top"> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:10px;Margin:0" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:580px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">New Announcement  <a href="https://trytimely.com" class="view" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#CCCCCC;font-size:12px">| %COMPANY%</a><br></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-header" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#3d5ca3;width:600px" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#47b7cb" bgcolor="#47b7cb" align="left"> 
               <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" style="padding:0;Margin:0;width:270px" align="left"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-p0l es-m-txt-c" style="padding:0;Margin:0;font-size:0px" align="left"><a href="https://trytimely.com" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#1376C8;font-size:14px"><img src="https://i.ibb.co/X7WWcxt/tp.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="183"></a></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:270px" align="left"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px" align="right"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;background-color:transparent;background-position:left top" bgcolor="transparent" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0" align="center"><img src="https://i.ibb.co/S67k8bN/Logo-Makr-6-Bi-PM6.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="175"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px" align="center"><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>YOU HAVE AN </strong></h1><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>&nbsp; ANNOUNCEMENT</strong></h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-left:40px;padding-right:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px;text-align:center">HI,&nbsp;${firstName} ${lastName}</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-right:35px;padding-left:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px;text-align:center">There was a new announcement released</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:25px;padding-left:40px;padding-right:40px" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px">If did not make this request, just ignore this email. Otherwise, please click the button below to view the announcement:</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="Margin:0;padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:40px" align="center"><span class="es-button-border" style="border-style:solid;border-color:#3D5CA3;background:#FFFFFF;border-width:2px;display:inline-block;border-radius:10px;width:auto"><a href="${FRONTEND_URL}/announcements" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#3D5CA3;font-size:14px;border-style:solid;border-color:#FFFFFF;border-width:15px 20px 15px 20px;display:inline-block;background:#FFFFFF;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">VIEW ANNOUNCEMENT</a></span></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-top:20px;background-position:center center" align="left"> 
               <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]--> 
               <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:199px" align="left"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:15px" align="right"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px"><strong>Follow us:</strong></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]--> 
               <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:361px" align="left"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px;font-size:0" align="left"> 
                       <table class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" cellspacing="0" cellpadding="0"> 
                         <tbody><tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png" alt="Fb" title="Facebook" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png" alt="Tw" title="Twitter" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png" alt="Ig" title="Instagram" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png" alt="Yt" title="Youtube" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png" alt="In" title="Linkedin" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:5px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-position:left top" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px">Contact us: <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:14px" href="tel:6469790072">6469790072</a> | <a target="_blank" href="mailto:support@trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:14px">support@trytimely.com</a></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:30px;background-color:#0b5394;background-position:left top" bgcolor="#0b5394" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px" align="left"><h2 style="Margin:0;line-height:19px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;font-style:normal;font-weight:normal;color:#ffffff"><strong>Have quastions?</strong></h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-bottom:5px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px">We are here to help, learn more about us <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px" href="">here</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px">or <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px" href="">contact us</a><br></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-top:15px;background-position:left top" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:600px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0"> 
                       <table class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                         <tbody><tr class="links" style="border-collapse:collapse"> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0" id="esd-menu-id-0" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">Sing up</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-1" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">Blog</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-2" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">About us</a></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0" align="center"> 
                       <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"> 
                         <tbody><tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;border-bottom:1px solid #fafafa;background:none;height:1px;width:100%;margin:0px"></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-bottom:5px;padding-top:15px;padding-left:20px;padding-right:20px" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0" align="center"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table></td> 
     </tr> 
   </tbody></table> 
  </div>  
 
</body></html>`,
  };
}

function requestPasswordResetMail(token, email, userId, firstName, lastName) {
  const body = 'Password Reset';
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: 'Password Reset',
    text: body,
    // html: `<p>Token:${token}</p><p>UserId: ${userId}</p>`,
    html: `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2021-12-10</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--> 
  <style type="text/css">
#outlook a {
	padding:0;
}
.ExternalClass {
	width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
	line-height:100%;
}
.es-button {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.es-desk-hidden {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
	background:#ffffff!important;
	border-color:#ffffff!important;
}
.es-button-border:hover {
	background:#ffffff!important;
	border-style:solid solid solid solid!important;
	border-color:#3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3!important;
}
[data-ogsb] .es-button {
	border-width:0!important;
	padding:15px 20px 15px 20px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:20px!important; text-align:center } h2 { font-size:16px!important; text-align:left } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:20px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:16px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:10px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#FAFAFA"> 
   <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]--> 
   <table class="es-wrapper" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top" width="100%" cellspacing="0" cellpadding="0"> 
     <tbody><tr style="border-collapse:collapse"> 
      <td style="padding:0;Margin:0" valign="top"> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:10px;Margin:0" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:580px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">Forgot your Password? <a href="https://trytimely.com" class="view" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#CCCCCC;font-size:12px">| Timely Team</a><br></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-header" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#3d5ca3;width:600px" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#47b7cb" bgcolor="#47b7cb" align="left"> 
               <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" style="padding:0;Margin:0;width:270px" align="left"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-p0l es-m-txt-c" style="padding:0;Margin:0;font-size:0px" align="left"><a href="https://trytimely.com" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#1376C8;font-size:14px"><img src="https://i.ibb.co/X7WWcxt/tp.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="183"></a></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:270px" align="left"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px" align="right"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;background-color:transparent;background-position:left top" bgcolor="transparent" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0" align="center"><img src="https://i.ibb.co/yNyqzjh/23891556799905703.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="175"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px" align="center"><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>FORGOT YOUR </strong></h1><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>&nbsp;PASSWORD?</strong></h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-left:40px;padding-right:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px;text-align:center">HI,&nbsp;${firstName} ${lastName}</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-right:35px;padding-left:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px;text-align:center">There was a request to change your password!</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:25px;padding-left:40px;padding-right:40px" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px">If did not make this request, just ignore this email. Otherwise, please click the button below to change your password:</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="Margin:0;padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:40px" align="center"><span class="es-button-border" style="border-style:solid;border-color:#3D5CA3;background:#FFFFFF;border-width:2px;display:inline-block;border-radius:10px;width:auto"><a href="${FRONTEND_URL}/reset-password?token=${token}&user_id=${userId}" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#3D5CA3;font-size:14px;border-style:solid;border-color:#FFFFFF;border-width:15px 20px 15px 20px;display:inline-block;background:#FFFFFF;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">RESET PASSWORD</a></span></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-top:20px;background-position:center center" align="left"> 
               <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]--> 
               <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:199px" align="left"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:15px" align="right"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px"><strong>Follow us:</strong></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]--> 
               <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:361px" align="left"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px;font-size:0" align="left"> 
                       <table class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" cellspacing="0" cellpadding="0"> 
                         <tbody><tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png" alt="Fb" title="Facebook" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png" alt="Tw" title="Twitter" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png" alt="Ig" title="Instagram" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png" alt="Yt" title="Youtube" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png" alt="In" title="Linkedin" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:5px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-position:left top" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px">Contact us: <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:14px" href="tel:6469790072">6469790072</a> | <a target="_blank" href="mailto:support@trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:14px">support@trytimely.com</a></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:30px;background-color:#0b5394;background-position:left top" bgcolor="#0b5394" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px" align="left"><h2 style="Margin:0;line-height:19px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;font-style:normal;font-weight:normal;color:#ffffff"><strong>Have quastions?</strong></h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-bottom:5px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px">We are here to help, learn more about us <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px" href="">here</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px">or <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px" href="">contact us</a><br></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-top:15px;background-position:left top" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:600px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0"> 
                       <table class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                         <tbody><tr class="links" style="border-collapse:collapse"> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0" id="esd-menu-id-0" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">Sing up</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-1" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">Blog</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-2" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">About us</a></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0" align="center"> 
                       <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"> 
                         <tbody><tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;border-bottom:1px solid #fafafa;background:none;height:1px;width:100%;margin:0px"></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-bottom:5px;padding-top:15px;padding-left:20px;padding-right:20px" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0" align="center"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table></td> 
     </tr> 
   </tbody></table> 
  </div>  
 
</body></html>`,
  };
}

function passwordChangeSuccess(email, firstName, lastName) {
  const body = 'Password changed Successfully!';
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: 'Password changed Successfully!',
    text: body,
    html: `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New email template 2021-12-10</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      .es-button-border:hover {
        background: #ffffff !important;
        border-style: solid solid solid solid !important;
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 20px 15px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120% !important;
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        h2 a {
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
          display: block !important;
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
        width="100%"
        cellspacing="0"
        cellpadding="0"
      >
        <tbody>
          <tr style="border-collapse: collapse">
            <td style="padding: 0; margin: 0" valign="top">
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td style="padding: 10px; margin: 0" align="left">
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 580px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-infoblock"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                line-height: 14px;
                                                font-size: 12px;
                                                color: #cccccc;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 14px;
                                                  color: #cccccc;
                                                  font-size: 12px;
                                                "
                                              >
                                                Password Changed Successfully
                                                <a
                                                  href="https://trytimely.com"
                                                  class="view"
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #cccccc;
                                                    font-size: 12px;
                                                  "
                                                  >| Timely Team</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-header"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-header-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #3d5ca3;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#3d5ca3"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 20px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-color: #47b7cb;
                              "
                              bgcolor="#47b7cb"
                              align="left"
                            >
                              <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-p20b"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-p0l es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0px;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://trytimely.com"
                                                target="_blank"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: none;
                                                  color: #1376c8;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://i.ibb.co/X7WWcxt/tp.png"
                                                  alt=""
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  width="183"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 10px;
                                              "
                                              align="right"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #ffffff;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 40px;
                                background-color: transparent;
                                background-position: left top;
                              "
                              bgcolor="transparent"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: left top;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <img
                                                src="https://i.ibb.co/yNyqzjh/23891556799905703.png"
                                                alt=""
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                                width="175"
                                              />
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                              "
                                              align="center"
                                            >
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong
                                                  >PASSWORD CHANGED
                                                </strong>
                                              </h1>
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong
                                                  >&nbsp;SUCCESSFULLY</strong
                                                >
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                HI,&nbsp;${firstName}
                                                ${lastName}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 35px;
                                                padding-left: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                Your Password had changed
                                                successfully.
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 25px;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                If did not make this request,
                                                just ignore this email.
                                                Otherwise, please click the
                                                button below to change your
                                                password:
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 10px;
                                padding-right: 10px;
                                padding-top: 20px;
                                background-position: center center;
                              "
                              align="left"
                            >
                              <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 199px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                              "
                                              align="right"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                <strong>Follow us:</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 361px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                                padding-top: 10px;
                                                font-size: 0;
                                              "
                                              align="left"
                                            >
                                              <table
                                                class="es-table-not-adapt es-social"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png"
                                                        alt="Fb"
                                                        title="Facebook"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png"
                                                        alt="Tw"
                                                        title="Twitter"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png"
                                                        alt="Ig"
                                                        title="Instagram"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png"
                                                        alt="Yt"
                                                        title="Youtube"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png"
                                                        alt="In"
                                                        title="Linkedin"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 5px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #666666;
                                                  font-size: 14px;
                                                "
                                              >
                                                Contact us:
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  href="tel:6469790072"
                                                  >6469790072</a
                                                >
                                                |
                                                <a
                                                  target="_blank"
                                                  href="mailto:support@trytimely.com"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  >support@trytimely.com</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 10px;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-bottom: 30px;
                                background-color: #0b5394;
                                background-position: left top;
                              "
                              bgcolor="#0b5394"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <h2
                                                style="
                                                  margin: 0;
                                                  line-height: 19px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 16px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #ffffff;
                                                "
                                              >
                                                <strong>Have quastions?</strong>
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                We are here to help, learn more
                                                about us
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >here</a
                                                >
                                              </p>
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                or
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >contact us</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-top: 15px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 600px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td style="padding: 0; margin: 0">
                                              <table
                                                class="es-menu"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    class="links"
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                      "
                                                      id="esd-menu-id-0"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Sing up</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-1"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Blog</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-2"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >About us</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 20px;
                                                padding-left: 20px;
                                                padding-right: 20px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <table
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        border-bottom: 1px solid
                                                          #fafafa;
                                                        background: none;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-bottom: 5px;
                                padding-top: 15px;
                                padding-left: 20px;
                                padding-right: 20px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td style="padding: 0; margin: 0" align="center">
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr
                                            style="border-collapse: collapse"
                                          ></tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`,
  };
}

function welcomeEmail(email) {
  const body = 'Welcome to Timely';
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: 'Welcome to Timely!',
    text: body,
    html: `<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office" style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"><head> 
  <meta charset="UTF-8"> 
  <meta content="width=device-width, initial-scale=1" name="viewport"> 
  <meta name="x-apple-disable-message-reformatting"> 
  <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
  <meta content="telephone=no" name="format-detection"> 
  <title>New email template 2021-12-10</title> 
  <!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--> 
  <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--> 
  <!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--> 
  <style type="text/css">
#outlook a {
	padding:0;
}
.ExternalClass {
	width:100%;
}
.ExternalClass,
.ExternalClass p,
.ExternalClass span,
.ExternalClass font,
.ExternalClass td,
.ExternalClass div {
	line-height:100%;
}
.es-button {
	mso-style-priority:100!important;
	text-decoration:none!important;
}
a[x-apple-data-detectors] {
	color:inherit!important;
	text-decoration:none!important;
	font-size:inherit!important;
	font-family:inherit!important;
	font-weight:inherit!important;
	line-height:inherit!important;
}
.es-desk-hidden {
	display:none;
	float:left;
	overflow:hidden;
	width:0;
	max-height:0;
	line-height:0;
	mso-hide:all;
}
.es-button-border:hover a.es-button, .es-button-border:hover button.es-button {
	background:#ffffff!important;
	border-color:#ffffff!important;
}
.es-button-border:hover {
	background:#ffffff!important;
	border-style:solid solid solid solid!important;
	border-color:#3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3!important;
}
[data-ogsb] .es-button {
	border-width:0!important;
	padding:15px 20px 15px 20px!important;
}
@media only screen and (max-width:600px) {p, ul li, ol li, a { line-height:150%!important } h1, h2, h3, h1 a, h2 a, h3 a { line-height:120%!important } h1 { font-size:20px!important; text-align:center } h2 { font-size:16px!important; text-align:left } h3 { font-size:20px!important; text-align:center } .es-header-body h1 a, .es-content-body h1 a, .es-footer-body h1 a { font-size:20px!important } h2 a { text-align:left } .es-header-body h2 a, .es-content-body h2 a, .es-footer-body h2 a { font-size:16px!important } .es-header-body h3 a, .es-content-body h3 a, .es-footer-body h3 a { font-size:20px!important } .es-menu td a { font-size:14px!important } .es-header-body p, .es-header-body ul li, .es-header-body ol li, .es-header-body a { font-size:10px!important } .es-content-body p, .es-content-body ul li, .es-content-body ol li, .es-content-body a { font-size:16px!important } .es-footer-body p, .es-footer-body ul li, .es-footer-body ol li, .es-footer-body a { font-size:12px!important } .es-infoblock p, .es-infoblock ul li, .es-infoblock ol li, .es-infoblock a { font-size:12px!important } *[class="gmail-fix"] { display:none!important } .es-m-txt-c, .es-m-txt-c h1, .es-m-txt-c h2, .es-m-txt-c h3 { text-align:center!important } .es-m-txt-r, .es-m-txt-r h1, .es-m-txt-r h2, .es-m-txt-r h3 { text-align:right!important } .es-m-txt-l, .es-m-txt-l h1, .es-m-txt-l h2, .es-m-txt-l h3 { text-align:left!important } .es-m-txt-r img, .es-m-txt-c img, .es-m-txt-l img { display:inline!important } .es-button-border { display:block!important } a.es-button, button.es-button { font-size:14px!important; display:block!important; border-left-width:0px!important; border-right-width:0px!important } .es-btn-fw { border-width:10px 0px!important; text-align:center!important } .es-adaptive table, .es-btn-fw, .es-btn-fw-brdr, .es-left, .es-right { width:100%!important } .es-content table, .es-header table, .es-footer table, .es-content, .es-footer, .es-header { width:100%!important; max-width:600px!important } .es-adapt-td { display:block!important; width:100%!important } .adapt-img { width:100%!important; height:auto!important } .es-m-p0 { padding:0px!important } .es-m-p0r { padding-right:0px!important } .es-m-p0l { padding-left:0px!important } .es-m-p0t { padding-top:0px!important } .es-m-p0b { padding-bottom:0!important } .es-m-p20b { padding-bottom:20px!important } .es-mobile-hidden, .es-hidden { display:none!important } tr.es-desk-hidden, td.es-desk-hidden, table.es-desk-hidden { width:auto!important; overflow:visible!important; float:none!important; max-height:inherit!important; line-height:inherit!important } tr.es-desk-hidden { display:table-row!important } table.es-desk-hidden { display:table!important } td.es-desk-menu-hidden { display:table-cell!important } .es-menu td { width:1%!important } table.es-table-not-adapt, .esd-block-html table { width:auto!important } table.es-social { display:inline-block!important } table.es-social td { display:inline-block!important } }
</style> 
 </head> 
 <body style="width:100%;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0"> 
  <div class="es-wrapper-color" style="background-color:#FAFAFA"> 
   <!--[if gte mso 9]>
			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
				<v:fill type="tile" color="#fafafa"></v:fill>
			</v:background>
		<![endif]--> 
   <table class="es-wrapper" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top" width="100%" cellspacing="0" cellpadding="0"> 
     <tbody><tr style="border-collapse:collapse"> 
      <td style="padding:0;Margin:0" valign="top"> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:10px;Margin:0" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:580px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-infoblock" style="padding:0;Margin:0;line-height:14px;font-size:12px;color:#CCCCCC" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:14px;color:#CCCCCC;font-size:12px">Welcome E-mail <a href="https://trytimely.com" class="view" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#CCCCCC;font-size:12px">| Timely Team</a><br></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-header" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td class="es-adaptive" style="padding:0;Margin:0" align="center"> 
           <table class="es-header-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#3d5ca3;width:600px" cellspacing="0" cellpadding="0" bgcolor="#3d5ca3" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:20px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-color:#47b7cb" bgcolor="#47b7cb" align="left"> 
               <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td class="es-m-p20b" style="padding:0;Margin:0;width:270px" align="left"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-p0l es-m-txt-c" style="padding:0;Margin:0;font-size:0px" align="left"><a href="https://trytimely.com" target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#1376C8;font-size:14px"><img src="https://i.ibb.co/X7WWcxt/tp.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="183"></a></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]--> 
               <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:270px" align="left"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:10px" align="right"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;padding-top:40px;background-color:transparent;background-position:left top" bgcolor="transparent" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:left top" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0" align="center"><img src="https://i.ibb.co/f0qbW9X/Logo-Makr-2r7-A0-B.png" alt="" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="175"></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:15px;padding-bottom:15px" align="center"><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>WELCOME TO THE </strong></h1><h1 style="Margin:0;line-height:24px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:20px;font-style:normal;font-weight:normal;color:#333333"><strong>&nbsp;TIMELY PLATFORM</strong></h1></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-left:40px;padding-right:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px;text-align:center">HI,&nbsp;%FIRSTNAME|% %LASTNAME|%</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-right:35px;padding-left:40px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px;text-align:center">Thank you for choosing Timely!</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:25px;padding-left:40px;padding-right:40px" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px">If did not make this request, just ignore this email. Otherwise, please click the button below to login:</p></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="Margin:0;padding-left:10px;padding-right:10px;padding-top:40px;padding-bottom:40px" align="center"><span class="es-button-border" style="border-style:solid;border-color:#3D5CA3;background:#FFFFFF;border-width:2px;display:inline-block;border-radius:10px;width:auto"><a href="${FRONTEND_URL}/login" class="es-button" target="_blank" style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:#3D5CA3;font-size:14px;border-style:solid;border-color:#FFFFFF;border-width:15px 20px 15px 20px;display:inline-block;background:#FFFFFF;border-radius:10px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:bold;font-style:normal;line-height:17px;width:auto;text-align:center">LOGIN</a></span></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-left:10px;padding-right:10px;padding-top:20px;background-position:center center" align="left"> 
               <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]--> 
               <table class="es-left" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left" cellspacing="0" cellpadding="0" align="left"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:199px" align="left"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-top:15px" align="right"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:24px;color:#666666;font-size:16px"><strong>Follow us:</strong></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]--> 
               <table class="es-right" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right" cellspacing="0" cellpadding="0" align="right"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:361px" align="left"> 
                   <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-position:center center" role="presentation" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:5px;padding-top:10px;font-size:0" align="left"> 
                       <table class="es-table-not-adapt es-social" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" cellspacing="0" cellpadding="0"> 
                         <tbody><tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png" alt="Fb" title="Facebook" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png" alt="Tw" title="Twitter" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png" alt="Ig" title="Instagram" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png" alt="Yt" title="Youtube" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                          <td style="padding:0;Margin:0;padding-right:10px" valign="top" align="center"><img src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png" alt="In" title="Linkedin" style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic" width="32"></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table> 
               <!--[if mso]></td></tr></table><![endif]--></td> 
             </tr> 
             <tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:5px;padding-bottom:20px;padding-left:20px;padding-right:20px;background-position:left top" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0" align="center"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#666666;font-size:14px">Contact us: <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:14px" href="tel:6469790072">6469790072</a> | <a target="_blank" href="mailto:support@trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#666666;font-size:14px">support@trytimely.com</a></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-top:10px;padding-left:20px;padding-right:20px;padding-bottom:30px;background-color:#0b5394;background-position:left top" bgcolor="#0b5394" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px" align="left"><h2 style="Margin:0;line-height:19px;mso-line-height-rule:exactly;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-size:16px;font-style:normal;font-weight:normal;color:#ffffff"><strong>Have quastions?</strong></h2></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-bottom:5px" align="left"><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px">We are here to help, learn more about us <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px" href="">here</a></p><p style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;line-height:21px;color:#ffffff;font-size:14px">or <a target="_blank" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;color:#ffffff;font-size:14px" href="">contact us</a><br></p></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="padding:0;Margin:0;padding-top:15px;background-position:left top" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:600px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0"> 
                       <table class="es-menu" role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                         <tbody><tr class="links" style="border-collapse:collapse"> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0" id="esd-menu-id-0" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">Sing up</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-1" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">Blog</a></td> 
                          <td style="Margin:0;padding-left:5px;padding-right:5px;padding-top:0px;padding-bottom:1px;border:0;border-left:1px solid #3d5ca3" id="esd-menu-id-2" esdev-border-color="#3d5ca3" width="33.33%" valign="top" bgcolor="transparent" align="center"><a target="_blank" href="https://trytimely.com" style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;text-decoration:none;display:block;font-family:helvetica, 'helvetica neue', arial, verdana, sans-serif;color:#3D5CA3;font-size:14px">About us</a></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                     <tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0" align="center"> 
                       <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"> 
                         <tbody><tr style="border-collapse:collapse"> 
                          <td style="padding:0;Margin:0;border-bottom:1px solid #fafafa;background:none;height:1px;width:100%;margin:0px"></td> 
                         </tr> 
                       </tbody></table></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-footer" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0;background-color:#fafafa" bgcolor="#fafafa" align="center"> 
           <table class="es-footer-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="transparent" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-bottom:5px;padding-top:15px;padding-left:20px;padding-right:20px" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                      <td style="padding:0;Margin:0" align="center"></td> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table> 
       <table class="es-content" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%" cellspacing="0" cellpadding="0" align="center"> 
         <tbody><tr style="border-collapse:collapse"> 
          <td style="padding:0;Margin:0" align="center"> 
           <table class="es-content-body" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px" cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center"> 
             <tbody><tr style="border-collapse:collapse"> 
              <td style="Margin:0;padding-left:20px;padding-right:20px;padding-top:30px;padding-bottom:30px" align="left"> 
               <table style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                 <tbody><tr style="border-collapse:collapse"> 
                  <td style="padding:0;Margin:0;width:560px" valign="top" align="center"> 
                   <table role="presentation" style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px" width="100%" cellspacing="0" cellpadding="0"> 
                     <tbody><tr style="border-collapse:collapse"> 
                     </tr> 
                   </tbody></table></td> 
                 </tr> 
               </tbody></table></td> 
             </tr> 
           </tbody></table></td> 
         </tr> 
       </tbody></table></td> 
     </tr> 
   </tbody></table> 
  </div>  
 
</body></html>`,
  };
}

function orderConfirm(email, firstName, lastName, token) {
  const body = 'Order Confirmation';
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: 'Order Confirmation',
    text: body,
    html: `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New email template 2021-12-10</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      .es-button-border:hover {
        background: #ffffff !important;
        border-style: solid solid solid solid !important;
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 20px 15px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120% !important;
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        h2 a {
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
          display: block !important;
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
        width="100%"
        cellspacing="0"
        cellpadding="0"
      >
        <tbody>
          <tr style="border-collapse: collapse">
            <td style="padding: 0; margin: 0" valign="top">
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td style="padding: 10px; margin: 0" align="left">
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 580px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-infoblock"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                line-height: 14px;
                                                font-size: 12px;
                                                color: #cccccc;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 14px;
                                                  color: #cccccc;
                                                  font-size: 12px;
                                                "
                                              >
                                                Order Confirmation
                                                <a
                                                  href="https://viewstripo.email"
                                                  class="view"
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #cccccc;
                                                    font-size: 12px;
                                                  "
                                                  >| Timely Team</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-header"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-header-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #3d5ca3;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#3d5ca3"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 20px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-color: #47b7cb;
                              "
                              bgcolor="#47b7cb"
                              align="left"
                            >
                              <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-p20b"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-p0l es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0px;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://trytimely.com"
                                                target="_blank"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: none;
                                                  color: #1376c8;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://i.ibb.co/X7WWcxt/tp.png"
                                                  alt=""
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  width="183"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 10px;
                                              "
                                              align="right"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #ffffff;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 40px;
                                background-color: transparent;
                                background-position: left top;
                              "
                              bgcolor="transparent"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: left top;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <img
                                                src="https://i.ibb.co/mGt577X/Logo-Makr-1.png"
                                                alt=""
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                                width="175"
                                              />
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                              "
                                              align="center"
                                            >
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong>THANK YOU FOR </strong>
                                              </h1>
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong
                                                  >&nbsp;CHOOSING
                                                  TIMELY!</strong
                                                >
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                HI,&nbsp;${firstName}
                                                ${lastName}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 35px;
                                                padding-left: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                Welcome to timely, we're glad
                                                you're here!
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 25px;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                If did not make this request,
                                                just ignore this email.
                                                Otherwise, please click the
                                                button below to login:
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                margin: 0;
                                                padding-left: 10px;
                                                padding-right: 10px;
                                                padding-top: 40px;
                                                padding-bottom: 40px;
                                              "
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  border-style: solid;
                                                  border-color: #3d5ca3;
                                                  background: #ffffff;
                                                  border-width: 2px;
                                                  display: inline-block;
                                                  border-radius: 10px;
                                                  width: auto;
                                                "
                                                ><a
                                                  href="${FRONTEND_URL}"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    mso-style-priority: 100 !important;
                                                    text-decoration: none;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    color: #3d5ca3;
                                                    font-size: 14px;
                                                    border-style: solid;
                                                    border-color: #ffffff;
                                                    border-width: 15px 20px 15px
                                                      20px;
                                                    display: inline-block;
                                                    background: #ffffff;
                                                    border-radius: 10px;
                                                    font-family: arial,
                                                      'helvetica neue',
                                                      helvetica, sans-serif;
                                                    font-weight: bold;
                                                    font-style: normal;
                                                    line-height: 17px;
                                                    width: auto;
                                                    text-align: center;
                                                  "
                                                  >GET STARTED</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 10px;
                                padding-right: 10px;
                                padding-top: 20px;
                                background-position: center center;
                              "
                              align="left"
                            >
                              <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 199px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                              "
                                              align="right"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                <strong>Follow us:</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 361px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                                padding-top: 10px;
                                                font-size: 0;
                                              "
                                              align="left"
                                            >
                                              <table
                                                class="
                                                  es-table-not-adapt es-social
                                                "
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png"
                                                        alt="Fb"
                                                        title="Facebook"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png"
                                                        alt="Tw"
                                                        title="Twitter"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png"
                                                        alt="Ig"
                                                        title="Instagram"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png"
                                                        alt="Yt"
                                                        title="Youtube"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png"
                                                        alt="In"
                                                        title="Linkedin"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 5px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #666666;
                                                  font-size: 14px;
                                                "
                                              >
                                                Contact us:
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  href="tel:6469790072"
                                                  >6469790072</a
                                                >
                                                |
                                                <a
                                                  target="_blank"
                                                  href="mailto:support@trytimely.com"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  >support@trytimely.com</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 10px;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-bottom: 30px;
                                background-color: #0b5394;
                                background-position: left top;
                              "
                              bgcolor="#0b5394"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <h2
                                                style="
                                                  margin: 0;
                                                  line-height: 19px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 16px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #ffffff;
                                                "
                                              >
                                                <strong>Have quastions?</strong>
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                We are here to help, learn more
                                                about us
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >here</a
                                                >
                                              </p>
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                or
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >contact us</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-top: 15px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 600px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td style="padding: 0; margin: 0">
                                              <table
                                                class="es-menu"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    class="links"
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                      "
                                                      id="esd-menu-id-0"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Sing up</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-1"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Blog</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-2"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >About us</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 20px;
                                                padding-left: 20px;
                                                padding-right: 20px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <table
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        border-bottom: 1px solid
                                                          #fafafa;
                                                        background: none;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-bottom: 5px;
                                padding-top: 15px;
                                padding-left: 20px;
                                padding-right: 20px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td style="padding: 0; margin: 0" align="center">
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-infoblock made_with"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                line-height: 120%;
                                                font-size: 0;
                                                color: #cccccc;
                                              "
                                              align="center"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://viewstripo.email/?utm_source=templates&amp;utm_medium=email&amp;utm_campaign=education&amp;utm_content=trigger_newsletter2"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: none;
                                                  color: #cccccc;
                                                  font-size: 12px;
                                                "
                                              ></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`,
  };
}

function shiftReminder(email, firstName, lastName, token) {
  const body = 'Shift reminder';
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: 'Shift reminder',
    text: body,
    html: `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New email template 2021-12-10</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      .es-button-border:hover {
        background: #ffffff !important;
        border-style: solid solid solid solid !important;
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 20px 15px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120% !important;
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        h2 a {
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
          display: block !important;
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
        width="100%"
        cellspacing="0"
        cellpadding="0"
      >
        <tbody>
          <tr style="border-collapse: collapse">
            <td style="padding: 0; margin: 0" valign="top">
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td style="padding: 10px; margin: 0" align="left">
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 580px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-infoblock"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                line-height: 14px;
                                                font-size: 12px;
                                                color: #cccccc;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 14px;
                                                  color: #cccccc;
                                                  font-size: 12px;
                                                "
                                              >
                                                Shift Reminder
                                                <a
                                                  href="https://viewstripo.email"
                                                  class="view"
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #cccccc;
                                                    font-size: 12px;
                                                  "
                                                  >| %COMPANY%</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-header"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-header-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #3d5ca3;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#3d5ca3"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 20px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-color: #47b7cb;
                              "
                              bgcolor="#47b7cb"
                              align="left"
                            >
                              <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-p20b"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-p0l es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0px;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://trytimely.com"
                                                target="_blank"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: none;
                                                  color: #1376c8;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://i.ibb.co/X7WWcxt/tp.png"
                                                  alt=""
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  width="183"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 10px;
                                              "
                                              align="right"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #ffffff;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 40px;
                                background-color: transparent;
                                background-position: left top;
                              "
                              bgcolor="transparent"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: left top;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <img
                                                src="https://i.ibb.co/7pmvdrk/LogoMakr.png"
                                                alt=""
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                                width="175"
                                              />
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                              "
                                              align="center"
                                            >
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong>JUST A </strong>
                                              </h1>
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong>&nbsp;HEADS UP!</strong>
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                HI,&nbsp;${firstName}
                                                ${lastName}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 35px;
                                                padding-left: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                Don't forget you have your shift
                                                coming up in %MINUTESBEFORE%
                                                minutes
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 25px;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                If you'd like to update your
                                                reminder preferences, click on
                                                the link below:
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                margin: 0;
                                                padding-left: 10px;
                                                padding-right: 10px;
                                                padding-top: 40px;
                                                padding-bottom: 40px;
                                              "
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  border-style: solid;
                                                  border-color: #3d5ca3;
                                                  background: #ffffff;
                                                  border-width: 2px;
                                                  display: inline-block;
                                                  border-radius: 10px;
                                                  width: auto;
                                                "
                                                ><a
                                                  href="${FRONTEND_URL}"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    mso-style-priority: 100 !important;
                                                    text-decoration: none;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    color: #3d5ca3;
                                                    font-size: 14px;
                                                    border-style: solid;
                                                    border-color: #ffffff;
                                                    border-width: 15px 20px 15px
                                                      20px;
                                                    display: inline-block;
                                                    background: #ffffff;
                                                    border-radius: 10px;
                                                    font-family: arial,
                                                      'helvetica neue',
                                                      helvetica, sans-serif;
                                                    font-weight: bold;
                                                    font-style: normal;
                                                    line-height: 17px;
                                                    width: auto;
                                                    text-align: center;
                                                  "
                                                  >UPDATE PREFENCES</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 10px;
                                padding-right: 10px;
                                padding-top: 20px;
                                background-position: center center;
                              "
                              align="left"
                            >
                              <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 199px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                              "
                                              align="right"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                <strong>Follow us:</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 361px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                                padding-top: 10px;
                                                font-size: 0;
                                              "
                                              align="left"
                                            >
                                              <table
                                                class="
                                                  es-table-not-adapt es-social
                                                "
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png"
                                                        alt="Fb"
                                                        title="Facebook"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png"
                                                        alt="Tw"
                                                        title="Twitter"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png"
                                                        alt="Ig"
                                                        title="Instagram"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png"
                                                        alt="Yt"
                                                        title="Youtube"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png"
                                                        alt="In"
                                                        title="Linkedin"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 5px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #666666;
                                                  font-size: 14px;
                                                "
                                              >
                                                Contact us:
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  href="tel:6469790072"
                                                  >6469790072</a
                                                >
                                                |
                                                <a
                                                  target="_blank"
                                                  href="mailto:support@trytimely.com"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  >support@trytimely.com</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 10px;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-bottom: 30px;
                                background-color: #0b5394;
                                background-position: left top;
                              "
                              bgcolor="#0b5394"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <h2
                                                style="
                                                  margin: 0;
                                                  line-height: 19px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 16px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #ffffff;
                                                "
                                              >
                                                <strong>Have quastions?</strong>
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                We are here to help, learn more
                                                about us
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >here</a
                                                >
                                              </p>
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                or
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >contact us</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-top: 15px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 600px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td style="padding: 0; margin: 0">
                                              <table
                                                class="es-menu"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    class="links"
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                      "
                                                      id="esd-menu-id-0"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Sing up</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-1"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Blog</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-2"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >About us</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 20px;
                                                padding-left: 20px;
                                                padding-right: 20px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <table
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        border-bottom: 1px solid
                                                          #fafafa;
                                                        background: none;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-bottom: 5px;
                                padding-top: 15px;
                                padding-left: 20px;
                                padding-right: 20px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td style="padding: 0; margin: 0" align="center">
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-infoblock made_with"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                line-height: 120%;
                                                font-size: 0;
                                                color: #cccccc;
                                              "
                                              align="center"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://viewstripo.email/?utm_source=templates&amp;utm_medium=email&amp;utm_campaign=education&amp;utm_content=trigger_newsletter2"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: none;
                                                  color: #cccccc;
                                                  font-size: 12px;
                                                "
                                              ></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`,
  };
}

function subscriptionChange(email, userId, firstName, lastName, token, company) {
  const body = 'Subscription Change';
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: 'Subscription Change',
    text: body,
    html: `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New email template 2021-12-10</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      .es-button-border:hover {
        background: #ffffff !important;
        border-style: solid solid solid solid !important;
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 20px 15px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120% !important;
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        h2 a {
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
          display: block !important;
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
        width="100%"
        cellspacing="0"
        cellpadding="0"
      >
        <tbody>
          <tr style="border-collapse: collapse">
            <td style="padding: 0; margin: 0" valign="top">
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td style="padding: 10px; margin: 0" align="left">
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 580px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-infoblock"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                line-height: 14px;
                                                font-size: 12px;
                                                color: #cccccc;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 14px;
                                                  color: #cccccc;
                                                  font-size: 12px;
                                                "
                                              >
                                                Subscription Change
                                                <a
                                                  href="https://viewstripo.email"
                                                  class="view"
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #cccccc;
                                                    font-size: 12px;
                                                  "
                                                  >| Timely Team</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-header"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-header-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #3d5ca3;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#3d5ca3"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 20px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-color: #47b7cb;
                              "
                              bgcolor="#47b7cb"
                              align="left"
                            >
                              <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-p20b"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-p0l es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0px;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://trytimely.com"
                                                target="_blank"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: none;
                                                  color: #1376c8;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://i.ibb.co/X7WWcxt/tp.png"
                                                  alt=""
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  width="183"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 10px;
                                              "
                                              align="right"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #ffffff;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 40px;
                                background-color: transparent;
                                background-position: left top;
                              "
                              bgcolor="transparent"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: left top;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <img
                                                src="https://i.ibb.co/mGt577X/Logo-Makr-1.png"
                                                alt=""
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                                width="175"
                                              />
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                              "
                                              align="center"
                                            >
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong
                                                  >A CHANGE HAS BEEN MADE
                                                </strong>
                                              </h1>
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong
                                                  >&nbsp;TO YOUR
                                                  SUBSCRIPTION</strong
                                                >
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                HI,&nbsp;${firstName}
                                                ${lastName}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 35px;
                                                padding-left: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                Someone made an update on your
                                                account - ${company}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 25px;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                If did not make this request,
                                                please click the button below to
                                                update your passsword:
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                margin: 0;
                                                padding-left: 10px;
                                                padding-right: 10px;
                                                padding-top: 40px;
                                                padding-bottom: 40px;
                                              "
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  border-style: solid;
                                                  border-color: #3d5ca3;
                                                  background: #ffffff;
                                                  border-width: 2px;
                                                  display: inline-block;
                                                  border-radius: 10px;
                                                  width: auto;
                                                "
                                                ><a
                                                  href="${FRONTEND_URL}/reset-password?token=${token}&user_id=${userId}"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    mso-style-priority: 100 !important;
                                                    text-decoration: none;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    color: #3d5ca3;
                                                    font-size: 14px;
                                                    border-style: solid;
                                                    border-color: #ffffff;
                                                    border-width: 15px 20px 15px
                                                      20px;
                                                    display: inline-block;
                                                    background: #ffffff;
                                                    border-radius: 10px;
                                                    font-family: arial,
                                                      'helvetica neue',
                                                      helvetica, sans-serif;
                                                    font-weight: bold;
                                                    font-style: normal;
                                                    line-height: 17px;
                                                    width: auto;
                                                    text-align: center;
                                                  "
                                                  >RESET PASSWORD</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 10px;
                                padding-right: 10px;
                                padding-top: 20px;
                                background-position: center center;
                              "
                              align="left"
                            >
                              <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 199px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                              "
                                              align="right"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                <strong>Follow us:</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 361px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                                padding-top: 10px;
                                                font-size: 0;
                                              "
                                              align="left"
                                            >
                                              <table
                                                class="
                                                  es-table-not-adapt es-social
                                                "
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png"
                                                        alt="Fb"
                                                        title="Facebook"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png"
                                                        alt="Tw"
                                                        title="Twitter"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png"
                                                        alt="Ig"
                                                        title="Instagram"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png"
                                                        alt="Yt"
                                                        title="Youtube"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png"
                                                        alt="In"
                                                        title="Linkedin"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 5px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #666666;
                                                  font-size: 14px;
                                                "
                                              >
                                                Contact us:
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  href="tel:6469790072"
                                                  >6469790072</a
                                                >
                                                |
                                                <a
                                                  target="_blank"
                                                  href="mailto:support@trytimely.com"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  >support@trytimely.com</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 10px;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-bottom: 30px;
                                background-color: #0b5394;
                                background-position: left top;
                              "
                              bgcolor="#0b5394"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <h2
                                                style="
                                                  margin: 0;
                                                  line-height: 19px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 16px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #ffffff;
                                                "
                                              >
                                                <strong>Have quastions?</strong>
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                We are here to help, learn more
                                                about us
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >here</a
                                                >
                                              </p>
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                or
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >contact us</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-top: 15px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 600px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td style="padding: 0; margin: 0">
                                              <table
                                                class="es-menu"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    class="links"
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                      "
                                                      id="esd-menu-id-0"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Sing up</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-1"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Blog</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-2"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >About us</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 20px;
                                                padding-left: 20px;
                                                padding-right: 20px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <table
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        border-bottom: 1px solid
                                                          #fafafa;
                                                        background: none;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-bottom: 5px;
                                padding-top: 15px;
                                padding-left: 20px;
                                padding-right: 20px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td style="padding: 0; margin: 0" align="center">
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr
                                            style="border-collapse: collapse"
                                          ></tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`,
  };
}

function weeklyScheduleUpdate(email, firstName, lastName, token) {
  const body = 'Weekly schedule had updated';
  return {
    to: email,
    from: 'rishabh@ladderstack.com',
    subject: 'Weekly schedule had updated',
    text: body,
    html: `<html
  xmlns="http://www.w3.org/1999/xhtml"
  xmlns:o="urn:schemas-microsoft-com:office:office"
  style="
    width: 100%;
    font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    padding: 0;
    margin: 0;
  "
>
  <head>
    <meta charset="UTF-8" />
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <meta name="x-apple-disable-message-reformatting" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta content="telephone=no" name="format-detection" />
    <title>New email template 2021-12-10</title>
    <!--[if (mso 16)]>
      <style type="text/css">
        a {
          text-decoration: none;
        }
      </style>
    <![endif]-->
    <!--[if gte mso 9
      ]><style>
        sup {
          font-size: 100% !important;
        }
      </style><!
    [endif]-->
    <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG></o:AllowPNG>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
    <![endif]-->
    <style type="text/css">
      #outlook a {
        padding: 0;
      }
      .ExternalClass {
        width: 100%;
      }
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
      .es-button-border:hover a.es-button,
      .es-button-border:hover button.es-button {
        background: #ffffff !important;
        border-color: #ffffff !important;
      }
      .es-button-border:hover {
        background: #ffffff !important;
        border-style: solid solid solid solid !important;
        border-color: #3d5ca3 #3d5ca3 #3d5ca3 #3d5ca3 !important;
      }
      [data-ogsb] .es-button {
        border-width: 0 !important;
        padding: 15px 20px 15px 20px !important;
      }
      @media only screen and (max-width: 600px) {
        p,
        ul li,
        ol li,
        a {
          line-height: 150% !important;
        }
        h1,
        h2,
        h3,
        h1 a,
        h2 a,
        h3 a {
          line-height: 120% !important;
        }
        h1 {
          font-size: 20px !important;
          text-align: center;
        }
        h2 {
          font-size: 16px !important;
          text-align: left;
        }
        h3 {
          font-size: 20px !important;
          text-align: center;
        }
        .es-header-body h1 a,
        .es-content-body h1 a,
        .es-footer-body h1 a {
          font-size: 20px !important;
        }
        h2 a {
          text-align: left;
        }
        .es-header-body h2 a,
        .es-content-body h2 a,
        .es-footer-body h2 a {
          font-size: 16px !important;
        }
        .es-header-body h3 a,
        .es-content-body h3 a,
        .es-footer-body h3 a {
          font-size: 20px !important;
        }
        .es-menu td a {
          font-size: 14px !important;
        }
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 10px !important;
        }
        .es-content-body p,
        .es-content-body ul li,
        .es-content-body ol li,
        .es-content-body a {
          font-size: 16px !important;
        }
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 12px !important;
        }
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important;
        }
        *[class="gmail-fix"] {
          display: none !important;
        }
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important;
        }
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important;
        }
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important;
        }
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important;
        }
        .es-button-border {
          display: block !important;
        }
        a.es-button,
        button.es-button {
          font-size: 14px !important;
          display: block !important;
          border-left-width: 0px !important;
          border-right-width: 0px !important;
        }
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important;
        }
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important;
        }
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important;
        }
        .es-adapt-td {
          display: block !important;
          width: 100% !important;
        }
        .adapt-img {
          width: 100% !important;
          height: auto !important;
        }
        .es-m-p0 {
          padding: 0px !important;
        }
        .es-m-p0r {
          padding-right: 0px !important;
        }
        .es-m-p0l {
          padding-left: 0px !important;
        }
        .es-m-p0t {
          padding-top: 0px !important;
        }
        .es-m-p0b {
          padding-bottom: 0 !important;
        }
        .es-m-p20b {
          padding-bottom: 20px !important;
        }
        .es-mobile-hidden,
        .es-hidden {
          display: none !important;
        }
        tr.es-desk-hidden,
        td.es-desk-hidden,
        table.es-desk-hidden {
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important;
        }
        tr.es-desk-hidden {
          display: table-row !important;
        }
        table.es-desk-hidden {
          display: table !important;
        }
        td.es-desk-menu-hidden {
          display: table-cell !important;
        }
        .es-menu td {
          width: 1% !important;
        }
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important;
        }
        table.es-social {
          display: inline-block !important;
        }
        table.es-social td {
          display: inline-block !important;
        }
      }
    </style>
  </head>
  <body
    style="
      width: 100%;
      font-family: helvetica, 'helvetica neue', arial, verdana, sans-serif;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
      padding: 0;
      margin: 0;
    "
  >
    <div class="es-wrapper-color" style="background-color: #fafafa">
      <!--[if gte mso 9]>
        <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
          <v:fill type="tile" color="#fafafa"></v:fill>
        </v:background>
      <![endif]-->
      <table
        class="es-wrapper"
        style="
          mso-table-lspace: 0pt;
          mso-table-rspace: 0pt;
          border-collapse: collapse;
          border-spacing: 0px;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          background-repeat: repeat;
          background-position: center top;
        "
        width="100%"
        cellspacing="0"
        cellpadding="0"
      >
        <tbody>
          <tr style="border-collapse: collapse">
            <td style="padding: 0; margin: 0" valign="top">
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td style="padding: 10px; margin: 0" align="left">
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 580px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-infoblock"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                line-height: 14px;
                                                font-size: 12px;
                                                color: #cccccc;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 14px;
                                                  color: #cccccc;
                                                  font-size: 12px;
                                                "
                                              >
                                                New Weekly Schedule
                                                <a
                                                  href="https://viewstripo.email"
                                                  class="view"
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #cccccc;
                                                    font-size: 12px;
                                                  "
                                                  >| Timely Team</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-header"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      class="es-adaptive"
                      style="padding: 0; margin: 0"
                      align="center"
                    >
                      <table
                        class="es-header-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #3d5ca3;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#3d5ca3"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 20px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-color: #47b7cb;
                              "
                              bgcolor="#47b7cb"
                              align="left"
                            >
                              <!--[if mso]><table style="width:560px" cellpadding="0" 
                        cellspacing="0"><tr><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      class="es-m-p20b"
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-p0l es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                font-size: 0px;
                                              "
                                              align="left"
                                            >
                                              <a
                                                href="https://trytimely.com"
                                                target="_blank"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: none;
                                                  color: #1376c8;
                                                  font-size: 14px;
                                                "
                                                ><img
                                                  src="https://i.ibb.co/X7WWcxt/tp.png"
                                                  alt=""
                                                  style="
                                                    display: block;
                                                    border: 0;
                                                    outline: none;
                                                    text-decoration: none;
                                                    -ms-interpolation-mode: bicubic;
                                                  "
                                                  width="183"
                                              /></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:270px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 270px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 10px;
                                              "
                                              align="right"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: #ffffff;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 40px;
                                background-color: transparent;
                                background-position: left top;
                              "
                              bgcolor="transparent"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: left top;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <img
                                                src="https://i.ibb.co/7pmvdrk/LogoMakr.png"
                                                alt=""
                                                style="
                                                  display: block;
                                                  border: 0;
                                                  outline: none;
                                                  text-decoration: none;
                                                  -ms-interpolation-mode: bicubic;
                                                "
                                                width="175"
                                              />
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                                padding-bottom: 15px;
                                              "
                                              align="center"
                                            >
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong>UPDATED </strong>
                                              </h1>
                                              <h1
                                                style="
                                                  margin: 0;
                                                  line-height: 24px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 20px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #333333;
                                                "
                                              >
                                                <strong
                                                  >&nbsp;WEEKLY SCHEDULE</strong
                                                >
                                              </h1>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                HI,&nbsp;${firstName}
                                                ${lastName}
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-right: 35px;
                                                padding-left: 40px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                  text-align: center;
                                                "
                                              >
                                                The weekly schedule has been
                                                updated
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 25px;
                                                padding-left: 40px;
                                                padding-right: 40px;
                                              "
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                If you are not part of the this
                                                organization, just ignore this
                                                email. Otherwise, please click
                                                the button below to view the
                                                updated schedule:
                                              </p>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                margin: 0;
                                                padding-left: 10px;
                                                padding-right: 10px;
                                                padding-top: 40px;
                                                padding-bottom: 40px;
                                              "
                                              align="center"
                                            >
                                              <span
                                                class="es-button-border"
                                                style="
                                                  border-style: solid;
                                                  border-color: #3d5ca3;
                                                  background: #ffffff;
                                                  border-width: 2px;
                                                  display: inline-block;
                                                  border-radius: 10px;
                                                  width: auto;
                                                "
                                                ><a
                                                  href="${FRONTEND_URL}"
                                                  class="es-button"
                                                  target="_blank"
                                                  style="
                                                    mso-style-priority: 100 !important;
                                                    text-decoration: none;
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    color: #3d5ca3;
                                                    font-size: 14px;
                                                    border-style: solid;
                                                    border-color: #ffffff;
                                                    border-width: 15px 20px 15px
                                                      20px;
                                                    display: inline-block;
                                                    background: #ffffff;
                                                    border-radius: 10px;
                                                    font-family: arial,
                                                      'helvetica neue',
                                                      helvetica, sans-serif;
                                                    font-weight: bold;
                                                    font-style: normal;
                                                    line-height: 17px;
                                                    width: auto;
                                                    text-align: center;
                                                  "
                                                  >VIEW SCHEDULE</a
                                                ></span
                                              >
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-left: 10px;
                                padding-right: 10px;
                                padding-top: 20px;
                                background-position: center center;
                              "
                              align="left"
                            >
                              <!--[if mso]><table style="width:580px" cellpadding="0" cellspacing="0"><tr><td style="width:199px" valign="top"><![endif]-->
                              <table
                                class="es-left"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: left;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="left"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 199px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 15px;
                                              "
                                              align="right"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 24px;
                                                  color: #666666;
                                                  font-size: 16px;
                                                "
                                              >
                                                <strong>Follow us:</strong>
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td><td style="width:20px"></td><td style="width:361px" valign="top"><![endif]-->
                              <table
                                class="es-right"
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                  float: right;
                                "
                                cellspacing="0"
                                cellpadding="0"
                                align="right"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 361px;
                                      "
                                      align="left"
                                    >
                                      <table
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                          background-position: center center;
                                        "
                                        role="presentation"
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-m-txt-c"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                                padding-top: 10px;
                                                font-size: 0;
                                              "
                                              align="left"
                                            >
                                              <table
                                                class="
                                                  es-table-not-adapt es-social
                                                "
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/7GCnhDh/facebook-rounded-gray.png"
                                                        alt="Fb"
                                                        title="Facebook"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/9T43Drx/twitter-rounded-gray.png"
                                                        alt="Tw"
                                                        title="Twitter"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/ZV1Yrj2/instagram-rounded-gray.png"
                                                        alt="Ig"
                                                        title="Instagram"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/6wBwKJs/youtube-rounded-gray.png"
                                                        alt="Yt"
                                                        title="Youtube"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        padding-right: 10px;
                                                      "
                                                      valign="top"
                                                      align="center"
                                                    >
                                                      <img
                                                        src="https://i.ibb.co/1T8YJqf/linkedin-rounded-gray.png"
                                                        alt="In"
                                                        title="Linkedin"
                                                        style="
                                                          display: block;
                                                          border: 0;
                                                          outline: none;
                                                          text-decoration: none;
                                                          -ms-interpolation-mode: bicubic;
                                                        "
                                                        width="32"
                                                      />
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <!--[if mso]></td></tr></table><![endif]-->
                            </td>
                          </tr>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 5px;
                                padding-bottom: 20px;
                                padding-left: 20px;
                                padding-right: 20px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #666666;
                                                  font-size: 14px;
                                                "
                                              >
                                                Contact us:
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  href="tel:6469790072"
                                                  >6469790072</a
                                                >
                                                |
                                                <a
                                                  target="_blank"
                                                  href="mailto:support@trytimely.com"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #666666;
                                                    font-size: 14px;
                                                  "
                                                  >support@trytimely.com</a
                                                >
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-top: 10px;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-bottom: 30px;
                                background-color: #0b5394;
                                background-position: left top;
                              "
                              bgcolor="#0b5394"
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-top: 5px;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <h2
                                                style="
                                                  margin: 0;
                                                  line-height: 19px;
                                                  mso-line-height-rule: exactly;
                                                  font-family: arial,
                                                    'helvetica neue', helvetica,
                                                    sans-serif;
                                                  font-size: 16px;
                                                  font-style: normal;
                                                  font-weight: normal;
                                                  color: #ffffff;
                                                "
                                              >
                                                <strong>Have quastions?</strong>
                                              </h2>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 5px;
                                              "
                                              align="left"
                                            >
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                We are here to help, learn more
                                                about us
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >here</a
                                                >
                                              </p>
                                              <p
                                                style="
                                                  margin: 0;
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  font-family: helvetica,
                                                    'helvetica neue', arial,
                                                    verdana, sans-serif;
                                                  line-height: 21px;
                                                  color: #ffffff;
                                                  font-size: 14px;
                                                "
                                              >
                                                or
                                                <a
                                                  target="_blank"
                                                  style="
                                                    -webkit-text-size-adjust: none;
                                                    -ms-text-size-adjust: none;
                                                    mso-line-height-rule: exactly;
                                                    text-decoration: none;
                                                    color: #ffffff;
                                                    font-size: 14px;
                                                  "
                                                  href=""
                                                  >contact us</a
                                                ><br />
                                              </p>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                padding: 0;
                                margin: 0;
                                padding-top: 15px;
                                background-position: left top;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 600px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td style="padding: 0; margin: 0">
                                              <table
                                                class="es-menu"
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    class="links"
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                      "
                                                      id="esd-menu-id-0"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Sing up</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-1"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >Blog</a
                                                      >
                                                    </td>
                                                    <td
                                                      style="
                                                        margin: 0;
                                                        padding-left: 5px;
                                                        padding-right: 5px;
                                                        padding-top: 0px;
                                                        padding-bottom: 1px;
                                                        border: 0;
                                                        border-left: 1px solid
                                                          #3d5ca3;
                                                      "
                                                      id="esd-menu-id-2"
                                                      esdev-border-color="#3d5ca3"
                                                      width="33.33%"
                                                      valign="top"
                                                      bgcolor="transparent"
                                                      align="center"
                                                    >
                                                      <a
                                                        target="_blank"
                                                        href="https://trytimely.com"
                                                        style="
                                                          -webkit-text-size-adjust: none;
                                                          -ms-text-size-adjust: none;
                                                          mso-line-height-rule: exactly;
                                                          text-decoration: none;
                                                          display: block;
                                                          font-family: helvetica,
                                                            'helvetica neue',
                                                            arial, verdana,
                                                            sans-serif;
                                                          color: #3d5ca3;
                                                          font-size: 14px;
                                                        "
                                                        >About us</a
                                                      >
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                padding-bottom: 20px;
                                                padding-left: 20px;
                                                padding-right: 20px;
                                                font-size: 0;
                                              "
                                              align="center"
                                            >
                                              <table
                                                role="presentation"
                                                style="
                                                  mso-table-lspace: 0pt;
                                                  mso-table-rspace: 0pt;
                                                  border-collapse: collapse;
                                                  border-spacing: 0px;
                                                "
                                                width="100%"
                                                height="100%"
                                                cellspacing="0"
                                                cellpadding="0"
                                                border="0"
                                              >
                                                <tbody>
                                                  <tr
                                                    style="
                                                      border-collapse: collapse;
                                                    "
                                                  >
                                                    <td
                                                      style="
                                                        padding: 0;
                                                        margin: 0;
                                                        border-bottom: 1px solid
                                                          #fafafa;
                                                        background: none;
                                                        height: 1px;
                                                        width: 100%;
                                                        margin: 0px;
                                                      "
                                                    ></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-footer"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                  background-color: transparent;
                  background-repeat: repeat;
                  background-position: center top;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td
                      style="padding: 0; margin: 0; background-color: #fafafa"
                      bgcolor="#fafafa"
                      align="center"
                    >
                      <table
                        class="es-footer-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="transparent"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-bottom: 5px;
                                padding-top: 15px;
                                padding-left: 20px;
                                padding-right: 20px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              style="padding: 0; margin: 0"
                                              align="center"
                                            ></td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
              <table
                class="es-content"
                style="
                  mso-table-lspace: 0pt;
                  mso-table-rspace: 0pt;
                  border-collapse: collapse;
                  border-spacing: 0px;
                  table-layout: fixed !important;
                  width: 100%;
                "
                cellspacing="0"
                cellpadding="0"
                align="center"
              >
                <tbody>
                  <tr style="border-collapse: collapse">
                    <td style="padding: 0; margin: 0" align="center">
                      <table
                        class="es-content-body"
                        style="
                          mso-table-lspace: 0pt;
                          mso-table-rspace: 0pt;
                          border-collapse: collapse;
                          border-spacing: 0px;
                          background-color: transparent;
                          width: 600px;
                        "
                        cellspacing="0"
                        cellpadding="0"
                        bgcolor="#ffffff"
                        align="center"
                      >
                        <tbody>
                          <tr style="border-collapse: collapse">
                            <td
                              style="
                                margin: 0;
                                padding-left: 20px;
                                padding-right: 20px;
                                padding-top: 30px;
                                padding-bottom: 30px;
                              "
                              align="left"
                            >
                              <table
                                style="
                                  mso-table-lspace: 0pt;
                                  mso-table-rspace: 0pt;
                                  border-collapse: collapse;
                                  border-spacing: 0px;
                                "
                                width="100%"
                                cellspacing="0"
                                cellpadding="0"
                              >
                                <tbody>
                                  <tr style="border-collapse: collapse">
                                    <td
                                      style="
                                        padding: 0;
                                        margin: 0;
                                        width: 560px;
                                      "
                                      valign="top"
                                      align="center"
                                    >
                                      <table
                                        role="presentation"
                                        style="
                                          mso-table-lspace: 0pt;
                                          mso-table-rspace: 0pt;
                                          border-collapse: collapse;
                                          border-spacing: 0px;
                                        "
                                        width="100%"
                                        cellspacing="0"
                                        cellpadding="0"
                                      >
                                        <tbody>
                                          <tr style="border-collapse: collapse">
                                            <td
                                              class="es-infoblock made_with"
                                              style="
                                                padding: 0;
                                                margin: 0;
                                                line-height: 120%;
                                                font-size: 0;
                                                color: #cccccc;
                                              "
                                              align="center"
                                            >
                                              <a
                                                target="_blank"
                                                href="https://viewstripo.email/?utm_source=templates&amp;utm_medium=email&amp;utm_campaign=education&amp;utm_content=trigger_newsletter2"
                                                style="
                                                  -webkit-text-size-adjust: none;
                                                  -ms-text-size-adjust: none;
                                                  mso-line-height-rule: exactly;
                                                  text-decoration: none;
                                                  color: #cccccc;
                                                  font-size: 12px;
                                                "
                                              ></a>
                                            </td>
                                          </tr>
                                        </tbody>
                                      </table>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </body>
</html>
`,
  };
}

module.exports = {
  getMessage,
  registerAdminUserEmail,
  requestPasswordResetMail,
  passwordChangeSuccess,
  welcomeEmail,
  announcementEmail,
  orderConfirm,
  shiftReminder,
  subscriptionChange,
  weeklyScheduleUpdate,
};
