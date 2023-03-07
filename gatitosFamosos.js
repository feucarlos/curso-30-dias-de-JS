// 30 días de JavaScript
// playground Gatitos más famosos

function findFamousCats(cats) {
    let name = [];
    let maxSeguidores = 0;
    for (const cat of cats){
        let seguidores = cat.followers.reduce(function(acumulador, numero){
            return acumulador + numero;
        })
        console.log(cat.name + ' ' + seguidores + ' followers vs ' + maxSeguidores);
        if (seguidores > maxSeguidores){
            name = [];
            name.push(cat.name);
            maxSeguidores = seguidores;
        } else if (seguidores == maxSeguidores ){
            name.push(cat.name);
        }
    }
    return name;
}

console.log(

findFamousCats([
    {name: "Mimi", followers: [320, 120, 70]},
    {name: "Botitas", followers: [320, 120, 70]},
    {name: "Milo", followers: [400, 300, 100, 200]},
    {name: "Gizmo", followers: [250, 750]}
])
  
);