const btn = document.getElementById("btn");
const output = document.querySelector(".output");

let quote = [
  "The only way to do great work is to love what you do.— Steve Jobs",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "In the middle of every difficulty lies opportunity.",
  "Your time is limited, so don’t waste it living someone else’s life.",
  "हमेशा अपने आप के प्रति सच्चे रहें और दूसरों की बातों की परवाह न करें।",
  "You are the most important person in your whole life.",
  "Always be true to who you are, and ignore what other people have to say about you.",
  "हमेशा अपनी पहचान पर गर्व करें और दूसरों की राय को नज़रअंदाज़ करें।",
  "Dreams are not what we see while sleeping, dreams are those which do not let us sleep.",
  "Whatever you have thought, you can do it, you just need courage and hard work.",
  "Failure is not just that you fall, but that you don't get up.",
  "Your future depends on what you do today, not on what happens tomorrow.","Instead of being afraid of taking risks, learn to live by taking risks."
];

btn.addEventListener("click", () => {
  let random = Math.floor(Math.random() * quote.length);
  output.innerText = quote[random];
});
