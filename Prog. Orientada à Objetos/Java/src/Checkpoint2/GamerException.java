package Checkpoint2;

public class GamerException extends Exception {

    public GamerException(String msg) {
        super(msg);
    }

    public String toString() {
        return "A seguinte exceção ocorreu" + this.getClass().getName() +"\n" +
                " Mensagem: " + this.getMessage() + "\n" ;
    }

}
