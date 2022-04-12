/* Criar uma variável que recebe a idade via prompt e se a idade for maior ou igual a 18 ela tem acesso
   E se a variável for menor que 18 ela não tem acesso
*/

var idade = prompt(`Olá informe sua idade`);

idade >= 18 ?  alert(`Acesso autorizado`) : alert(`Acesso não autorizado`);
