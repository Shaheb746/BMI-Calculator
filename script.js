document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    let height = parseInt(document.querySelector('#height').value);
    let weight = parseInt(document.querySelector('#weight').value);

    const guid = document.querySelector('#weight-para');
    let result = document.querySelector('#result');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = 'Please enter a valid height!';
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = 'Please enter a valid weight!';
    } else {
        const BMI = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `<span>${BMI}</span>`;
    }

    if (height === '' || height < 0 || isNaN(height) || weight === '' || weight < 0 || isNaN(weight)) {
        guid.innerHTML = '';
    } else {
        const BMI = weight / ((height * height) / 10000);
        if (BMI < 18.6) {
            guid.innerHTML = `Your weight is Underweight`;
        } else if (BMI >= 18.6 && BMI <= 24.9) {
            guid.innerHTML = `Your weight is Normal`;
        } else {
            guid.innerHTML = `Your weight is Overweight`;
        }
    }
});
