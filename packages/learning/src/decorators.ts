
const Log = ()=>{
    return (target:any, name: string|Symbol, descriptor: any)=>{
        console.log(`${name} invoked.`);
        return descriptor;
    }
}

class Vehicle{
    @Log()
    run(name: string): void{
        console.log(`running: ${name}`);
    }
}


new Vehicle().run('car');
