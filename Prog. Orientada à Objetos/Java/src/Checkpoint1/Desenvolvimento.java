package Checkpoint1;

class Desenvolvimento extends Jogo {
    private boolean status;
    protected Desenvolvimento(String titulo, String genero, String dev, String distro, String dataLanc, boolean multiplayer, boolean status) {
        super(titulo, genero, dev, distro, dataLanc, multiplayer);
        this.status = status;
    }

    protected boolean acessarStatusDev(){
        return status;
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
