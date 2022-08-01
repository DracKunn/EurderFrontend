export interface Users {
  id: number,
  userName: string,
  nameDTO:{
    firstName:string,
    lastName:string
  },
  email:string,
  addressDTO:{
    id:number,
    streetName:string,
    streetNumber:number,
    postalCode:string,
    city:string
  },phoneNumber:string,
  role:string
}
