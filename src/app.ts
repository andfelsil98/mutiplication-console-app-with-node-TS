import { yarg } from "./config/plugins/args.plugin";
import { serverApp } from "./presentation/server-app";


(async() => {
    // console.log("Hello World");
    await main();
    // console.log("Bye World");
    
})();


async function main(){
    // console.log("Hello World");
    // console.log(yarg);
    const { b: base, l: limit, s: showTable, n:name, d:destination } = yarg;
    serverApp.run({base, limit, showTable, name, destination});                        
}