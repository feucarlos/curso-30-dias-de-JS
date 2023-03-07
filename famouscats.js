function findFamousCats(cats) {
    // Creamos un objeto en el cual guardaremos los nombres
    // de los gatitos y el número máximo de seguidores
    let famousStats = {
      catNames: [],
      maxNumOfFollowers: 0,
    };
  
    for (let i = 0; i < cats.length; i++) {
      const cat = cats[i];
      const totalFollowers = cat.followers.reduce(
        (acum, currentVal) => acum + currentVal, 0
      );
   
      if (totalFollowers === famousStats.maxNumOfFollowers) {
        famousStats.catNames.push(cat.name);
      }
  
      // Por otro lado, si es MAYOR
      if (totalFollowers > famousStats.maxNumOfFollowers) {
         // Reiniciamos el array de nombres
        famousStats.catNames = [];
         // Agregamos a nuestro gatito influencer
        famousStats.catNames.push(cat.name);
         // Para al final asignar el número máximo de seguidores
         // a la debida propiedad del objeto
        famousStats.maxNumOfFollowers = totalFollowers;
      }
    }
  
    // Al final solo retornamos LOS NOMBRES
    return famousStats.catNames;
  }


console.log(

    findFamousCats([
        {name: "Mimi", followers: [320, 120, 70]},
        {name: "Milo", followers: [400, 300, 100, 200]},
        {name: "Gizmo", followers: [250, 750]}
    ])
      
    );