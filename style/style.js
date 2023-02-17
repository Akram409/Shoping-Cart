function test()
{
    console.log("hello")
}
function test1(value)
{
    console.log(value)
}

function getvalue(id)
{
    let x = document.getElementById(id).value
    return x
}
function setvalue(id,values)
{
    document.getElementById(id).value = values
}
function setinnertext(id,values)
{
    document.getElementById(id).innerText = values
}
function getinnertext(id)
{
    let x =document.getElementById(id).innerText
    return x
}
function subtotal()
{
    let x = parseInt(getinnertext('price1'))
    let y = parseInt(getinnertext('price2'))

    let z = parseInt((x+y))
    setinnertext('subtotal',z)

    let taxx = parseFloat(z * 0.1) 
    setinnertext('tax',taxx.toFixed(1))

    let total = parseFloat(z+taxx)
    setinnertext('total',total.toFixed(1))
}
function vanish(id)
{
    document.getElementById(id).style.display = 'none'
}


document.getElementById('fa-minus1').addEventListener("click",function(){
    let minus_value = parseInt(getvalue('first-input'))
    let prices1 = parseInt(getvalue('price1'))

    if(minus_value > 0)
    {
        minus_value-=1;
        setvalue('first-input',minus_value)
        let x = parseInt(minus_value * 1219)
        setinnertext('price1',x)
        subtotal()
    }
})

document.getElementById('fa-plus1').addEventListener("click",function(){
    let plus_value = parseInt(getvalue('first-input'))

        plus_value += 1;
        setvalue('first-input',plus_value)
        let x = parseInt(plus_value * 1219)
        setinnertext('price1',x)
        subtotal()
})


document.getElementById('fa-minus2').addEventListener("click",function(){
    let minus_value = parseInt(getvalue('second-input'))
    if(minus_value > 0)
    {
        minus_value-=1;
        setvalue('second-input',minus_value)
        let x = parseInt(minus_value * 59)
        setinnertext('price2',x)
        subtotal()
    }
})

document.getElementById('fa-plus2').addEventListener("click",function(){
    let plus_value = parseInt(getvalue('second-input'))

        plus_value += 1;
        setvalue('second-input',plus_value)
        let x = parseInt(plus_value * 59)
        setinnertext('price2',x)
        subtotal()
})

document.getElementById('remove1').addEventListener("click",function(){
    vanish('cart1')
})
document.getElementById('remove2').addEventListener("click",function(){
    vanish('cart2')
})

document.getElementById('checkout').addEventListener("click",function(){

})