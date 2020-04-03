module.exports = {
    name: "number",
    description: "donne des fatcs (random) sur des nombres",
    run: async (client, message, args) => {
        if (args[1] === 'def') {
            let getMot = async () => {
                let response = await unirest.get("http://numbersapi.com/random/math")
                    .header("X-Mashape-Key", "e0d10c86dfmsh30f5845af8ce81ep148e9ajsn82de9e842fc6")
                    .header("Accept", "application/json");
                let def = response.body;
                return def;
            }
            let numberFact = await getMot();
            console.log(numberFact);
        }

    }
}