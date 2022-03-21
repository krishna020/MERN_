//condition ? <expression if true> : <expression if false>

function FText(text,formatcb)
{
    return typeof formatcb==='function' ? formatcb(text):text.
    toUppercase();

}

const result=FText('hello',function(text)
{
    return text.charAt(0).toUppercase() + text.slice(1)
});
console.log(result);
