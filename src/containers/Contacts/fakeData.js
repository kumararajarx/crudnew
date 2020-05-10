export const otherAttributes = [
  { title: 'Mobile', value: 'mobile', type: 'phoneNumber' },
  { title: 'Home', value: 'home', type: 'phoneNumber' },
  { title: 'Company', value: 'company', type: 'company' },
];

const contactList = JSON.parse(
  `[{
  "id": 22143,
  "firstName": "Kumar",
  "lastName": "raja",
  "name": "KumaraRaja",
  "mobile": "7667355043",
  "home": "04221234567",
  "company": "Abc"
}, {
  "id": 17385,
  "firstName": "Yuvaraj",
  "lastName": "yuvi",
  "name": "Yuvaraj",
  "mobile": "8585654525",
  "home": "12345678",
  "company": "XYZ"
}, {
  "id": 85838,
  "firstName": "Mani",
  "lastName": "Prabhu",
  "name": "Mani",
  "mobile": "9858562104",
  "home": "0422123456",
  "company": "DEF"
}]`
);

console.log("Contactlistlen1111--->", contactList.length);

export default class fakeData {
  constructor(size = 3) {
    this.size = size;
    this.datas = [];

  }
  dataModel(index) {
    console.log('INDEXX', contactList.length);
    return contactList[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }

    if (this.datas[index] === undefined) 
    {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas
      .slice()
      .sort(
        (contact1, contact2) =>
          `${contact1.firstName}${contact1.LastName}`.toUpperCase() >
          `${contact2.firstName}${contact2.LastName}`.toUpperCase()
      );
  }

  getSize() {
    return this.size;
  }
}
