document.addEventListener("DOMContentLoaded", function () {
  let choices = ["blue", "red", "black", "yellow", "purple"]
  let previousChoice = "red"
  let sneakersData = [
    {
      color: "red",
      image_name: "jordan-4-toro-bravo.png",
      title: "Jordan 4 Toro Bravo",
      description:
        "Inspired by the vibrant energy of Spanish bullfighting, the Jordan 4 Toro Bravo boasts a rich red suede upper that captures attention. The bold color choice symbolizes passion and strength, while the black and white accents offer a striking contrast. Detailed craftsmanship and iconic design elements make this sneaker a standout choice for both style enthusiasts and collectors alike.",
    },
    {
      color: "blue",
      image_name: "jordan-4-university-blue.png",
      title: "Jordan 4 University Blue",
      description:
        "A nod to collegiate sports teams, the Jordan 4 University Blue blends classic charm with contemporary flair. The university blue suede overlays provide a refreshing pop of color, complemented by crisp white and black details. With its timeless design and premium materials, this sneaker effortlessly bridges the gap between sporty and sophisticated.",
    },
    {
      color: "black",
      image_name: "jordan-4-black-cat.png",
      title: "Jordan 4 Black Cat",
      description:
        "Embodying the sleek mystique of a black cat, the Jordan 4 Black Cat is the epitome of understated elegance. The monochromatic black upper exudes a sense of sophistication, while reflective detailing adds a touch of modern allure. Perfectly balancing form and function, this sneaker offers a refined look that's ideal for both casual outings and special occasions.",
    },
    {
      color: "yellow",
      image_name: "jordan-4-lightning.png",
      title: "Jordan 4 Lightning",
      description:
        "Capturing the dynamic essence of lightning, the Jordan 4 Lightning radiates energy and excitement. The bold yellow accents electrify the classic black and white color palette, creating a visually striking aesthetic. Designed for those who dare to stand out, this sneaker is a true statement piece that commands attention with its vibrant personality and iconic silhouette.",
    },
    {
      color: "purple",
      image_name: "jordan-4-canyon-purple.png",
      title: "Jordan 4 Canyon Purple",
      description:
        "Drawing inspiration from the majestic hues of canyon landscapes, the Jordan 4 Canyon Purple showcases a captivating color scheme that's both elegant and distinctive. The rich purple accents contrast beautifully against the neutral white and gray base, creating a harmonious blend of colors. With its eye-catching design and premium craftsmanship, this sneaker is a versatile addition to any sneakerhead's collection.",
    },
  ]

  choices.forEach(function (choice) {
    document
      .getElementById("choice-" + choice)
      .addEventListener("click", function () {
        let cardImage = document.getElementById("cardImage")
        let sneakersImage = document.getElementById("sneakersImage")
        let oldSneakersImage = document.getElementById("oldSneakersImage")
        let imageColor = document.getElementById("imageColor")
        let textSneakers = document.getElementById("textSneakers")
        let titleSneakers = document.getElementById("titleSneakers")
        let descriptionSneakers = document.getElementById(
          "descriptionSneakers"
        )
        let oldTextSneakers = document.getElementById("oldTextSneakers")
        let oldTitleSneakers = document.getElementById("oldTitleSneakers")
        let oldDescriptionSneakers = document.getElementById(
          "oldDescriptionSneakers"
        )
        let choiceElement = document.getElementById("choice-" + choice)
        let oldChoiceElement = document.getElementById(
          "choice-" + previousChoice
        )

        // Supprimer les classes actuelles
        choices.forEach(function (removeChoice) {
          cardImage.classList.remove("filter-" + removeChoice)
          imageColor.classList.remove("filter-" + removeChoice)
        })

        // retirer la bordure et l'ombre à l'élément cliqué
        oldChoiceElement.style.border = "3px solid lightgray"

        // Ajouter une bordure et une ombre à l'élément cliqué
        choiceElement.style.border = "3px solid white"

        // Ajouter la classe de la nouvelle couleur
        cardImage.classList.add("filter-" + choice)

        // Ajouter la classe de la couleur précédente
        imageColor.classList.add("filter-" + previousChoice)

        // Supprimer l'animation existante pour réinitialiser
        cardImage.style.animation = "none"
        sneakersImage.style.animation = "none"
        oldSneakersImage.style.animation = "none"
        textSneakers.style.animation = "none"
        oldTextSneakers.style.animation = "none"

        // Forcer une reflow pour réinitialiser l'animation
        void cardImage.offsetWidth
        void sneakersImage.offsetWidth
        void oldSneakersImage.offsetWidth
        void textSneakers.offsetWidth
        void oldTextSneakers.offsetWidth

        // Appliquer l'animation à cardImage
        cardImage.style.animation = "colorDrop 1.5s forwards"

        // Mettre à jour le titre et la description et l'image
        let selectedSneaker = sneakersData.find(
          (sneaker) => sneaker.color === choice
        )
        if (selectedSneaker) {
          titleSneakers.textContent = selectedSneaker.title
          descriptionSneakers.textContent = selectedSneaker.description
          // Mettre a jour l'image en lui donnant la valeur de image_name
          sneakersImage.src = "images/jordan-4/" + selectedSneaker.image_name
        }

        sneakersImage.style.animation = "imageComeIn 1.5s forwards"
        oldSneakersImage.style.animation = "imageGoOut 1.5s forwards"
        oldSneakersImage.addEventListener("animationend", function () {
          this.style.animation = "imageComeBack 0s forwards"
        })

        textSneakers.style.opacity = "0"
        oldTextSneakers.style.animation = "textGoOut 1s forwards"

        setTimeout(function () {
          textSneakers.style.animation = "textComeIn 1s forwards"
          textSneakers.addEventListener("animationend", function () {
            let oldSelectedSneaker = sneakersData.find(
              (sneaker) => sneaker.color === choice
            )
            if (oldSelectedSneaker) {
              oldTitleSneakers.textContent = oldSelectedSneaker.title
              oldDescriptionSneakers.textContent =
                oldSelectedSneaker.description
              oldSneakersImage.src =
                "images/jordan-4/" + oldSelectedSneaker.image_name
            }
            oldTextSneakers.style.animation = "textComeBack 0s forwards"
          })
        }, 500)

        // Mettre à jour le choix précédent
        previousChoice = choice
      })
  })
})
