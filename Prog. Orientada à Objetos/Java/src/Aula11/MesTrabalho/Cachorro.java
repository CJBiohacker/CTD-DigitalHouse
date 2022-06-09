package Aula11.MesTrabalho;

class Cachorro extends Animal {

    public Cachorro(String nome, int idade) {
        super();
        super.definirNome(nome);
        super.definirIdade(idade);
    }

    public void emitirSom() {
        System.out.println("Aw Aw Aw (cachorro latindo)");
    }

    public void executarHabilidade() {
        System.out.println("Correndo !!!");
    }

    public static void main(String[] args) {

        Cachorro doguinho = new Cachorro("Neymar", 2);

        doguinho.emitirSom();
        System.out.println();
        doguinho.executarHabilidade();
    }
}
