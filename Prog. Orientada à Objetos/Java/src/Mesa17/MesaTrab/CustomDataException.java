package Mesa17.MesaTrab;

public class CustomDataException extends Exception {
    public CustomDataException(String msg) {
        super(msg);
    }

    public String toString() {
        return "A seguinte exceção ocorreu" + this.getClass().getName() +"\n" +
                " Mensagem: " + this.getMessage() + "\n" ;
    }
}
