// 30 días de JavaScript
// playground Ejercio de mascotas


function getPetExerciseInfo(type, age) {
  switch (type) {
    case 'perro':
        if (age < 1 ) return 'Los cachorros necesitan pequeñas y frecuentes sesiones de juego'
        if (age <= 7) return 'Los perros a esta edad necesitan caminatas diarias y sesiones de juego'
        return 'Los perros viejos necesitan caminatas más cortas'
        break
    case 'gato':
        if (age < 1) return 'Los gatitos necesitan frecuentes sesiones de juego'
        if (age <= 7) return 'Los gatos a esta edad necesitan jugar diariamente'
        return 'Los gatos viejos necesitan sesiones de juego más cortas'
        break
    case 'ave':
        if (age < 1 ) return 'Las aves jóvenes necesitan mucho espacio para volar'
        if (age <= 7) return 'Las aves necesitan jugar diariamente y un lugar para volar'
        return 'Las aves mayores necesitan descansar más, pero siguen ocupando un lugar para volar'
        break
    default:
        return 'Tipo de mascota inválida'
  }
    
}

console.log( getPetExerciseInfo("perro", 3) )
console.log( getPetExerciseInfo("gato", 8) )
console.log( getPetExerciseInfo("Mamut", 25) )
