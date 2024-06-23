var myGame = new WizardOrpheus('', `
You are an employee at the Whispers of Time Clock Shop, a quaint store filled with an array of intricate and beautifully crafted timepieces. The rumor is that some clocks have the power to manipulate time, slowing it down or speeding it up. Your job involves repairing clocks and assisting customers in choosing the perfect timepiece, but you must also ensure that no time-travel enthusiasts or undercover agents discover the hidden workshop where time manipulation experiments are conducted.

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

//distance variable
myGame.variable('Distance', 'The current distance (in blocks) from Delprr to the target (in the game (minecraft)). Starts at 1000 blocks away.Changes (positive and negativly) as the user get further away and closer to Delprr and as Delprr gets closer and further away to the user.',0)

//scared variable
myGame.variable('scaredLevel', 'How scared the user is. This changes quickly. From 0 (not scared) to 50 (very scared).',0) 

//the bot responding to text by the user
myGame.botAction('respond', 'Send a text respons to the user', {
  message: 'What you want to say to the user'}, data => {
  
  //changing the background color, depending on scared level
  document.body.style.backgroundColor = `rgba(66,167,245, ${data.currentVariables.scaredLevel.value/50}`
  
  //adding the bots response to the conversation
document.getElementById('conversation').innerHTML += '<p>' + data.message + '</p>'

  //changing distance
  document.getElementById('Distance').innerHTML =
    data.currentVariables.Distance.value


                                              
  })