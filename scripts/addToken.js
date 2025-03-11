//Função para gerar o código do Google Authenticator
async function generateAuthToken() {
  const tokenInput = document.querySelector('#totpPin');

  //Executa o código somente se o input do token TOTP estiver presente na tela
  if(tokenInput) {
    //TODO: Substitua pelo seu secret
    const secret = "LALALALA";
    
    const token = new OTPAuth.TOTP({
      secret,
      algorithm: "SHA1",
      digits: 6,
      period: 30,
    }).generate();

    tokenInput.value = token;
    console.log(token);
  }
}

generateAuthToken();