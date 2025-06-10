// Question #57

// We need to take 10 input prompt from user and need to identify the even ad odd number and also  how can we we make multiple prompt

function takeInputAndIdentity() {

    let even = []
    let odd = []

    for (let i = 0; i < 10; i++) {

        let input = Number(prompt('Enter a num: '));



        if (isNaN(input)) {
            alert('Only num are allowed');
            i--;

        }

        if (input % 2 == 0) {
            alert('You Enter a even number');

            even.push(input);

        } else if (!input % 2 == 0) {
            alert('You Enter a odd number');
            odd.push(input)
        }






    }

    alert('Total even num you enter: ' + even);
    alert('Total odd num you enter: ' + odd);
}

takeInputAndIdentity();