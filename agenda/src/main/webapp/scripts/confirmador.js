/**
 *  confirmacao de exclusao de um contato
 *  @author cristiano oliveira
 *  param idcon
 */

function confirmar(idcon) {
	let resposta = confirm("confirma a exclusão deste contato ?");
	if (resposta === true) {
		window.location.href = "delete?idcon=" + idcon;
	}
}