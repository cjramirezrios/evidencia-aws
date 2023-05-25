export interface Client{
  id:string,
  name:string,
  lastname:string,
  phone:string
}
export interface ClientResponse{
  status:number,
  body:Client[],
  headers:any
}
