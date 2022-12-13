import { User } from "./User.js";

export class Admin extends User{
    constructor (nome,email,nascimento,role = "admin", ativo = true){
        super(nome,email,nascimento,role,ativo)//Aqui podiamos não trazer outro objeto se necessário

    }

    criarCursos(nomeDoCurso, qtdeVagas){
        return`Curso de ${nomeDoCurso} criado com ${qtdeVagas} vagas.`
    }

}

