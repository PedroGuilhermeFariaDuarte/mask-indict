# Mask Indict

Welcome the Mask Indict APP

Here, you will find all the information needed to download and run the Mask Indict App

**What is Mask Indict App**

The Maks Indict App is a App low-cost, plug-and-play, for searching for people without pets, can be used in different environments just by the user having a smartphone and a Wi-Fi connection.

the app can be run in any android/Ios environment, the device capable of running a current adnroid/Ios system already enough, thus being a perfect target for small businesses or companies that do not think about investing a very high value.

# All technologies

1ª [Node.JS](https://nodejs.org/en/)

2ª [Yarn](https://yarnpkg.com/)

3ª [Expo CLI](https://expo.io/learn)

4ª [Expo Client](https://play.google.com/store/apps/details?id=host.exp.exponent) install in your smartphone, acess google play with this link

You can install all of them completely manually, just click on the list items, you will be redirected to the technology website. :)

**Did you like that? let's install :)**

First, Will install some dependencies for help us during others installation packages :P

1ª **Chocolatey**

  This software allows you to install Node.JS, Yarn and ADB(Android Development Bridge) in an extremely simple and hassle-free way.
  
  **Access the website [Chocolatey](https://chocolatey.org/) e follow all steps for installing.**
  
  Made Chocolatey installation, in your cmd/powersheel open how Administrator, execute the  run the followings commands:
  
  ```bash
    #First#
    choco --v
    #your response well be like with: Chocolatey v0.10.15#
  ```
  now
  
  ```bash
  choco install nodejs-lts
  #wait for the installation of the dependencies, chocolatey may ask some questions, I recommend that you answer positively in all questions#
  ```
  
  with end node.js intallation, now
  
  ```bash
  choco install yarn
  #wait for the installation of the dependencies, chocolatey may ask some questions, I recommend that you answer positively in all questions#
  ```
  
  with end Yarn intallation, last install with choco,now
  
  ```bash
  choco install adb
  #wait for the installation of the dependencies, chocolatey may ask some questions, I recommend that you answer positively in all questions#
  ```
  
 Now, on the same terminal or in a new case prefer, selected a directory and run the following command
 
 ```bash
 git clone https://github.com/deboralbarros/mask-indict.git
 #git is not part of api dependencies because you might want to use it to download a repository or something like that, so make sure GIT is installed in tour machine#
 ```
 
 **Ready!**
 
 Open a new terminal or in current termina, go to directory mask-indict and plug your smartphone in your machinine (using USB cable) and run the follwing command
 
 ```bash
 adb devices
 ``´
 await
  
 ```bash
 adb reverse tcp:PORT_API tcp:PORT_AI
 #
 for more details, see https://github.com/deboralbarros/mask-indict-server
 #
 ``´
**Something very important**

Make sure NodeJS is configured in your environment, See [How to set up environment variables on Windows](http://www.dowdandassociates.com/blog/content/howto-set-an-environment-variable-in-windows-command-line-and-registry/#:~:text=%20HowTo%3A%20Set%20an%20Environment%20Variable%20in%20Windows,Registry.%20WarningThis%20method%20is%20recommended%20for...%20More%20)

 and now, run 
 
 ```bash
 yarn install
 ```
  with end packages intallation, now
  
  ```bash
  yarn start
  ```

You will open a tab in your default browser, wait until a QR Code appears on the bottom left and click on the 'tunnel' option next to 'lan' and when the new QR Code is generated, on your smartphone open the Expo Client and scan QR Code and ready, just wait for the application to load :)

[Link to API Repository](https://github.com/deboralbarros/mas-indict-server)
[Leia a documentação em PORTUGUÊS-BR](https://github.com/deboralbarros/mask-indict/blob/master/LEIA-ME.md)
