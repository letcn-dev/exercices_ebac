$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        const tarefa = $('#nome-tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(tarefa)
        $(novoItem).appendTo('ul');

        $(novoItem).click(function(){
            $(this).attr('class', 'line');
        })
    })
})