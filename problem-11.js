const signal = 'red';
if (signal.toLowerCase() === 'red') {
    console.log('It is Danger for you to cross the road');
}
else if (signal.toLowerCase() === 'yellow') {
    console.log('Please Stop');
}
else if (signal.toLowerCase() === 'green') {
    console.log('Your can cross the road')
}
else {
    console.log('please enter currect value')
}