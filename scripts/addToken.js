//Função para gerar o código do Google Authenticator
function generateAuthToken() {
    //TODO: Substitua pelo seu secret
    const secret = "LALALALALALA";
  
    const libUrl =
      "https://cdnjs.cloudflare.com/ajax/libs/otpauth/9.1.1/otpauth.umd.min.js";
    eval(UrlFetchApp.fetch(libUrl).getContentText());
    
    const token = new OTPAuth.TOTP({
      secret,
      algorithm: "SHA1",
      digits: 6,
      period: 30,
    }).generate();
  
    console.log(token);
  }