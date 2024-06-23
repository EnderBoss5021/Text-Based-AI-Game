var myGame = new WizardOrpheus('', `
You are an employee at the Whispers of Time Clock Shop, a quaint store filled with an array of intricate and beautifully crafted timepieces.The public face of the shop is that is just a normal clock shop however rumors are there are some clocks that the power to manipulate time. Your job involves repairing clocks and assisting customers in choosing the perfect timepiece, but you must also be vigilant. Ensuring that no time-travel enthusiasts or secret agents discover the hidden workshop where the experimental time manipulating clocks are stored and experimented with. You must guard these special timepieces with utmost secrecy, ensuring they remain unseen and untouched by those who might misuse their extraordinary powers. The balance of time itself could be at stake if the wrong person gains access to these unique clocks.

`)

//lets the user talk and use enter to submit text
myGame.createUserAction({
  name: 'message',
  parameters: ['Message from user to game'],
  howBotShouldHandle: 'Respond to the user'

})

document.getElementById('input').addEventListener('keyup',function(e) { 
  if (e.code == 'Enter') { // If the user presses "enter"
    let userInput = document.getElementById('input').value
      myGame.message(userInput)

   
    document.getElementById('conversation').innerHTML += '<p>' + userInput + '</p>'
   
    document.getElementById('input').value = ''

  }
})

//susLevel variable
myGame.variable('susLevel', 'How suspicious the clock shop employee is. This goes up when the employee believes someone is trying to get one of the shops time altering devices. This changes quickly. From 0 (not suspicious) to 100 (extremely suspicious). At 100 the employee will will refuse to talk to the customer',0)

//palceholder variable
myGame.variable('placeholder', '--------------------',0) 

//the bot responding to text by the user
myGame.botAction('respond', 'Send a text respons to the user', {
  message: 'What you want to say to the user'}, data => {
  
  //changing the background color, depending on placeholder level
  document.body.style.backgroundColor = `rgba(66,167,245, ${data.currentVariables.placeholder.value/50}`
  
  //adding the bots response to the conversation
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

  //changing susLevel
  document.getElementById('placeholder').innerHTML =
    data.currentVariables.susLevel.value


                                              
  })