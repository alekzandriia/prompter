// Word Bank
const words = {
  adjectives: [
    "hollow", "silly", "dark", "ghostly", "arid", "tumultuous"
  ],
  nouns: [
    "clock", "midnight", "wallet", "opportunity", "playlist"
  ],
}

const prompt = document.getElementById("prompt")
prompt.textContent = `${words.adjectives[Math.floor(Math.random()*words.adjectives.length)]} ${words.nouns[Math.floor(Math.random()*words.nouns.length)]}`