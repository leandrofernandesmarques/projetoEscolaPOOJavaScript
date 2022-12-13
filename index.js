import { User } from "./User.js";
import { Admin } from "./Admin.js";
import { Docente } from "./Docente.js";

const user1 = new User("Mariana","m@m.com","2001-01-01")
console.log (user1.exibirInfos())

console.log(user1.nome)
console.log(user1.email)
console.log(user1.nascimento)
console.log(user1.role)
console.log(user1.ativo)

const novoAdmin = new Admin (`Leandro`,`l@l.com`,`2003-10-10`)
console.log(novoAdmin.nome)
novoAdmin.nome = `José`
console.log(novoAdmin.nome)

const novoDocente = new Docente (`Marcela`,`m@m.com`,`2003-01-01`)
console.log (novoDocente.exibirInfos())
