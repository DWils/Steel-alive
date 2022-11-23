const fermerMenu = () => {
    // Récupérer la case à cocher
    const input = document.getElementById('menu-cb')
    // Changer son état
    // .. ce qui a pour conséquence de le retirer de l'écran
    input.checked = false
  
    // Supprimer l'élément transparent ajouté à l'ouverture du menu
    const fenetreNode = document.getElementById('menu-cote')
    fenetreNode.remove()
  }
  
  const changerEtatMenu = () => {
    // Récupérer la case à cocher
    const input = document.getElementById('menu-cb')
    // Récupérer l'état de la case
    const actif = input.checked
  
    // Si le menu est affiché
    if (actif) {
      // Ajouter un élément transparent
      const fenetreNode = document.createElement('div')
      fenetreNode.id = 'menu-cote'
      fenetreNode.className = 'menu-cote'
  
      // Ecouter lorsque le visiteur clique dessus
      fenetreNode.addEventListener('click', fermerMenu)
      
      // Ajouter l'élément à la page
      document.body.appendChild(fenetreNode)
    } else {
      // ... sinon ...
      // Supprimer l'élément fictif ajouté à l'ouverture du menu
      const fenetreNode = document.getElementById('menu-cote')
      fenetreNode.remove()
    }
  }
  
  // Ecouter lorsque le visiteur clique sur le menu
  const input = document.getElementById('menu-cb')
  input.addEventListener('click', changerEtatMenu)