const mediumURL =
"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@24.tjkt1.16"

async function loadMediumPosts(){

const res = await fetch(mediumURL)

const data = await res.json()

const container = document.getElementById("blogPosts")

data.items.slice(0,6).forEach(post=>{

const date = new Date(post.pubDate).toDateString()

const description = post.description
.replace(/<[^>]*>/g,"")
.substring(0,140)

const card = document.createElement("div")

card.className="blog-card"

card.innerHTML=`

<span class="blog-date">${date}</span>

<h3>${post.title}</h3>

<p>${description}...</p>

<a href="${post.link}" target="_blank">
Read Article →
</a>

`

container.appendChild(card)

})

}

loadMediumPosts()