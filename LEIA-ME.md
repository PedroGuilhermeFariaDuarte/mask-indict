# Mask Indict

Bem-vindo o APP Mask Indict

Aqui, você encontrará todas as informações necessárias para baixar e executar o Aplicativo Mask Indict

**O que é Mask Indict app**

O Maks Indict App é um aplicativo de baixo custo, plug-and-play, para procurar pessoas sem animais de estimação, pode ser usado em diferentes ambientes apenas pelo usuário ter um smartphone e uma conexão Wi-Fi.

o app pode ser executado em qualquer ambiente android/Ios, o dispositivo sendo capaz de executar um sistema android/Ios atual já é o suficiente, sendo assim um alvo perfeito para pequenas empresas ou empresas que não pensam em investir um valor muito alto.

Todas as tecnologias

1ª [Node.JS](https://nodejs.org/en/)

2ª [Yarn](https://yarnpkg.com/)

3ª [Expo CLI](https://expo.io/learn)

4ª [Expo Client](https://play.google.com/store/apps/details?id=host.exp.exponent) instalar em seu smartphone, acess google play com este link

Você pode instalar todos eles completamente manualmente, basta clicar nos itens da lista, você será redirecionado para o site da tecnologia. :)

**Gostou disso? vamos instalar :)**

Primeiro, instalaremos algumas dependências para nos ajudar durante a instalação de outros pacotes :P

1ª **Chocolatey**

  Este software permite que você instale Node.JS, Yarn e ADB (Android Development Bridge) de forma extremamente simples e sem problemas.
  
  **Acesse o site [Chocolatey](https://chocolatey.org/) e siga todos os passos de instalação.**
  
  Feita a instalação Chocolatey, no seu cmd/powersheel de preferência abra-o como Administrador, e execute o seguinte comando:
  
  ```bash
    #First#
    choco --v
    #sua respota deve ser algo parecido com isso: Chocolatey v0.10.15#
  ```
  now
  
  ```bash
  choco install nodejs-lts
  #espere pel termino das instalações das dependências, chocolatey pode te pergunta algumas coisas, responda sempre positivamentes#
  ```
  
  com o fim da instalação do node.js, agora
  
  ```bash
  choco install yarn
  #espere pel termino das instalações das dependências, chocolatey pode te pergunta algumas coisas, responda sempre positivamentes#
  ```
  
  com o fim da instalação Yarn, essa é a ultima instalção com choco,eu prometo :p agora
  
  ```bash
  choco install adb
  #espere pel termino das instalações das dependências, chocolatey pode te pergunta algumas coisas, responda sempre positivamentes#
  ```
  
 Agora, no seu terminal de preferência, selecione um diretório e execute o seguinte comando
 
 ```bash
 git clone https://github.com/deboralbarros/mask-indict.git
 #git não faz parte das dependências da deste projeto, como você pode querer usá-lo para baixar um repositório ou algo assim, então certifique-se de que o GIT está instalado em máquina #
 ```
 
 **Pronto!**
 
 Em novo terminal ou no seu atual aberto, vá para pasta mask-indict e conecte seu celular ao computador (usando um cabo USB) e execute o seguinte comando
 
 ```bash
 adb devices
 ``´
 espere
  
 ```bash
 adb reverse tcp:PORT_API tcp:PORT_AI
 #
 para mais detalhes, veja https://github.com/deboralbarros/mask-indict-server
 #
 ``´
**Uma coisa importante**

Certifique-se de que o NodeJS está configurado em seu ambiente, consulte[Como configurar variáveis de ambiente no Windows](http://www.dowdandassociates.com/blog/content/howto-set-an-environment-variable-in-windows-command-line-and-registry/#:~:text=%20HowTo%3A%20Set%20an%20Environment%20Variable%20in%20Windows,Registry.%20WarningThis%20method%20is%20recommended%20for...%20More%20)

 e agora, execute
 
 ```bash
 yarn install
 ```
 com o fim das instalações dos pacotes, agora
  
  ```bash
  yarn start
  ```

Você abrirá uma guia no seu navegador padrão, esperará até que um QR Code apareça no canto inferior esquerdo e clique na opção 'túnel' ao lado de 'lan' e quando o novo QR Code for gerado, em seu smartphone abra o Cliente expo e escaneie QR Code e pronto, basta esperar o aplicativo carregar :)
