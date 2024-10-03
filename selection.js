/** 
 * Ordena um array em ordem crescente usando o algoritmo    Selection Sort
 * @param   {number[]} arr- Oarray a ser ordenado.
 * @returns {number[]}- o array ordenado em ordem crescente .
 * /
  function selectionSortAscending(arr) {
    let n + arr.length;
    //Loop para percorrer todos os elementos do array
    for(let i = 0; i < n - 1; i++){
        //Assume que o menor elemento está na posição 
        let minIndex = i;
        //Loop para encpntrar o menor elemento no array não ordenado
        for (let j = i + 1; j < n; j++) {
            if (arr[j]) < arr [minIndex]) {
                minIndex = j; //Atualiza o índice do menor elemento encontrado
            }
        }
        return arr;
    }
 //Exemplo de uso:
 let arrayAsc = [64, 25, 12, 22, 11];
  console.log("Array oríginal:", arrayAsc);
  consoele.log("Array ordenado em ordem crescente:", selectionSortAscending(arayAsc));