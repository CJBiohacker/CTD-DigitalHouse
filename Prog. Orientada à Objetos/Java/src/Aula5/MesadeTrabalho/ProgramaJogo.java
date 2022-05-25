package Aula5.MesadeTrabalho;

class ProgramaJogo {
    public static void main(String[] args) {
        UsuarioJogo cj = new UsuarioJogo("Carlos","CEJOTA");

        System.out.println("NÍVEL : " + cj.getNivel());
        System.out.println("PONTUAÇÃO : " + cj.getPontuacao());
        System.out.println("+1 NÍVEL");
        cj.subirNivel();
        System.out.println("NÍVEL : " + cj.getNivel());
        System.out.println("+1 PONTUAÇÃO");
        cj.aumentarPontuacao();
        System.out.println("PONTUAÇÃO : " + cj.getPontuacao());
        System.out.println("+5 BONUS");
        cj.bonus(5);
        System.out.println("PONTUAÇÃO : " + cj.getPontuacao());
    }
}
