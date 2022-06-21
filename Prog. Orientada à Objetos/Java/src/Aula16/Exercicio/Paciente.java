package Aula16.Exercicio;

class Paciente {
}
//    Um consultório médico precisa construir um sistema para gerenciar as
//    consultas dos pacientes e dos médicos.
//        Uma consulta só pode ser atribuída a um paciente e os dados necessários são:
//        data da consulta, especialidade, hora e minuto da consulta. Use o construtor
//        que permita atribuir todos esses atributos ao criar o objeto.
//        Cada paciente, além de ter uma consulta associada a ele, tem data de
//        nascimento, nome e sobrenome, além disso, é muito importante ter um atributo
//        que permita estabelecer se é sua primeira consulta ou não.
//        Existem dois tipos de serviços para os pacientes: particular e público. O paciente
//        particular deve ter informações de quanto será cobrado pela consulta e seu
//        número de RG. Já o paciente que utilizará o serviço público deve ter número da
//        sua carteirinha do sistema único de saúde.
//        O sistema deve ter as seguintes funcionalidades:
//        ● Diante de qualquer consulta, o sistema deve permitir avaliar se deve ou
//        não ser feita uma avaliação inicial do histórico clínico do paciente. A
//        avaliação só deve ser feita quando o paciente vem pela primeira vez.
//        ● No caso de consultas públicas, deve ser possível compará-las. Uma
//        consulta será maior que outra de acordo com o número da carteirinha.
//        Observação: Caso você ache necessário adicionar mais atributos ou métodos, pode
//        adicionar. O enunciado descreve o cenário mínimo.