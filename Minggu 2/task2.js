const name = ['Abigail','Alexandra','Alison','Amanda','Angela','Bella','Carol','Caroline','Carolyn','Deirde','Diana','Elizabeth','Ella','Faith','Olivia','Penelope'];
const filter = (init, limit) =>  {
    const list = name.filter(v => v.toLowerCase().indexOf(init.toLowerCase()) > -1).splice(0, limit)
    return list.length > 0 ? list : 'Data tidak ditemukan'
} 

const searchName = (init, limit, callback) => {
    return typeof(limit) === 'number' ? callback(init, limit) : 'Limit harus angka'
}

console.log(searchName('AN', 3, filter))
console.log(searchName('an', '3', filter))
console.log(searchName('apodpsoa', 3, filter))