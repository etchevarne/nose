document.addEventListener("DOMContentLoaded", function() {
    let sliders = ['question1', 'question2', 'question3', 'question4', 'question5'];
    let labels = ['label1', 'label2', 'label3', 'label4', 'label5'];

    sliders.forEach(function(sliderId, index) {
        let slider = document.getElementById(sliderId);
        let label = document.getElementById(labels[index]);

        slider.oninput = function() {
            let impact = "";
            let color = "";
            let background = "";
        
            switch(parseInt(this.value)) {
                case 0:
                    impact = "Nenhum impacto";
                    color = 'lightgreen';
                    // background = '#363636';
                    break;
                case 1:
                    impact = "Discreto impacto";
                    color = 'gold';
                    // background = '#363636';
                    break;
                case 2:
                    impact = "Leve impacto";
                    color = 'orange';
                    // background = '#363636';
                    break;
                case 3:
                    impact = "Moderado impacto";
                    color = 'red';
                    // background = '#363636';
                    break;
                case 4:
                    impact = "Grave impacto";
                    color = 'maroon';
                    // background = '#363636';
                    break;
            }
        
            // Atualizar o elemento de label com o impacto
            label.innerText = impact;
            label.style.color = color;
            label.style.background = background;
        };
    });
});
