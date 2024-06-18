const fileNameExtractor = require("../utility/processors")


test("'src/assets/img.png' returns img",()=>{
   expect(fileNameExtractor("src/assets/img.png")).toBe("img")
})