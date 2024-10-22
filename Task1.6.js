const phoneBook = [
    { name: 'Marcus Aurelius', phone: '+380445554433' },
    { name: 'Gaius Julius Caesar', phone: '+380445554434' },
    { name: 'Seneca', phone: '+380445554435' }
];
function findPhoneByName(name) {
    for (let i = 0; i < phoneBook.length; i++) {
        if (phoneBook[i].name === name) {
            return phoneBook[i].phone;
        }
    }
    return 'Not found';
}
console.log(findPhoneByName('Marcus Aurelius'));
console.log(findPhoneByName('Seneca'));
console.log(findPhoneByName('Plato'));
