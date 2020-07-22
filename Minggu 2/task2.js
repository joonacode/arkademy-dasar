const filter = (init, limit) =>  {
    const name = ['Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirde','Diana','Elizabeth','Ella','Faith','Olivia','Penelope'];
    let list = name.map(v => v.search(new RegExp(init, 'gi'))).map((v, i) => v >= 0 ? i : null).filter((x, i) => x != null).splice(0, limit).map(v => name[v])
    return list.length > 0 ? list : 'Data tidak ditemukan'
} 

const searchName = (init, limit, callback) => {
    return typeof(limit) === 'number' ? callback(init, limit) : 'Limit harus angka'
}

console.log(searchName('z', 3, filter))
// console.log(searchName('an', '3', filter))
// console.log(searchName('apodpsoa', 3, filter))