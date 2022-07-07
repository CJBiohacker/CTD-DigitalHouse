package Checkpoint2;

class Desenvolvimento extends Jogo {
    private final boolean status;
    protected Desenvolvimento(String titulo, String genero, String dev, String distro, String dataLanc, boolean multiplayer, boolean status) {
        super(titulo, genero, dev, distro, dataLanc, multiplayer);
        this.status = status;
    }

    protected boolean acessarStatusDev(){
        return status;
    }

    protected void alertaUsuarioGamer() throws GamerException {
        if (acessarStatusDev()) {
            throw new GamerException("Seu tipo de usuário é Gamer ! Você não possui acesso aos Jogos em Desenvolvimento no estágio Alpha.");
        }
        if (!acessarStatusDev()) {
            throw new GamerException("Seu tipo de usuário é Gamer ! Você não possui acesso aos Jogos em Desenvolvimento no estágio Beta.");
        }
    }

    protected String statusDesenvolvimento(boolean status) {
        // Alpha = false e Beta = true
        if (status) {
            return "Jogo em Beta";
        } else {
            return "Jogo em Alpha";
        }
    }
}
