function add(){
    const a = parseInt(document.getElementById("first").value);
    const b = parseInt(document.getElementById("second").value);
    const result = a + b;
    document.getElementById("answer").innerText = result
}
