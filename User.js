export class User {
    #nome
    #email
    #nascimento
    #role
    #ativo

    constructor (nome,email,nascimento,role, ativo = true){
        this.#nome = nome
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || `Estudante`
        this.#ativo = ativo        
    }
    get nome(){//O get não aceita parametro nos parenteses
        return this.#nome
    }
    get email(){
        return this.#email
    }
    get nascimento(){
        return this.#nascimento
    }
    get role(){
        return this.#role
    }
    get ativo(){
        return this.#ativo
    }
    set nome(novoNome) {
        if (novoNome === ``){
            throw new Error(`Não é permitido nome vazio`);
        }
        this.#nome = novoNome
    }

    exibirInfos(){
        return `${this.#nome}, ${this.#email}`
    }

}
