// Word Bank
const words = {
  adjectives: [
    "hollow", "silly", "dark", "ghostly", "arid", "expensive", "tumultuous", "bald", "careful", "gentle", "glamorous", "loaded", "sarcastic", "uninterested", "impromptu", "abandoned", "bewitched", "disfigured", "emotional", "filthy", "edible", "smelly","unethical", "capricious", "precocious", "questionable", "secret", "gigantic"
  ],
  nouns: [
    "clock", "midnight", "wallet", "opportunity", "playlist", "vacation", "examination", "painting", "virtual reality", "city", "girl", "man", "woman", "boy", "grandparent", "boss", "newspaper", "skyscraper", "farm", "forest", "goldfish", "job offer", "drug", "officer", "pilot", "cell phone", "diary", "flight", "date", "tournament", "compass", "hideout", "door", "room", "interview", "bacteria"
  ],
}

const prompt = document.getElementById("prompt")
prompt.textContent = `${words.adjectives[Math.floor(Math.random()*words.adjectives.length)]} ${words.nouns[Math.floor(Math.random()*words.nouns.length)]}`

const refresh = document.getElementById("refresh")
refresh.addEventListener("click", () => {
  prompt.textContent = `${words.adjectives[Math.floor(Math.random()*words.adjectives.length)]} ${words.nouns[Math.floor(Math.random()*words.nouns.length)]}`
})