function email_template(temp) {
  const email_template = `<!doctype html>
    <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
    <head>
    <title>Order</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- * **************************************************** -->
    <style type="text/css"> span.productOldPrice { color: #A0131C; text-decoration: line-through;} #outlook a { padding: 0; } body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; } table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; } img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; } p { display: block; margin: 13px 0; } </style>
    <!--[if mso]>
    <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
    </xml>
    <![endif]--> <!--[if lte mso 11]>
    <style type="text/css"> .outlook-group-fix { width:100% !important; } </style>
    <![endif]-->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700" rel="stylesheet" type="text/css">
    <style type="text/css"> @import url(https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700); </style>
    <!--<![endif]-->
    <style type="text/css"> @media only screen and (min-width:480px) { .column-per-100 { width: 100% !important; max-width: 100%; } .column-per-25 { width: 25% !important; max-width: 25%; } .column-per-75 { width: 75% !important; max-width: 75%; } .column-per-48-4 { width: 48.4% !important; max-width: 48.4%; } .column-per-50 { width: 50% !important; max-width: 50%; } } </style>
    <style type="text/css"> @media only screen and (max-width:480px) { table.full-width-mobile { width: 100% !important; } td.full-width-mobile { width: auto !important; } } noinput.menu-checkbox { display: block !important; max-height: none !important; visibility: visible !important; } @media only screen and (max-width:480px) { .menu-checkbox[type="checkbox"]~.inline-links { display: none !important; } .menu-checkbox[type="checkbox"]:checked~.inline-links, .menu-checkbox[type="checkbox"]~.menu-trigger { display: block !important; max-width: none !important; max-height: none !important; font-size: inherit !important; } .menu-checkbox[type="checkbox"]~.inline-links>a { display: block !important; } .menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-icon-close { display: block !important; } .menu-checkbox[type="checkbox"]:checked~.menu-trigger .menu-icon-open { display: none !important; } } </style>
    <style type="text/css"> @media only screen and (min-width:481px) { .products-list-table img { width: 120px !important; display: block; } .products-list-table .image-column { width: 20% !important; } } a { color: #000; } .server-img img { width: 100% } .server-box-one a, .server-box-two a { text-decoration: underline; color: #065193; } .server-img img { width: 100% } .server-box-one a, .server-box-two a { text-decoration: underline; color: #065193; } .server-img img { width: 100% } .server-box-one a, .server-box-two a { text-decoration: underline; color: #065193; } </style>
    </head>

    <body style="background-color:#FFFFFF;">
    <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; background-color: #f1f1f1;">
    <!-- Body Wrapper --> <!--[if mso | IE]>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="body-wrapper-outlook" style="width:600px;" width="600" >
    <tr>
    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->
    <div class="body-wrapper" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; padding-bottom: 20px; box-shadow: 0 4px 8px #999; background: #252b69; background-color: #252b69; margin: 0px auto; max-width: 600px; margin-bottom: 10px; border-radius: 5px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="background:#252b69;background-color:#252b69;width:100%;">
    <tbody>
    <tr>
    <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 10px 20px; text-align: center;" align="center">

    <!--[if mso | IE]>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    <![endif]--> <!-- header --> <!--[if mso | IE]>
    <tr>
    <td class="header-outlook" width="600px" >
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="header-outlook" style="width:560px;" width="560" >
    <tr>
    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->

    <!-- * *************************************************************** -->
    <!-- * **************************** HEADER *************************** -->
    <!-- * *************************************************************** -->

    <div class="header" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; line-height: 15px; padding: 15px 0; margin: 0px auto; max-width: 560px;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
                <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px; text-align: center;" align="center">
                <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <![endif]--> <!-- LOGO --> <!--[if mso | IE]>
                        <td class="" style="vertical-align:middle;width:140px;" >
                            <![endif]-->
                            <div class="column-per-25 outlook-group-fix" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: middle; width: 100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                                <tr>
                                    <td align="center" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; word-break: break-word;">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;border-spacing:0px;">
                                        <tbody>
                                            <tr>
                                                <!-- * ************************* image ************************* * -->
                                                <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;width: 160px;" width="160">
                                                    <a href="/" target="_blank" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; padding: 0 10px;">
                                                        <img src="https://www.thebhive.io/images/BHive_2022_Logo.png" height="40" alt="LOGO" style="width:15rem"/>
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                            </div>
                            <!--[if mso | IE]>
                        </td>
                        <![endif]--> <!-- Navigation Bar --> <!--[if mso | IE]>
                        <td class="navigation-bar-outlook" style="vertical-align:middle;width:420px;" >
                            <![endif]-->
                            <div class="column-per-75 outlook-group-fix navigation-bar" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: middle; width: 100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" style="vertical-align:middle;" width="100%">
                                <tr>
                                    <td align="right" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; text-align: right; font-size: 0px; word-break: break-word;">
                                        <div class="inline-links" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif;">
                                        </div>
                                    </td>
                                </tr>
                            </table>
                            </div>
                            <!--[if mso | IE]>
                        </td>
                    </tr>
                </table>
                <![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
    </div>

    <!--[if mso | IE]>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    <![endif]--> <!-- notice --> <!--[if mso | IE]>
    <tr>
    <td class="notice-wrap-outlook margin-bottom-outlook" width="600px" >
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="notice-wrap-outlook margin-bottom-outlook" style="width:560px;" width="560" >
    <tr>
    <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">
    <![endif]-->

    <!-- * *************************************************************** -->
    <!-- * **************************** ORDER **************************** -->
    <!-- * *************************************************************** -->

    <div class="notice-wrap margin-bottom" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; margin: 0px auto; max-width: 560px; margin-bottom: 15px; margin-top: 1rem;">
    <table align="center" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;">
        <tbody>
            <tr>
                <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; direction: ltr; font-size: 0px; padding: 0px; text-align: center;" align="center">
                <!--[if mso | IE]>
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td class="" style="vertical-align:top;width:560px;" >
                            <![endif]-->
                            <div class="column-per-100 outlook-group-fix" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; text-align: left; direction: ltr; display: inline-block; vertical-align: top; width: 100%;">
                            <table border="0" cellpadding="0" cellspacing="0" role="presentation" width="100%">
                                <tbody>
                                    <tr>
                                        <td style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; background-color: #ffffff; border-radius: 10px; vertical-align: top; padding: 30px 25px;" bgcolor="#ffffff" valign="top">
                                        <table border="0" cellpadding="0" cellspacing="0" role="presentation" style width="100%">
                                            <!-- ***************** text ***************** -->
                                            <tr>
                                                <td align="left" class="link-wrap" style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 0px; padding: 0; padding-bottom: 20px; word-break: break-word;">
                                                    <div style="font-family: Open Sans, Helvetica, Tahoma, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 25px; text-align: left; color: #4F4F4F;">
                                                    <br> ${temp} <br><br>
                                                    </div>
                                                </td>
                                            </tr>
                                        </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            </div>
                            <!--[if mso | IE]>
                        </td>
                    </tr>
                </table>
                <![endif]-->
                </td>
            </tr>
        </tbody>
    </table>
    </div>

    <!--[if mso | IE]>
    </td>
    </tr>
    </table>
    </td>
    </tr>
    <![endif]-->

    <!-- * *************************************************************** -->
    <!-- * *************************** DETAILS *************************** -->
    <!-- * *************************************************************** -->

    </td>
    </tr>
    </tbody>
    </table>
    </div>

    </div>
    </body>
    </html>
    `;

  return email_template;
}

module.exports = email_template;
