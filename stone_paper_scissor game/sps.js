let arr=['stone','paper','scissor'];
        let userChoice = document.getElementById('yourc');
        let ComputerChoice = document.getElementById('computerc');
        let result = document.getElementById('result');

        let buttons = document.querySelectorAll('button');
        buttons.forEach(function(button){
            button.addEventListener('click',function (event){

                if(event.target.value === 'rematch'){
                    userChoice.textContent = '';
                    ComputerChoice.textContent ='';
                    result.textContent = '';
                }
            else{
                let com = Math.floor(Math.random() * 3);
                let user = event.target.value;
                let flag = false;
                let flag1 = false;

                userChoice.textContent = event.target.value;
                ComputerChoice.textContent = arr[com];

                if(user=="stone" && arr[com]=="scissor"){
                    flag=true;
                }
                else if(user=="paper" && arr[com]=="stone"){
                    flag=true;
                }
                else if(user=="scissor" && arr[com]=="paper"){
                    flag=true;
                }
                if(user=="stone" && arr[com]=="stone"){
                    flag1=true;
                }
                else if(user=="paper" && arr[com]=="paper"){
                    flag1=true;
                }
                else if(user=="scissor" && arr[com]=="scissor"){
                    flag1=true;
                }
                if(flag1) result.textContent = "Match Draw";
                else if(flag) result.textContent = "You Win";
                else result.textContent = "Computer Win";
            }
            },true)
        });