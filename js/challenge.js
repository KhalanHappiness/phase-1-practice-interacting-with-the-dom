document.addEventListener("DOMContentLoaded", function(){

    let counter = document.getElementById("counter")
    let minus = document.getElementById("minus")
    let plus = document.getElementById("plus")
    let heart = document.getElementById("heart")
    let ul = document.querySelector(".likes")
    let likes = []
    let commentBox = document.getElementById("comment-form")

    let count = 0

    setInterval(function(){

        count ++

        counter.textContent = count

    }, 1000)

    minus.addEventListener('click', function(){

        count --

        counter.textContent = count
    })

    plus.addEventListener('click', function(){

        count ++

        counter.textContent = count
    })

    heart.addEventListener('click', function(){
        // Find if this number is already in our likes
        let found = false;
        
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].number === count) {
                // If found, increment the times it was liked
                likes[i].times++;
                found = true;
                break;
            }
        }
        
        // If not found, add it as a new entry
        if (!found) {
            likes.push({
                number: count,
                times: 1
            });
        }
        
        // Clear the existing list
        ul.innerHTML = '';
        
        // Rebuild the list with all likes and their counts
        likes.forEach(like => {
            let li = document.createElement("li");
            if (like.times === 1) {
                li.textContent = `${like.number} has been liked 1 time`;
            } else {
                li.textContent = `${like.number} has been liked ${like.times} times`;
            }
            ul.appendChild(li);
        });
    });

    commentBox.addEventListener('submit', function(e){

        e.preventDefault()

        let inputValue = document.getElementById("comment-input").value.trim()

        let div = document.createElement("div")

        div.innerHTML = inputValue
        
        document.body.appendChild(div)

        console.log(inputValue)
    })


        

        

      

        
    







})