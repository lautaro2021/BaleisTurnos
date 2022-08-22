export interface User{
     id: string,
     admin: boolean,
     name: string,
     email: string,
     password: string,
     phone: string,
     avatar: string
}
export interface Turno{
     id: string,
     tipo: string,
     prof: string,
     dia: string,
     hora: string,
     solicited: boolean
}