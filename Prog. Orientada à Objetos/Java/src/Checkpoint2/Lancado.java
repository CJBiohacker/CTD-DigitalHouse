package Checkpoint2;

class Lancado extends Jogo {
    private final boolean statusErro;
    protected Lancado(String titulo, String genero, String dev, String distro, String dataLanc, boolean multiplayer) {
        super(titulo, genero, dev, distro, dataLanc, multiplayer);
        statusErro = true;
    }

    protected void alertaUsuarioGamer() throws GamerException {
        if (!this.statusErro) {
            throw new GamerException("Este jogo está com problemas de acesso ! Tente novamente mais tarde.");
        }
    }
}
