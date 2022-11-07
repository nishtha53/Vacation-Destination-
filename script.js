var detailsForm = document.querySelector("#destinations_details_form");


function hadleFormSubmit(event) {
    event.preventDefault();

    var desName = event.target.elements["name"].value;
    var desLocation = event.target.elements["location"].value;
    var desImage = event.target.elements["photo"].value;
    var desDescription = event.target.elements["description"].value;

    for (var i = 0; i < detailsForm.length; i++) {
        detailsForm.elements[i].value = "";       
    }

    var descard = destinationCard(desName,desLocation,desImage,desDescription)

    var wishlistContainer = document.querySelector('#destinations_container');
    
    if(wishlistContainer.children.length == 0)
    {
        document.querySelector("#title").innerHTML = "My wishlist";
    }

    document.querySelector("#destinations_container").appendChild(descard);
}


function destinationCard(name, location ,photoUrl, description){
        var card = document.createElement("div");
        card.className = 'card';

        var img = document.createElement("img");
        img.setAttribute('alt' , name);

        var constantPhotoUrl = "images/signpost.jpg";

        if(photoUrl.length === 0)
        {
            img.setAttribute('src',constantPhotoUrl);
        }
        else
        {
            img.setAttribute('src', photoUrl);
        }

        card.appendChild(img);

        var cardBody = document.createElement("div");
        cardBody.className = "card-body";

        var cardTitle = document.createElement("h3");
        cardTitle.innerText = name;
        cardBody.appendChild(cardTitle);

        var cardSubTitle = document.createElement("h4");
        cardSubTitle.innerText = location;
        cardBody.appendChild(cardSubTitle);

        if(description.length !== 0)
        {
            var cardText = document.createElement("p");
            cardText.className = "card-text";
            cardText.innerText = description;
            cardBody.appendChild(cardText);
        }
        
        var cardDeleteBtn = document.createElement("button");
        cardDeleteBtn.innerText = "Remove";

        cardDeleteBtn.addEventListener("click", removeDestination);

        cardBody.appendChild(cardDeleteBtn);

        card.appendChild(cardBody);

        return card;
}   

function removeDestination(e){
    var card = e.target.parentElement.parentElement;
    card.remove();
}


detailsForm.addEventListener("submit", hadleFormSubmit)