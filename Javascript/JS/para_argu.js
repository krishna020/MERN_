function add(num1,num2) // its a parameter
{
  
  document.write("add of two number : "+(num1+num2));

}

add(3,5 );  // its a argument.


//argument object

function addition()
{
	if(arguments==0)
	{
		console.log("no parameter")
	}
	else
	{
		let sum=0;let i=0;
		for(i=0;i<arguments.length;i++)
		{
			sum=sum+arguments[i];
		}
		console.log(sum);
	}
}
addition(5,7,3,4,5,6,7,8);
let also_use=addition;
also_use(1,2,3,4,5);
