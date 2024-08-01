
let promptAi;

function sendPrompt(){

}

function setNewPrompt(prompt){
    promptAi = prompt;
}

function setPathForPrompts(){

    fetch("http://localhost:8080/join")
        .then(function(res){

            console.log(res);

            if(res.ok){
                res.text()
                .then(function(response){
                    setNewPrompt(response);
                })
            }

        })
    }

setPathForPrompts();
