// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself"
  ],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no","not sure","maybe","no thanks"],
  [""],
  ["email id of dean sir","dean email","dean email id"],
  ["haha","ha","lol","hehe","funny","joke"],
  ["registrar"],
  ["chancellor office","vc"],
  ["vice chancellor office"],
  ["staff conference room"],
  ["exam section"],
  ["registry","registry office"],
  ["cafo & accts","cafo","accts"],
  ["estate office"],
  ["emi","emi room"],
  ["axis bank atm","atm"],
  ["dean"],
  ["visting falculty room"],
  ["obc bank","bank","axis bank"],
  ["hss hod"],
  ["crdc hod"],
  ["cse hod"],
  ["ece hod"],
  ["che hod"],
  ["ltone"],
  ["lttwo","lttwo"],
  ["ltthree"],
  ["ltfour"],
  ["ltfive"],
  ["ltsix"],
  ["ltseven"],
  ["lteight"],
  ["ltnine"],
  ["ltonezero"],
  ["ltoneone"],//labs
  ["computer labone"],
  ["computer labtwo","cltwo",],
  ["computer labthree","clthree"],
  ["computer labfour","clfour"],
  ["computer labfive","clfive"],
  ["communication labone"],
  ["communication labtwo"],
  ["physics labone"],
  ["physics labtwo"],
  ["mass transfer labone"],
  ["mass transfer labtwo"],
  ["heat transfer labone"],
  ["heat transfer labtwo"],
  ["dsp lab"],
  ["vlsi lab"],
  ["power electronics lab"],
  ["anolog lab"],
  ["language lab"],
  ["thermodynamics lab","Chemical store"],
  ["chemistry lab","research lab"],
  ["chemical lab","research lab"],
  ["solid fluid lab"],
  ["boiler room"],
  ["thermal power project simulator"]
]

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!","Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?"
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually"
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok","I understand","What do you want to talk about?"],
  ["Please say something :("],
  ["dean@juetguna.in"],
  ["Haha!","Good one!"],
  ["Brig Arjun Rawat (Retd)\nE-mail: arjun.rawat[AT]juet.ac.in\nTelephone: 07544-267045\nVishveswarya Bhawan(Ground Floor)"],
  ["Prof. J.S.P. Rai\nVice Chancellor\nEducation: Ph.D.\nE-mail	: vc[AT]juet.ac.in\nContact No.	: 07544-267310-312\nRaman Bhawan(Ground Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"],
    ["Dr. P. K. Singh\nDean (A&R) & HOD (Chemical Engineering and Chemistry), Head (CRDC), In Charge - T&P\nEducation: M.Sc. ( Inorganic Chemistry), Ph.D./n(Organo-Metallic Chemistry)\nE-mail	: pk.singh[AT]juet.ac.in\nContact No.	: Ext. - 108\nRamanujan Bhawan(Ground Floor)"
  ],
  ["Ramanujan Bhawan(Ground Floor)"],
  ["Ramanujan Bhawan(Ground Floor)"],
  ["Raman Bhawan(Second Floor)"],
  ["Ramanujan Bhawan(Ground Floor)"],
  ["Ramanujan Bhawan(Ground Floor)"],
  ["Ramanujan Bhawan(Second Floor)"],
  ["Raman Bhawan(Ground Floor)"],
  ["Ramanujan Bhawan(Ground Floor)"],
  ["Ramanujan Bhawan(Ground Floor)"],
  ["Ramanujan Bhawan(First Floor)"],
  ["Ramanujan Bhawan(First Floor)"],
  ["Ramanujan Bhawan(First Floor)"],
  ["Raman Bhawan(Ground Floor)"],
  ["Near wind Tunnel(Ground Floor)"],
  ["Near wind Tunnel(Ground Floor)"],
  ["Near wind Tunnel(First Floor)"],
  ["Near wind Tunnel(First Floor)"],
  ["Near wind Tunnel(First Floor)"], //labs
  ["Ramanujan(Ground Floor)"],
  ["Ramanujan(Ground Floor)"],
  ["Ramanujan(First Floor)"],
  ["Ramanujan(First Floor)"],
  ["Ramanujan(Second Floor)"],
  ["Ramanujan(Second Floor)"],
  ["Ramanujan(Second Floor)"],
  ["Ramanujan(Second Floor)"],
  ["Raman(Second Floor)"],
  ["Raman(Ground Floor)"],
  ["Raman(Ground Floor)"],
  ["Raman(Ground Floor)"],
  ["Raman(Ground Floor)"],
  ["Ramanujan(Ground Floor)"],
  ["Ramanujan(Ground Floor)"],
  ["Ramanujan(Second Floor)"],
  ["Ramanujan(Second Floor)"],
  ["Raman(Second Floor)"],
  ["Raman(Second Floor)"],
  ["Raman(Second Floor)"],
  ["Raman(First Floor)"],
  ["Raman(First Floor)"],
  ["Raman(First Floor)"],
  ["Raman(Ground Floor)"],
  ["Raman(First Floor)"],
  ["Vishveswarya Bhawan(Ground Floor)"]
]

// Random for any other user input

const alternative = [
  "Try again",
  "I don't understand :/"
]

// Whatever else you want :)

const coronavirus = ["Please stay home", "Wear a mask", "Fortunately, I don't have COVID", "These are uncertain times"]